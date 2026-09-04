/**
 * Portfolio Tracker — Apps Script Backend
 * OS v13.0.5.8.3 — Cost Centre Budget Dashboard
 *
 * Setup:
 * 1. Import Portfolio_Tracker_OS_v13_0_0_Google_Sheets_Backend_Migration.xlsx
 *    into a NEW Google Sheet.
 * 2. Add this script to Extensions > Apps Script in the new workbook.
 * 3. In Project Settings > Script properties add PORTFOLIO_SECRET_TOKEN.
 * 4. Deploy as Web App, execute as yourself, grant access only as needed.
 */

const APP_VERSION = 'OS v13.0.5.8.3';
const TOKEN_PROPERTY = 'PORTFOLIO_SECRET_TOKEN';
const TABLES = {
  accounts: 'Config_Accounts',
  instruments: 'Config_Instruments',
  categories: 'Config_Categories',
  settings: 'Settings',
  plans: 'Monthly_Plan',
  transactions: 'Workbook',
  balances: 'AccountBalances',
  valuations: 'Asset_Valuations',
  receivables: 'Receivables',
  snapshots: 'Portfolio_Snapshots'
};

const HEADERS = {
  Workbook: ['transaction_id','created_timestamp','transaction_date','reporting_month','transaction_type','category_id','amount','account_id','from_account_id','to_account_id','instrument_id','receivable_id','note','source','my_share','reimbursable_amount','reimbursement_status','reimbursement_date','reimbursement_account_id','reimbursement_amount','legacy_type','legacy_instrument','migration_notes','last_updated_timestamp','cost_centre','behaviour'],
  AccountBalances: ['reporting_month','account_id','actual_balance','balance_observed_date','source','status','notes'],
  Asset_Valuations: ['valuation_id','reporting_month','instrument_id','value_type','amount','source','status','value_observed_date','statement_received_date','replaces_valuation_id','notes'],
  Receivables: ['receivable_id','short_reference','origination_date','original_amount','source_account_id','due_date','status','notes','created_source'],
  Portfolio_Snapshots: ['snapshot_id','reporting_month','instrument_id','amount','value_basis','status','source_reference','notes']
};

function doGet(e) {
  try {
    const body = parseRequestBody(e);
    const action = String(body.action || '').trim();
    if (action) {
      requireAuth(body.token);
      if (action === 'getAll') return respond(loadAll());
      throw new Error('Unsupported GET action.');
    }
  } catch (err) {
    return respond({ ok: false, error: String(err && err.message ? err.message : err) });
  }
  return respond({ ok: true, app: 'PortOS API', version: APP_VERSION, privateData: false });
}

