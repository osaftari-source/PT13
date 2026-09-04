# PortOS — OS v13.0.5.6.7
## Dashboard KPI Alignment Refinement

Narrow presentation-only public-PWA correction based on PortOS OS v13.0.5.6.6.

### Dashboard Growth Card Presentation
- `YTD Portfolio Growth` now shows only the Rupiah amount as the primary value.
- Its percentage moves to the subtitle line in bold semantic colour:
  - `+6.75% · Through Apr 2026`
- `Updated YTD Growth` now shows only the Rupiah amount as the primary value.
- Its percentage moves to the subtitle line in bold semantic colour:
  - `+10.57% · Including May 2026`

### Dynamic Month Basis Confirmed
- The closed YTD subtitle continues to dynamically use the latest closed month through `monthLabel(closed)`.
- The Updated YTD subtitle dynamically uses the selected/current applicable month through `monthLabel(S.month)`.
- The phrase `updated forecast` is removed from the Updated YTD subtitle only; the calculation remains based on the Updated Forecast value.

### Investment Performance Label
- Shortened `Expected Annual Investment Income` to `Expected Annual Income` to reduce mobile title wrapping and improve paired-card alignment.

### Preserved
- Growth calculations from v13.0.5.6.6.
- App update management from v13.0.5.6.4.
- Full Recent Transaction comma formatting from v13.0.5.6.5.
- Compact decimal-point K/M/B format, Recent Transaction note display and Dark-mode fixes.
- No Apps Script or Google Sheet changes.
