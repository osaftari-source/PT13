# PortOS OS v13.0.5.6.27 — Dashboard Actual Allocation Basis

Narrow public-PWA-only Dashboard basis refinement from v13.0.5.6.26.

## Changed
- Dashboard Asset Allocation now uses actual/provisional/latest recorded portfolio rows instead of forecast/current-estimate holding rows.
- Unexecuted planned current-month contributions are excluded from Dashboard allocation until recorded as actual activity.
- The Dashboard section label is changed to `Actual Asset Allocation` with `Actual/provisional basis` wording.

## Preserved
- Portfolio page forecast holdings and asset allocation logic.
- Monthly plans, Monthly Report, BNI Quick Sum, transaction workflows, backend, Google Sheet structure, BSI Gold Option A and privacy behaviour.

## Upload
Replace `app.js`, `styles.css`, `index.html`, and `service-worker.js`.
