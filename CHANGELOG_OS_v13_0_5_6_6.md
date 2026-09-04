# PortOS — OS v13.0.5.6.6
## Growth Metric Placement & Updated YTD Growth Fix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.5.

### Dashboard
- Replaced the `Cumulative Portfolio Growth` summary card with `Updated YTD Growth`.
- `Updated YTD Growth` uses the current-month Updated Forecast portfolio value against the start-of-year baseline.
- Subtitle explicitly indicates the estimate basis, for example:
  - `Including May 2026 updated forecast`
- Existing `YTD Portfolio Growth` remains the closed-actual YTD result.

### Portfolio
- Moved `Cumulative Portfolio Growth` into the upper Portfolio metric row.
- Replaced the redundant upper Receivables summary metric.
- Cumulative Portfolio Growth retains its closed-actual basis against the opening tracking baseline.
- Receivables detail and settlement workflow remain available lower on the Portfolio page.
- Outstanding receivables continue to be included in applicable portfolio totals.

### Preserved
- Dark-mode contrast and semantic colours from v13.0.5.6.1.
- Recent Transaction note display from v13.0.5.6.2.
- Compact decimal-point K/M/B display from v13.0.5.6.3.
- App Installation & Update Management from v13.0.5.6.4.
- Full Recent Transaction comma amount formatting from v13.0.5.6.5.
- No Apps Script or Google Sheet change.
