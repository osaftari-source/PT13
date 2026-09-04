# PortOS OS v13.0.5.6.21 — BNI Quick Sum Valuation Lookup Fix

Narrow public-PWA correction from v13.0.5.6.20.

## Fix
- Corrects Actual BNI Account Quick Sum valuation lookup for BNI-linked instruments.
- Uses a local chronological period sorter so `OPENING` is treated as the earliest basis, not the latest string value.
- Uses this corrected lookup only in the Dashboard quick-sum calculation.
- Preserves Portfolio forecast holdings, asset allocation, Monthly plans, reports, transaction workflows, backend and Google Sheet structure.

## Expected result
- Current BNI quick sum should move toward the validated target around Rp 750.926M, instead of Rp 635.45M or Rp 781.44M.

## Files to upload
- app.js
- index.html
- service-worker.js
