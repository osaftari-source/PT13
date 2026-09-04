# PortOS OS v13.0.5.6.28 — Portfolio Holding-Type Plan Variance View

## Type
Public PWA-only Portfolio page layout and selected-month analysis refinement.

## Base
Generated from OS v13.0.5.6.27.

## Changes
- Reworks Portfolio page around the agreed role split: Portfolio now focuses on selected-month portfolio position and variance against baseline plan.
- Replaces the previous current-vs-next-month emphasis with three top KPI cards:
  - Selected Month Value
  - Variance vs Plan
  - MoM Movement
- Removes Balance History and Group Trends chart sections from the Portfolio page.
- Adds Portfolio Summary by Holding Type with expandable groups:
  - Liquid Cash
  - Saving Goal
  - Fixed Income
  - Market / Valuation Assets
  - Retirement
  - Receivables where applicable
- Expanded groups show individual holdings with selected-month basis value, plan value and variance where meaningful.
- Keeps existing update-value/update-statement actions inside expanded holding details where applicable.
- Keeps Month-End Snapshot Readiness on Portfolio.
- Preserves mobile two-column KPI card layout.

## Not changed
- Dashboard actual/current role and Dashboard Actual Asset Allocation.
- Monthly transaction workflow and Investment Plans & Reallocation section.
- Monthly Report logic.
- BNI Quick Sum calculation and breakdown.
- Backend, Apps Script and Google Sheet structure.
- Manifest and icons.

## Files to upload
- app.js
- styles.css
- index.html
- service-worker.js
