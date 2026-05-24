# PortOS — OS v13.0.5.3.1
## Monthly Render Regression Hotfix

Urgent public-PWA-only hotfix based on OS v13.0.5.3.

### Fixed
- Restored the missing `expenseComposition()` helper accidentally omitted during the Monthly page layout rearrangement.
- Monthly page renders again when entered from Dashboard or Portfolio.
- Previous-page charts/content no longer remain visible because of a Monthly render exception.

### Retained from v13.0.5.3
- Month-End Snapshot readiness checklist and close guard.
- Recent Transactions directly below Expense Control.
- Mobile Split Bill stacked details.
- Consistent transaction action alignment.

### Deployment
No Apps Script or Google Sheet update is required.
