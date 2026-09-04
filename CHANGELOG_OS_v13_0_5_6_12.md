# PortOS — OS v13.0.5.6.12
## Expense Drill-Down Report Refinement

Narrow Monthly Report analysis refinement based on PortOS OS v13.0.5.6.11.

### Added
- Dedicated `Installment Analysis` inside the Monthly Report Expense Analysis section, shown whenever the category exists in the reporting month.
- Credit-card expense subtotal within Installment Analysis based on transaction notes identifying credit-card items (for example, `CC JCB` and `CC Titanium`).
- Dedicated `Rizka Analysis` showing note-level spending detail and budget position.
- Separate reference to Rizka-related incidental items where recorded under `Incidental`, without merging them into regular Rizka budget performance.
- Automatic note-based drill-down for any regular expense category that exceeds its budget.
- Over-budget category summary table before the detailed drill-downs.

### Preserved Treatment
- Incidental expenses remain actual-only and separate from regular budget performance.
- Report analysis is observational only; no transaction category or stored data is changed.
- Full Monthly Report, Expense Review, Income & Expense Review, and Custom reports selecting Expense Analysis all inherit the new drill-down analysis.
- Internal transfers, investment contribution/return separation, receivable movement treatment, report status logic, read-only output boundary, Print / Save as PDF, Finding 1 smart defaults and existing privacy-eye behaviour remain unchanged.

### Deployment
Replace `app.js`, `styles.css`, `index.html` and `service-worker.js` only. No Apps Script, Google Sheet, manifest or icon update is required.
