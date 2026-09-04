# PortOS OS v13.0.5.6.20 — BNI Quick Sum Scope Correction

## Purpose
Corrects the over-correction introduced in v13.0.5.6.19 where the Dashboard Actual BNI Account Quick Sum could exclude actual BNI-linked holdings when they were not flagged in configuration.

## Change Scope
- Adds an explicit BNI-linked quick-sum scope for the Dashboard quick-sum card.
- Includes actual/provisional/latest recorded values for BNI Saving, BNI Life Goals, BNI Deposito, SBN Existing / SR025 when held, and BNI Reksa Dana.
- Excludes unexecuted planned contributions and forecast-only valuation/cash adjustments from the quick sum.
- Does not change Portfolio holding forecasts, Asset Allocation, Monthly plans, Monthly Report, transaction workflow, backend, Apps Script, or Google Sheet structure.

## Files Updated
- app.js
- index.html
- service-worker.js

## Files Unchanged
- styles.css
- manifest.json
- icons
- Apps Script
- Google Sheet structure
