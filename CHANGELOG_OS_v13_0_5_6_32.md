# PortOS OS v13.0.5.6.32 — Portfolio Forecast Chart & Holding Alignment

## Scope
Narrow public-PWA Portfolio presentation refinement from OS v13.0.5.6.31.

## Changes
- Restores the Portfolio Value Forecast line chart with Actual Portfolio Value, Regular Baseline Forecast, and Updated Forecast across the configured observation horizon.
- Keeps the selected-month plan variance KPI and holding-type summary framework from v13.0.5.6.28–31.
- Removes collapsible holding-type behaviour; holdings are displayed directly under each holding type.
- Improves alignment between holding-type summary rows and individual holding detail rows by using consistent left/right grid alignment.
- Keeps existing value/update/confirm statement actions.

## Not Changed
- Dashboard, Dashboard Actual Asset Allocation, and Actual BNI Quick Sum.
- Monthly page and Monthly investment workflow.
- Monthly Report.
- Portfolio calculations, plan variance logic, and current-month reconciled forecast basis.
- Backend, Apps Script, Google Sheet structure, manifest, and icons.

## Files to Replace from v13.0.5.6.31
- app.js
- styles.css
- index.html
- service-worker.js
