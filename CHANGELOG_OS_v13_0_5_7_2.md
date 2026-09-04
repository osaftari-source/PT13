# PortOS OS v13.0.5.7.2 — Split-Bill Reimbursement Cash Flow Fix

## Scope
Narrow public-PWA cash-flow logic correction from v13.0.5.7.1.

## Fix
- Corrects account balance calculations for split-bill reimbursements when the reimbursement is received into a different account from the original payment account.
- Original split-bill payment now reduces the original paying account by the full paid amount.
- Reimbursement is treated as its own cash inflow to `reimbursement_account_id` using `reimbursement_date`.
- Supports reimbursement timing after the original transaction month, even when the balance anchor is later than the original split-bill month.
- Keeps reimbursement as an asset-form/cash movement, not income.

## Preserved
- Transaction form structure and Google Sheet schema are unchanged.
- Apps Script backend is unchanged.
- Dashboard, Monthly, Portfolio and Monthly Report calculations are only affected through corrected cash-account balances where split-bill reimbursements exist.
- Existing Monthly Report income quality and confirmed valuation basis fixes are preserved.

## Deployment
Replace `app.js`, `index.html`, and `service-worker.js`. `styles.css`, manifest, icons, Apps Script and Google Sheet structure are unchanged.
