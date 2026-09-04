# PortOS OS v13.0.5.6.18 — Snapshot Basis Label Fix

## Purpose
Correct Dashboard and Portfolio labelling for saved month-end snapshots so provisional values are not labelled as actual.

## Changes
- Adds snapshot-basis label helpers that distinguish `confirmed_closed`, `provisional_closed`, and generic saved snapshots.
- Dashboard `Total Portfolio Assets` now labels the latest saved basis as `May 2026 provisional` for provisional snapshots and `May 2026 actual` only for confirmed snapshots.
- Dashboard YTD subtitle now uses the same basis-aware label.
- Dashboard status badge now shows `Provisional Snapshot` when the latest saved basis is provisional.
- Portfolio top KPI cards now use basis-aware labels:
  - `Portfolio Total` shows selected-month basis.
  - `Latest Portfolio Snapshot` replaces `Latest Closed Actual`.
  - `MoM Growth` compares against a basis-aware previous-month label.
  - `Cumulative Portfolio Growth` references the basis-aware latest snapshot.
- Portfolio Forecast chart label changes from `Actual Portfolio Value` to `Saved Snapshot Value` because the saved series can include provisional snapshots.

## Preserved
- No change to snapshot saving rules or stored values.
- No change to transaction, balance, valuation, report, backend, or Google Sheet calculations.
- Preserves v13.0.5.6.17 local month-boundary fix and all prior trial fixes.

## Deployment
Replace `app.js`, `index.html`, and `service-worker.js` only.
