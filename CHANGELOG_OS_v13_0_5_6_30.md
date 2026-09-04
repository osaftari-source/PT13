# PortOS OS v13.0.5.6.30 — Portfolio Current-Month Reconciled Forecast Fix

## Scope
Narrow public-PWA Portfolio page logic correction from v13.0.5.6.29.

## Changes
- Corrected Portfolio selected-month row basis so the current month now uses the same reconciled updated-forecast row path as future forecast months.
- Prevents current-month Portfolio value from being compared against future months using a different unreconciled holding-estimate basis.
- Future month basis labels now display as `Forecast Plan` instead of `Updated Forecast` where applicable.
- Preserves the selected-month plan variance layout, expandable holding-type groups, and all existing Portfolio actions.

## Not Changed
- Dashboard, Dashboard Actual Asset Allocation, Actual BNI Account Quick Sum, Monthly page, Monthly Report, transaction workflow, backend, Apps Script, Google Sheet structure, manifest, and icons.

## Update Instructions
Replace `app.js`, `index.html`, and `service-worker.js`. `styles.css` is unchanged from v13.0.5.6.29.