function doPost(e) {
  try {
    const body = parseRequestBody(e);
    requireAuth(body.token);
    const action = String(body.action || '').trim();
    if (action === 'getAll') return respond(loadAll());
    if (action === 'addTransaction') return respond({ ok: true, lastSync: nowIso(), transaction: addTransaction(body.transaction || {}) });
    if (action === 'updateTransaction') return respond({ ok: true, lastSync: nowIso(), transaction: updateTransaction(body.transaction_id, body.transaction || {}) });
    if (action === 'deleteTransaction') return respond({ ok: true, lastSync: nowIso(), deleted: deleteTransaction(body.transaction_id) });
    if (action === 'recordReimbursement') return respond({ ok: true, lastSync: nowIso(), transaction: recordReimbursement(body.transaction_id, body.reimbursement || {}) });
    if (action === 'createReceivable') return respond({ ok: true, lastSync: nowIso(), result: createReceivable(body.receivable || {}) });
    if (action === 'recordReceivableSettlement') return respond({ ok: true, lastSync: nowIso(), transaction: recordReceivableSettlement(body.settlement || {}) });
    if (action === 'updateReceivableMetadata') return respond({ ok: true, lastSync: nowIso(), receivable: updateReceivableMetadata(body.receivable_id, body.updates || {}) });
    if (action === 'saveAccountBalance') return respond({ ok: true, lastSync: nowIso(), balance: saveAccountBalance(body.balance || {}) });
    if (action === 'saveValuation') return respond({ ok: true, lastSync: nowIso(), valuation: saveValuation(body.valuation || {}) });
    if (action === 'confirmValuation') return respond({ ok: true, lastSync: nowIso(), valuation: confirmValuation(body.valuation || {}) });
    if (action === 'saveMonthSnapshot') return respond({ ok: true, lastSync: nowIso(), rows: saveMonthSnapshot(body.reporting_month, body.status, body.rows || []) });
    throw new Error('Unsupported action.');
  } catch (err) {
    return respond({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function loadAll() {
  ensureRequiredSheets();
  return {
    ok: true,
    privateData: true,
    version: APP_VERSION,
    lastSync: nowIso(),
    config: {
      accounts: readRows(TABLES.accounts).map(clientAccountConfig),
      instruments: readRows(TABLES.instruments).map(clientInstrumentConfig),
      categories: readRows(TABLES.categories)
    },
    settings: clientSettings(readRows(TABLES.settings)),
    monthlyPlan: readRows(TABLES.plans),
    transactions: readRows(TABLES.transactions),
    accountBalances: readRows(TABLES.balances),
    assetValuations: readRows(TABLES.valuations),
    receivables: readRows(TABLES.receivables),
    portfolioSnapshots: readRows(TABLES.snapshots)
  };
}


function parseRequestBody(e) {
  const raw = (e && e.postData && e.postData.contents) ? String(e.postData.contents) : '';
  const params = (e && e.parameter) ? e.parameter : {};
  if (params.payload) {
    try { return JSON.parse(String(params.payload)); }
    catch (err) { throw new Error('Invalid JSON payload: ' + (err && err.message ? err.message : err)); }
  }
  if (raw) {
    try { return JSON.parse(raw); }
    catch (jsonErr) {
      if (raw.indexOf('payload=') === 0) {
        try {
          const decoded = decodeURIComponent(raw.replace(/^payload=/, '').replace(/\+/g, ' '));
          return JSON.parse(decoded);
        } catch (payloadErr) {
          throw new Error('Invalid JSON payload: ' + (payloadErr && payloadErr.message ? payloadErr.message : payloadErr));
        }
      }
      throw new Error('Invalid JSON request body: ' + (jsonErr && jsonErr.message ? jsonErr.message : jsonErr));
    }
  }
  return {};
}

function requireAuth(token) {
  const expected = PropertiesService.getScriptProperties().getProperty(TOKEN_PROPERTY);
  if (!expected) throw new Error('Backend secret token has not been configured.');
  if (!token || String(token) !== String(expected)) throw new Error('Authorisation failed.');
}
function ss() { return SpreadsheetApp.getActiveSpreadsheet(); }
function nowIso() { return new Date().toISOString(); }
function respond(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function key(v) { return String(v === null || v === undefined ? '' : v).trim().toLowerCase(); }
function text(v) { return String(v === null || v === undefined ? '' : v).trim(); }
function number(v) { const n = Number(String(v === null || v === undefined ? '' : v).replace(/,/g,'')); return isFinite(n) ? n : 0; }
function isoDate(v) {
  if (!v) return '';
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v)) return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const d = new Date(v); return isNaN(d) ? text(v) : Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
}
function reportingMonthFromDate(v) { const d = isoDate(v); return d ? d.slice(0,7) : ''; }
function monthKey(v) {
  if (!v) return '';
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v)) return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM');
  const s = text(v);
  if (/^\d{4}-\d{2}$/.test(s)) return s;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0,7);
  const d = new Date(s);
  return isNaN(d) ? s : Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM');
}
function newId(prefix) { return prefix + '_' + Utilities.getUuid().replace(/-/g,'').slice(0,18); }

