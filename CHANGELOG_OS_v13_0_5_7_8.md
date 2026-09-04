# PortOS OS v13.0.5.7.8 — Receivable Settlement Save Action Fix

## Scope
Narrow public-PWA-only frontend workflow fix from OS v13.0.5.7.7.

## Fix
- Corrected the Receivable Settlement modal save path.
- New settlement saves now use the existing backend-supported `addTransaction` action with `transaction_type: receivable_settlement`.
- Existing settlement edits continue to use `updateTransaction`.
- Removes dependency on unsupported `recordReceivableSettlement` action, which caused the app to receive an HTML error page instead of JSON.

## Expected Behaviour
- Recording a receivable settlement should save and sync without the `Unexpected token '<', "<!DOCTYPE"... is not valid JSON` error.
- Settlement increases the selected receiving cash account.
- Settlement reduces the open receivable balance.
- Settlement is not counted as income.
- June receivables settled in July remain June month-end receivables but increase July cash when received.

## Not Changed
- Backend / Apps Script.
- Google Sheet structure.
- Dashboard calculations except through normal saved settlement data.
- Monthly operational page except settlement save workflow.
- Portfolio.
- Monthly Report analytics.
- Actual BNI Quick Sum.
- Styles, manifest, icons.

## Files Changed
- `app.js`
- `index.html`
- `service-worker.js`

`styles.css` unchanged.
