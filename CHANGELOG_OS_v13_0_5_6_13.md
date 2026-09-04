# PortOS — OS v13.0.5.6.13
## Monthly Report Accuracy Refinement

Narrow Monthly Report correction and presentation refinement based on PortOS OS v13.0.5.6.12.

### Corrected / Refined
- Added a small vertical separation between the `Investment Contribution & Return` KPI cards and the instrument-detail table in report preview and print/PDF styling.
- Corrected Interim Report Portfolio Growth Reconciliation to use an `Updated Forecast Investment Return` basis consistently with the Updated Forecast Portfolio Value, preventing cash investment income from being counted twice in the reconciliation bridge.
- Clarified the Interim reconciliation expense row as `Updated Forecast Personal Expenses` and added explanatory wording that it includes the regular spending forecast basis plus actual incidental expenses recorded to date.
- Disabled `Generate Monthly Report` when the selected reporting month is later than the current calendar month. Reports remain available for the current month and completed months only.

### Preserved Treatment
- Income, expense, cash, investment, receivable and snapshot recording workflows remain unchanged.
- Expense drill-down analysis introduced in OS v13.0.5.6.12 remains available.
- BSI Gold continues to use recorded gross buyback value for portfolio valuation while final month-close readiness still requires financing statement confirmation.
- Finding 1 smart account defaults, existing privacy-eye behaviour and PDF output remain unchanged.

### Deployment
Replace `app.js`, `styles.css`, `index.html` and `service-worker.js` only. No Apps Script, Google Sheet, manifest or icon update is required.
