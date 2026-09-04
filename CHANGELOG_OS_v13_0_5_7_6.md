# PortOS OS v13.0.5.7.6 — Monthly Report Latest Valuation Preference Fix

## Summary
Narrow public-PWA-only Monthly Report basis correction from OS v13.0.5.7.5.

## Fix
- Same-month valuation lookup now prefers the latest confirmed valuation record when present.
- If no confirmed record exists, it prefers the latest provisional valuation record instead of the first provisional row found.
- This ensures Monthly Report investment tables use the latest value entered from Portfolio Update Value for the selected month.

## Expected June 2026 BNI Reksa Dana Result
- Latest entered BNI RD value: Rp 141,120,707.
- Opening: Rp 120,686,016.
- Contribution: Rp 20,000,000.
- Valuation gain/loss should become Rp 434,691.

## Scope
- No backend, Apps Script or Google Sheet structure change.
- No transaction workflow change.
- Dashboard, Monthly operational page, Portfolio, BNI Quick Sum and existing report analytics are preserved except through corrected latest valuation basis.
