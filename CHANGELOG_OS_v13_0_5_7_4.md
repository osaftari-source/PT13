# PortOS OS v13.0.5.7.4 — Monthly Report Bonus Allocation Insight

## Basis
- Generated from PortOS OS v13.0.5.7.3.
- Public PWA-only Monthly Report analytics enhancement.
- Compatible backend remains Apps Script OS v13.0.5.
- Stable rollback base remains OS v12.5.8.1.

## Added
- Adds a `Bonus Allocation Insight` subsection under Monthly Report → Income Analysis when non-recurring income exists.
- Identifies total non-recurring income from Income Quality classification.
- Compares one-off income against observed investment contribution, retained post-investment surplus, and residual amount absorbed by expenses / other cash needs.
- Adds KPI cards for One-Off Income, To Investments, Retained Surplus, and Other Absorption.
- Adds a compact allocation table and neutral narrative.

## Preserved
- Existing Income Quality Analysis.
- Existing Savings & Investable Surplus KPI.
- Existing Other Income note-based drill-down.
- Existing Monthly Report calculation basis.
- Dashboard, Monthly operational page, Portfolio page, BNI Quick Sum, transaction workflows, backend, Apps Script, Google Sheet structure, manifest and icons.

## Files to Replace
- `app.js`
- `index.html`
- `service-worker.js`

`styles.css` is unchanged from v13.0.5.7.3.
