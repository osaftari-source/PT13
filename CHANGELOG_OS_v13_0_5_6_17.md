# PortOS OS v13.0.5.6.17 — Local Month Boundary Fix

## Scope
Narrow public-PWA-only correction from OS v13.0.5.6.16.

## Fixes
- Replaced UTC-derived date/month utility usage with local browser/device calendar-date utilities.
- Added centralized selected-month status logic: `past`, `current`, `future`.
- Ensures Dashboard current-month overview follows the real local current month.
- Ensures Monthly spending-rate logic treats past months as historical and the local current month as live allowance.
- Ensures Portfolio Month-End Snapshot readiness recognizes a selected month as ended once the local calendar has moved to the next month.
- Ensures Monthly Report availability/status uses the same local-month basis and remains disabled for future months.
- Ensures default form dates use the local device/browser date.

## Preserved
- No transaction, balance, portfolio, report, privacy, backend, Apps Script, or Google Sheet structure changes.
- v13.0.5.6.16 Other Income drill-down report refinement is preserved.
- v13.0.5.6.15 context-sensitive recent transaction filters are preserved.
- All prior Monthly Report and Smart Account Default fixes are preserved.
