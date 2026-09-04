# PortOS OS v13.0.5.7.1 — Confirmed Valuation Basis Preference Fix

## Purpose
Correct month-end valuation basis so confirmed statement values are preferred over provisional snapshot values when both exist for the same reporting month.

## Implemented
- Added a front-end confirmed valuation overlay for saved portfolio snapshot rows.
- If a same-month confirmed `Asset_Valuations` record exists, Portfolio and Monthly Report basis rows now prefer that confirmed value over the older provisional snapshot amount.
- This affects confirmable market-value instruments such as BNI Reksa Dana and gross buyback-value instruments such as BSI Gold.
- Confirmation checklists remain unchanged.

## Expected May 2026 Behaviour
- BNI Reksa Dana confirmed statement value Rp 120,686,016 should replace the provisional snapshot value Rp 120,657,799 in Portfolio/Report basis displays.
- The visible card may only change slightly because the difference is Rp 28,217 and many app cards round to compact values.

## Not Changed
- Transaction workflow.
- Dashboard and Actual BNI Quick Sum logic.
- Monthly operational page.
- Portfolio forecast/plan variance logic.
- Monthly Report income quality logic from v13.0.5.7.0.
- Backend / Apps Script.
- Google Sheet structure.
- Manifest/icons.

## Files to Upload
- `app.js`
- `index.html`
- `service-worker.js`

`styles.css` is unchanged from v13.0.5.7.0.
