# PortOS OS v13.0.5.8.3 — Cost Centre Budget Dashboard

Scope: Stage 4B application redesign for the migrated budget framework.

## Changed

- Transaction category picker is grouped by cost centre in the configured order:
  Core, Home base, Spouse base, Vehicle, Intercity, Shared, Discretionary,
  Committed investment, Work.
- New expense / split-bill forms default to the most-used category within the
  last-used cost centre.
- `cash_withdrawal` requires a note with the prompt: "What was this for?".
- Dashboard and Monthly page add a Budget Framework view that separates:
  - Consumption
  - Total cash outflow
  - Sinking set-asides
  - Post-investment surplus
- Cost centre is now the primary expense breakdown with category drill-downs.
- `cash_withdrawal` and `credit_card` envelopes show OVER/OK status when plan
  comparison is available.
- Added sinking-fund panel showing balance, this month's set-aside, this month's
  draw, and next expected draw.
- Monthly report expense section now uses cost centre as the primary breakdown.
- Monthly report shows consumption and total cash outflow separately.
- Negative surplus is displayed with negative styling rather than suppressed.
- Report charts are rendered with print fallback images to avoid blank PDF charts.

## Backend compatibility

- Apps Script version updated to OS v13.0.5.8.3.
- Backend enforces a note for new `cash_withdrawal` transactions while preserving
  compatibility for unchanged legacy rows.

## Deployment

Deploy `apps-script.gs` as a new Apps Script Web App version, then upload
`index.html`, `app.js`, `styles.css`, and `service-worker.js` to GitHub Pages.