function ensureRequiredSheets() {
  Object.keys(HEADERS).forEach(function(name) { ensureSheet(name, HEADERS[name]); });
}
function ensureSheet(name, headers) {
  let sh = ss().getSheetByName(name);
  if (!sh) { sh = ss().insertSheet(name); sh.getRange(1,1,1,headers.length).setValues([headers]); return sh; }
  const existing = sh.getRange(1,1,1,Math.max(sh.getLastColumn(), headers.length)).getValues()[0].map(key);
  if (headers.some(function(h, i) { return key(existing[i]) !== key(h); })) {
    throw new Error('Sheet ' + name + ' headers do not match v13 schema. Import the prepared v13 workbook or repair the sheet before use.');
  }
  return sh;
}
function getSheet(name) { const sh = ss().getSheetByName(name); if (!sh) throw new Error('Required sheet not found: ' + name); return sh; }
function readRows(name) {
  const sh = getSheet(name); const values = sh.getDataRange().getValues(); if (!values.length) return [];
  const headers = values[0].map(key); const out = [];
  values.slice(1).forEach(function(row) {
    if (!row.some(function(v){ return text(v) !== ''; })) return;
    const obj = {};
    headers.forEach(function(h, i) {
      let v = row[i];
      if (h === 'reporting_month') v = monthKey(v);
      else if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v)) v = isoDate(v);
      obj[h] = v;
    });
    out.push(obj);
  });
  return out;
}
function clientAccountConfig(row) { const out = Object.assign({}, row); out.include_in_quick_sum = out.include_in_actual_bni_sum; delete out.include_in_actual_bni_sum; return out; }
function clientInstrumentConfig(row) {
  const out = Object.assign({}, row); out.include_in_quick_sum = out.include_in_actual_bni_sum; delete out.include_in_actual_bni_sum;
  // Monthly_Plan in the v13 backend uses canonical instrument IDs.
  // Returning this only after authentication keeps instrument mapping private.
  out.plan_category_id = key(out.instrument_id);
  return out;
}
function rowsToSettings(rows) { const out = {}; rows.forEach(function(r){ out[key(r.key)] = r.value; }); return out; }
function clientSettings(rows) { const out = rowsToSettings(rows); if (!out.quick_sum_label || key(out.quick_sum_label) === 'configured account quick sum') out.quick_sum_label = 'Actual BNI Account Quick Sum'; return out; }
function rowMap(headers, obj) { return headers.map(function(h) { return obj[h] === undefined ? '' : obj[h]; }); }
function writeObjectRow(sh, row, headers, obj) {
  const values = rowMap(headers, obj); const monthCol = headers.indexOf('reporting_month');
  if (monthCol >= 0) values[monthCol] = monthKey(values[monthCol]);
  const range = sh.getRange(row,1,1,headers.length); range.setValues([values]);
  if (monthCol >= 0) sh.getRange(row,monthCol+1).setNumberFormat('@').setValue(values[monthCol]);
  return obj;
}
function findRowByValue(sh, col, value) {
  if (sh.getLastRow() < 2) return 0;
  const vals = sh.getRange(2,col,sh.getLastRow()-1,1).getValues();
  for (let i=0; i<vals.length; i++) if (String(vals[i][0]) === String(value)) return i + 2;
  return 0;
}
function appendObject(sheetName, headers, obj) {
  const sh = ensureSheet(sheetName, headers); const row = sh.getLastRow() + 1; writeObjectRow(sh, row, headers, obj); return obj;
}
function updateObjectAt(sh, row, headers, obj) { return writeObjectRow(sh, row, headers, obj); }
function configuredValues(sheetName, idField) { const out = {}; readRows(sheetName).forEach(function(r){ if (r.active === true || key(r.active) === 'true') out[key(r[idField])] = r; }); return out; }
function configuredAllValues(sheetName, idField) { const out = {}; readRows(sheetName).forEach(function(r){ out[key(r[idField])] = r; }); return out; }
function categoryAllowedForTransaction(category, activeCategories, allCategories, existing) {
  if (activeCategories[category]) return true;
  return !!(existing && key(existing.category_id) === category && allCategories[category]);
}

