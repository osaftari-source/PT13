# PortOS OS v13.0.5.6.19 — Actual BNI Quick Sum Basis Fix

## Scope
Narrow public-PWA-only correction patch from v13.0.5.6.18.

## Fixed
- Corrected Dashboard Actual BNI Account Quick Sum to use actual/provisional/latest recorded BNI-linked values instead of forecast/estimate holding rows.
- Excludes unexecuted planned contributions for BNI Reksa Dana and BNI Life Goals from the quick sum.
- Preserves internal BNI movement neutrality: when an actual investment is funded from BNI Saving, cash decreases while the BNI instrument increases, so the BNI ecosystem total is not inflated simply by reallocation.
- Keeps forecast holdings, Portfolio estimates, Monthly plans and report logic unchanged.

## Files to upload
- app.js
- index.html
- service-worker.js

No styles.css, manifest/icons, Apps Script or Google Sheet change required.
