# PortOS OS v13.0.5.6.25 — BNI Quick Sum Detail Font Alignment

## Purpose
Narrow Dashboard presentation refinement after v13.0.5.6.24. Align the expanded Actual BNI Account Quick Sum detail row typography with the Asset Allocation card sizing so the breakdown looks less visually dominant on mobile.

## Changes
- Reduced expanded BNI Quick Sum row label font from 15px to the standard row sizing.
- Set expanded BNI Quick Sum row value font to match standard Asset Allocation row value sizing.
- Added mobile override so expanded BNI Quick Sum detail rows use the same 12px mobile sizing as normal row lists.
- Preserved the existing compact header, subtitle, toggle, divider, total row and expanded detail layout from v13.0.5.6.24.

## Not Changed
- No change to Actual BNI Account Quick Sum calculation.
- No change to Portfolio forecast holdings, Asset Allocation values, Monthly plans, Monthly Report, transactions, backend, Apps Script, Google Sheet structure, manifest or icons.

## Deployment
Replace these files from v13.0.5.6.24:
- `app.js`
- `styles.css`
- `index.html`
- `service-worker.js`

No backend or Google Sheet update is required.
