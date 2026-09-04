# PortOS — OS v13.0.5.3
## Month-End Readiness & Transaction Layout Fix

Public-PWA-only patch based on PortOS OS v13.0.5.2.

### Month-End Snapshot readiness
- Replaced the unexplained save control with a readiness card.
- Lists required month-end items and completed/pending status.
- Disables snapshot save until the month has ended and required provisional-close inputs exist.
- Shows the statement-confirmation checklist after provisional close.
- Prevents an in-progress month from being saved as a month-end snapshot.

### Monthly Recent Transactions
- Moved Recent Transactions immediately below Expense Control.
- Stacks Split Bill details for better mobile readability.
- Standardizes the amount/action-button layout for all transaction types.
- Preserves existing Edit/Delete/reimbursement functions and rollback-style amount formatting.

### Deployment
No Apps Script or Google Sheet update is required.
