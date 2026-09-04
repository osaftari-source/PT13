# PortOS — OS v13.0.5.6.10
## Smart Account Defaults Fix

Narrow front-end workflow correction based on PortOS OS v13.0.5.6.9.

### Fixed
- Transfer form now defaults `To Account` to `BNI Saving` when `From Account` is `BSI Operational`, and defaults `To Account` to `BSI Operational` when `From Account` is `BNI Saving`.
- Transfer destination remains visible and editable; same-account transfer is prevented before submission, while the existing backend validation remains intact.
- Split Bill Reimbursement now defaults `Received Into` to the original cash account used for payment and defaults the amount to the outstanding reimbursable amount; both fields remain editable.
- Receivable Settlement now defaults the amount to the selected receivable outstanding balance and defaults `Received Into` to the original lending account; both fields remain editable and refresh when another receivable is selected.

### Preserved
- Monthly Report Generation and Scaled Presentation Mode are not included in this patch.
- Existing Privacy eye-button behaviour is unchanged.
- Mobile month-header typography fix, Portfolio/Dashboard KPI refinements, consistent navigation icons, dark-mode fix, transaction-note display, compact decimal-point K/M/B format, comma-separated full Recent Transaction amounts, and App Installation & Update Management are preserved.
- Financial calculation logic, Apps Script backend and Google Sheet structure are unchanged.

### Deployment
No Apps Script, Google Sheet, `styles.css`, manifest or icon update is required. Replace `app.js`, `index.html` and `service-worker.js` only.