function normalizeTransaction(input, isUpdate, existing) {
  const type = key(input.transaction_type || input.type);
  const allowed = ['income','expense','investment','transfer','split_bill','receivable_out','receivable_settlement'];
  if (allowed.indexOf(type) < 0) throw new Error('Invalid transaction type.');
  const transactionDate = isoDate(input.transaction_date || input.date);
  if (!transactionDate) throw new Error('Transaction date is required.');
  const amount = number(input.amount); if (!(amount > 0)) throw new Error('Amount must be greater than zero.');
  const accounts = configuredValues(TABLES.accounts,'account_id');
  const instruments = configuredValues(TABLES.instruments,'instrument_id');
  const categories = configuredValues(TABLES.categories,'category_id');
  const allCategories = configuredAllValues(TABLES.categories,'category_id');
  const account = key(input.account_id || input.account), from = key(input.from_account_id || input.from_account), to = key(input.to_account_id || input.to_account);
  const category = key(input.category_id || input.category), instrument = key(input.instrument_id || input.instrument), receivable = text(input.receivable_id);
  if (['income','expense','investment','split_bill','receivable_out','receivable_settlement'].indexOf(type) >= 0 && !accounts[account]) throw new Error('Select a valid cash account.');
  if (type === 'transfer' && (!accounts[from] || !accounts[to] || from === to)) throw new Error('Select two different valid transfer accounts.');
  if ((type === 'income' || type === 'expense' || type === 'split_bill') && !categoryAllowedForTransaction(category, categories, allCategories, isUpdate ? existing : null)) throw new Error('Select a valid category.');
  if (type === 'investment' && !instruments[instrument]) throw new Error('Select a valid investment instrument.');
  if ((type === 'receivable_out' || type === 'receivable_settlement') && !receivable) throw new Error('Receivable reference is required.');
  const ownShare = number(input.my_share), reimbursable = type === 'split_bill' ? Math.max(0, amount - ownShare) : number(input.reimbursable_amount);
  if (type === 'split_bill' && (!(ownShare > 0) || ownShare > amount)) throw new Error('Split Bill own share must be greater than zero and not exceed total paid.');
  const categoryConfig = allCategories[category] || categories[category] || {};
  const noteValue = text(input.note);
  if ((type === 'expense' || type === 'split_bill') && category === 'cash_withdrawal' && !noteValue) {
    const unchangedLegacy = isUpdate && existing && key(existing.category_id) === 'cash_withdrawal' && !text(existing.note);
    if (!unchangedLegacy) throw new Error('What was this for? Add a note for cash / e-wallet use.');
  }
  return {
    transaction_id: text(input.transaction_id) || newId('tx'),
    created_timestamp: text(input.created_timestamp) || nowIso(),
    transaction_date: transactionDate,
    reporting_month: reportingMonthFromDate(transactionDate),
    transaction_type: type,
    category_id: category,
    amount: amount,
    account_id: account,
    from_account_id: from,
    to_account_id: to,
    instrument_id: instrument,
    receivable_id: receivable,
    note: noteValue,
    source: text(input.source) || 'app',
    my_share: type === 'split_bill' ? ownShare : 0,
    reimbursable_amount: type === 'split_bill' ? reimbursable : 0,
    reimbursement_status: type === 'split_bill' ? (key(input.reimbursement_status) === 'reimbursed' ? 'reimbursed' : 'pending') : '',
    reimbursement_date: type === 'split_bill' ? isoDate(input.reimbursement_date) : '',
    reimbursement_account_id: type === 'split_bill' ? key(input.reimbursement_account_id || input.reimbursement_account || account) : '',
    reimbursement_amount: type === 'split_bill' && key(input.reimbursement_status) === 'reimbursed' ? (number(input.reimbursement_amount) || reimbursable) : 0,
    legacy_type: text(input.legacy_type),
    legacy_instrument: text(input.legacy_instrument),
    migration_notes: text(input.migration_notes),
    last_updated_timestamp: nowIso(),
    cost_centre: text(categoryConfig.cost_centre || input.cost_centre),
    behaviour: text(categoryConfig.behaviour || input.behaviour)
  };
}
function addTransaction(input) { return appendObject(TABLES.transactions, HEADERS.Workbook, normalizeTransaction(input, false, null)); }
function updateTransaction(id, input) {
  const sh = ensureSheet(TABLES.transactions, HEADERS.Workbook); const row = findRowByValue(sh, 1, id); if (!row) throw new Error('Transaction not found.');
  const old = readRows(TABLES.transactions).filter(function(t){ return String(t.transaction_id) === String(id); })[0];
  if (old && old.transaction_type === 'receivable_out') {
    const settlements = readRows(TABLES.transactions).filter(function(t){ return t.receivable_id === old.receivable_id && t.transaction_type === 'receivable_settlement'; });
    if (settlements.length) throw new Error('A receivable with settlements cannot be edited from Recent Transactions. Edit metadata or remove settlements first.');
  }
  const tx = normalizeTransaction(Object.assign({}, input, { transaction_id:id, created_timestamp: old ? old.created_timestamp : nowIso() }), true, old);
  if (old) {
    tx.migration_notes = text(input.migration_notes) || text(old.migration_notes);
    if (!tx.cost_centre) tx.cost_centre = text(old.cost_centre);
    if (!tx.behaviour) tx.behaviour = text(old.behaviour);
  }
  if (tx.transaction_type === 'receivable_settlement') {
    const available = outstandingFor(tx.receivable_id) + (old && old.transaction_type === 'receivable_settlement' && old.receivable_id === tx.receivable_id ? number(old.amount) : 0);
    if (number(tx.amount) > available) throw new Error('Settlement cannot exceed outstanding principal.');
  }
  const updated = updateObjectAt(sh, row, HEADERS.Workbook, tx);
  if (old && old.receivable_id) refreshReceivableStatus(old.receivable_id);
  if (tx.receivable_id) refreshReceivableStatus(tx.receivable_id);
  return updated;
}
function deleteTransaction(id) {
  const sh = ensureSheet(TABLES.transactions, HEADERS.Workbook); const all = readRows(TABLES.transactions); const tx = all.filter(function(t){ return String(t.transaction_id) === String(id); })[0]; if (!tx) throw new Error('Transaction not found.');
  if (tx.transaction_type === 'receivable_out' && all.some(function(t){ return t.receivable_id === tx.receivable_id && t.transaction_type === 'receivable_settlement'; })) throw new Error('Delete settlements before deleting the original receivable.');
  const row = findRowByValue(sh, 1, id); sh.deleteRow(row);
  if (tx.transaction_type === 'receivable_out') {
    const rsh = ensureSheet(TABLES.receivables, HEADERS.Receivables); const rrow = findRowByValue(rsh, 1, tx.receivable_id); if (rrow) rsh.deleteRow(rrow);
  } else if (tx.receivable_id) { refreshReceivableStatus(tx.receivable_id); }
  return id;
}
function recordReimbursement(id, input) {
  const sh = ensureSheet(TABLES.transactions, HEADERS.Workbook); const rows = readRows(TABLES.transactions); const tx = rows.filter(function(t){ return String(t.transaction_id) === String(id); })[0];
  if (!tx || tx.transaction_type !== 'split_bill') throw new Error('Split Bill transaction not found.');
  tx.reimbursement_status = 'reimbursed'; tx.reimbursement_date = isoDate(input.reimbursement_date) || isoDate(new Date());
  tx.reimbursement_account_id = key(input.reimbursement_account_id || tx.account_id); tx.reimbursement_amount = number(input.reimbursement_amount) || number(tx.reimbursable_amount); tx.last_updated_timestamp = nowIso();
  return updateObjectAt(sh, findRowByValue(sh,1,id), HEADERS.Workbook, tx);
}

