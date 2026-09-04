# PortOS OS v13.0.5.6.15 — Context-Sensitive Recent Transaction Filters

## Type
Narrow public-PWA repair patch based on PortOS OS v13.0.5.6.14.

## Scope
Fixes the Recent Transactions secondary filter so that its options respond to the selected transaction type.

## Implemented
- Expense and Split Bill transaction filters show applicable expense categories.
- Income transaction filter shows income categories, including categories such as Salary, Deposito Return, SBN Existing Coupon, and other active income categories from configuration.
- Investment transaction filter uses investment instruments instead of expense categories.
- Transfer, Receivable Out, and Receivable Settlement disable the non-applicable secondary category/instrument filter.
- Changing the transaction type clears any incompatible previously selected secondary filter.
- Existing account filter, sort mode, pagination, edit/delete actions, and reimbursement actions are preserved.

## Not Included
- No Monthly Report Other Income drill-down enhancement.
- No Scaled Presentation Mode.
- No report calculation change.
- No transaction data, backend, Apps Script, Google Sheet, manifest, icon, or style change.

## Files to Replace from v13.0.5.6.14
- app.js
- index.html
- service-worker.js

## Validation
- JavaScript syntax check passed.
- Service worker syntax check passed.
- Version and cache markers updated to v13.0.5.6.15.
- Patch scope verified as Recent Transactions filtering only.
