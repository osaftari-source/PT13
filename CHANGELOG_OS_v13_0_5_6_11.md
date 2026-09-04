# PortOS — OS v13.0.5.6.11
## Monthly Report Generation

New front-end financial reporting feature based on PortOS OS v13.0.5.6.10.

### Added
- `Generate Monthly Report` action on the Monthly page, using the selected reporting month.
- Automatic report basis selection:
  - `Interim Report — Updated Forecast` for an open/current month.
  - `Provisional Month-End Report` for an ended month without a confirmed final snapshot.
  - `Final Monthly Report — Closed Month` after a confirmed month-end snapshot.
- Report scope selection before preview:
  - Full Monthly Report.
  - Focused presets: Expense Review, Income & Expense Review, Portfolio Performance Review, and Cash & Receivables Review.
  - Custom selection from the approved report sections.
- Dedicated full-screen read-only report preview with `Print / Save as PDF`.
- Approved report sections:
  - Executive Summary with eight KPIs.
  - Income Analysis.
  - Expense Analysis separating Regular Budget Performance and Incidental Expenses, including note-based insights.
  - Cash Movement & Reconciliation.
  - Investment Contribution & Return.
  - Portfolio Growth Reconciliation.
  - Receivables & Split-Bill Reimbursements.
  - Month-End Readiness / Status Information.

### Financial Treatment
- Investment contributions are shown separately from investment return and do not create portfolio growth.
- Internal cash transfers are shown at account level but excluded from consolidated growth/income/expense treatment.
- Receivable settlements and split-bill reimbursements are treated as cash-versus-receivable movements, not income.
- Split-bill expenses use the user’s own share only in expense analysis.
- Incidental expenses are included in total expenses but excluded from regular budget performance.
- Expected/valuation-based investment returns, such as Reksa Dana valuation movement, remain in investment analysis and are excluded from Income Analysis.
- BSI Gold uses its recorded buyback-value basis; no new financing-liability/net-equity model is introduced.

### Read-Only / Output Boundary
- The report displays status, readiness and reconciliation information only; it contains no transaction-entry or month-end action controls.
- Report preview and PDF show the correctly labelled report-basis values and are not altered by any future presentation-copy feature.
- Existing Hide Values eye-button behaviour outside the report remains unchanged.

### Preserved
- Smart Account Defaults Fix from v13.0.5.6.10.
- Mobile month-header typography fix, Portfolio/Dashboard KPI refinements, consistent navigation icons, dark-mode fix, transaction-note display, compact decimal-point K/M/B format, comma-separated full Recent Transaction amounts, and App Installation & Update Management.
- Apps Script backend OS v13.0.5 compatibility and Google Sheet structure remain unchanged.

### Deployment
Replace `app.js`, `styles.css`, `index.html` and `service-worker.js` only. No Apps Script, Google Sheet, manifest or icon update is required.