function createReceivable(input) {
  const lock = LockService.getScriptLock(); lock.waitLock(30000);
  try {
    const amount = number(input.original_amount || input.amount); if (!(amount > 0)) throw new Error('Receivable amount must be greater than zero.');
    const reference = text(input.short_reference); if (!reference) throw new Error('Short reference is required.');
    const account = key(input.source_account_id || input.account_id); const accounts = configuredValues(TABLES.accounts,'account_id');
    if (!accounts[account] || !(accounts[account].allow_receivable_transactions === true || key(accounts[account].allow_receivable_transactions) === 'true')) throw new Error('Selected account is not enabled for receivable activity.');
    const rec = {
      receivable_id: text(input.receivable_id) || newId('recv'), short_reference: reference, origination_date: isoDate(input.origination_date || input.transaction_date),
      original_amount: amount, source_account_id: account, due_date: isoDate(input.due_date), status: 'Open', notes: text(input.notes), created_source: 'app'
    };
    appendObject(TABLES.receivables, HEADERS.Receivables, rec);
    const tx = addTransaction({ transaction_type:'receivable_out', transaction_date:rec.origination_date, amount:amount, account_id:account, receivable_id:rec.receivable_id, note:reference, source:'app' });
    return { receivable: rec, transaction: tx };
  } finally { lock.releaseLock(); }
}
function outstandingFor(receivableId) {
  const rec = readRows(TABLES.receivables).filter(function(r){ return r.receivable_id === receivableId; })[0]; if (!rec) throw new Error('Receivable not found.');
  const settlements = readRows(TABLES.transactions).filter(function(t){ return t.receivable_id === receivableId && t.transaction_type === 'receivable_settlement'; }).reduce(function(s,t){ return s + number(t.amount); }, 0);
  return Math.max(0, number(rec.original_amount) - settlements);
}
function refreshReceivableStatus(receivableId) {
  const sh = ensureSheet(TABLES.receivables, HEADERS.Receivables); const row = findRowByValue(sh,1,receivableId); if (!row) return;
  const rec = readRows(TABLES.receivables).filter(function(r){ return r.receivable_id === receivableId; })[0]; const outstanding = outstandingFor(receivableId);
  rec.status = outstanding === 0 ? 'Settled' : (outstanding < number(rec.original_amount) ? 'Partially Paid' : 'Open'); updateObjectAt(sh,row,HEADERS.Receivables,rec);
}
function recordReceivableSettlement(input) {
  const id = text(input.receivable_id); if (!id) throw new Error('Select a receivable.');
  const amount = number(input.amount); const outstanding = outstandingFor(id); if (!(amount > 0) || amount > outstanding) throw new Error('Settlement cannot exceed outstanding principal.');
  const tx = addTransaction({ transaction_type:'receivable_settlement', transaction_date:input.transaction_date || input.date, amount:amount, account_id:input.account_id, receivable_id:id, note:text(input.note), source:'app' });
  refreshReceivableStatus(id); return tx;
}
function updateReceivableMetadata(id, updates) {
  const sh = ensureSheet(TABLES.receivables, HEADERS.Receivables); const row = findRowByValue(sh,1,id); if (!row) throw new Error('Receivable not found.');
  const rec = readRows(TABLES.receivables).filter(function(r){ return r.receivable_id === id; })[0];
  if (updates.short_reference !== undefined) rec.short_reference = text(updates.short_reference);
  if (updates.due_date !== undefined) rec.due_date = isoDate(updates.due_date);
  if (updates.notes !== undefined) rec.notes = text(updates.notes);
  updateObjectAt(sh,row,HEADERS.Receivables,rec); return rec;
}

