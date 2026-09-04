# PortOS OS v13.0.5.7.3 — Monthly Report Savings & Investable Surplus KPI

## Type
Public PWA-only Monthly Report analytics enhancement.

## Base
Built from PortOS OS v13.0.5.7.2.

## Changes
- Adds a `Savings & Investable Surplus` subsection under Monthly Report → Income Analysis.
- Adds four report KPI cards:
  - Total Savings Rate
  - Recurring Savings Rate
  - Gross Investable Surplus
  - Post-Investment Cash Gap
- Adds a compact savings bridge table showing total income, total expenses, investment contribution, recurring income, and regular expenses.
- Adds a short narrative explaining whether monthly surplus is supported by recurring income or by one-off income.

## Not Changed
- No backend or Apps Script change.
- No Google Sheet structure change.
- No transaction workflow change.
- No Dashboard, Monthly operational page, Portfolio, or BNI Quick Sum calculation change.
- Existing Income Quality Analysis and Other Income drill-down remain preserved.

## Deployment
Replace:
- app.js
- index.html
- service-worker.js
- styles.css

