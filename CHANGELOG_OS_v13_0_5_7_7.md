# PortOS OS v13.0.5.7.7 — Monthly Report Valuation Ending Override Fix

Narrow public-PWA-only Monthly Report basis correction from v13.0.5.7.6.

- Forces the Investment Contribution & Return table to use the latest same-month valuation record as ending value for valuation-based instruments.
- Recalculates valuation gain/loss as ending minus opening minus contribution.
- Keeps interim cash investment income forecast-basis while aligning valuation KPI to the instrument detail rows.
- Expected June BNI Reksa Dana row: opening Rp 120,686,016; contribution Rp 20,000,000; valuation gain/loss Rp 434,691; ending Rp 141,120,707.

No backend, Apps Script, Google Sheet, Dashboard, Monthly operational page, Portfolio, BNI Quick Sum, manifest or icon changes.