function saveAccountBalance(input) {
  const month = monthKey(input.reporting_month), account = key(input.account_id); if (!/^\d{4}-\d{2}$/.test(month)) throw new Error('Reporting month must be YYYY-MM.');
  const accounts = configuredValues(TABLES.accounts,'account_id'); if (!accounts[account]) throw new Error('Account not found.');
  const obj = { reporting_month: month, account_id: account, actual_balance: number(input.actual_balance), balance_observed_date: isoDate(input.balance_observed_date), source: text(input.source) || 'banking_app', status: 'confirmed', notes: text(input.notes) };
  const sh = ensureSheet(TABLES.balances, HEADERS.AccountBalances); const rows = readRows(TABLES.balances); const existing = rows.find(function(r){ return r.reporting_month === month && r.account_id === account; });
  if (existing) { const row = rows.indexOf(existing) + 2; return updateObjectAt(sh,row,HEADERS.AccountBalances,obj); }
  return appendObject(TABLES.balances, HEADERS.AccountBalances,obj);
}
function valuationKeyMatch(v, x) { return v.reporting_month === x.reporting_month && v.instrument_id === x.instrument_id && v.value_type === x.value_type && v.status === x.status; }
function saveValuation(input) {
  const obj = {
    valuation_id: text(input.valuation_id) || newId('val'), reporting_month: monthKey(input.reporting_month), instrument_id: key(input.instrument_id), value_type: key(input.value_type),
    amount: number(input.amount), source: text(input.source) || 'app_display', status: key(input.status) || 'provisional', value_observed_date: isoDate(input.value_observed_date),
    statement_received_date: isoDate(input.statement_received_date), replaces_valuation_id: text(input.replaces_valuation_id), notes: text(input.notes)
  };
  if (!/^\d{4}-\d{2}$/.test(obj.reporting_month) || !obj.instrument_id || !obj.value_type) throw new Error('Valuation month, instrument and value type are required.');
  const instruments = configuredValues(TABLES.instruments,'instrument_id'); if (!instruments[obj.instrument_id]) throw new Error('Instrument not found.');
  if (!(obj.amount >= 0)) throw new Error('Valuation amount is required.');
  const sh = ensureSheet(TABLES.valuations, HEADERS.Asset_Valuations); const rows = readRows(TABLES.valuations); const existing = rows.find(function(r){ return valuationKeyMatch(r,obj); });
  if (existing) { obj.valuation_id = existing.valuation_id; return updateObjectAt(sh, rows.indexOf(existing)+2, HEADERS.Asset_Valuations, obj); }
  return appendObject(TABLES.valuations, HEADERS.Asset_Valuations, obj);
}
function confirmValuation(input) {
  input.status = 'confirmed'; input.source = input.source || 'bank_statement'; input.statement_received_date = input.statement_received_date || isoDate(new Date());
  return saveValuation(input);
}
function saveMonthSnapshot(month, status, rows) {
  month = monthKey(month);
  if (!/^\d{4}-\d{2}$/.test(String(month || ''))) throw new Error('Reporting month is required for snapshot.');
  if (['provisional_closed','confirmed_closed'].indexOf(key(status)) < 0) throw new Error('Invalid snapshot status.');
  if (!rows || !rows.length) throw new Error('Snapshot rows are required.');
  const sh = ensureSheet(TABLES.snapshots, HEADERS.Portfolio_Snapshots); const existing = readRows(TABLES.snapshots);
  for (let i = existing.length - 1; i >= 0; i--) { if (existing[i].reporting_month === month) sh.deleteRow(i + 2); }
  rows.forEach(function(r) {
    appendObject(TABLES.snapshots, HEADERS.Portfolio_Snapshots, {
      snapshot_id: text(r.snapshot_id) || newId('snap'), reporting_month: month, instrument_id: key(r.instrument_id), amount: number(r.amount),
      value_basis: key(r.value_basis) || 'compiled_month_end', status: key(status), source_reference: text(r.source_reference), notes: text(r.notes)
    });
  });
  return rows.length;
}
