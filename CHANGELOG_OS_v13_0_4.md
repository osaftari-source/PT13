# OS v13.0.4 — Forecast Holdings Consistency, Sync Feedback & Theme Update

## Functional corrections
- Restores **Actual Account Quick Sum** semantics: current configured holdings only, without forecast-balancing cash adjustments.
- Current-month liquid-cash holding in Portfolio Holdings now uses the current calculated/actual cash balance rather than an Updated Forecast cash plug.
- Valuation-based fund holding future estimates roll forward from the latest recorded valuation and include planned future RD contributions plus applicable planned valuation-return assumptions.
- Life Goals contribution estimates roll forward cumulatively from current actual/planned contributions.
- Transaction Date sorting now uses Input Date descending as a tie-breaker for same-day transactions.

## Interaction and appearance
- Manual and automatic background sync now show an animated sync icon while a refresh is active; duplicate sync requests are disabled while running.
- Adds local-device appearance options: System / Device, Light and Dark.
- Adds `Developed by Osman Saftari — Private Use` to Settings → About & Version.

## Compatibility
- Retains v13 Google Sheets schema and v13.0.3 canonical `reporting_month` protection.
- No backend workbook re-import is required.
- The broader premium visual redesign inspired by the approved concept image remains postponed until functional validation is complete.
