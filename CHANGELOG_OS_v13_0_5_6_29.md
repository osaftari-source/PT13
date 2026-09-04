# PortOS OS v13.0.5.6.29 — Portfolio Plan Variance Consistency Fix

## Scope
Narrow Portfolio page calculation correction from v13.0.5.6.28.

## Changes
- Corrects Portfolio top `Variance vs Plan` KPI to use the same selected-month holding-row basis as holding-type groups and expanded holding details.
- Keeps baseline plan anchored to the original selected-month baseline path instead of replacing it with provisional/actual snapshots.
- Ensures past provisional months compare provisional snapshot/current basis against original baseline plan.
- Aligns total selected value, total baseline plan, group totals, and holding-level variance so the top KPI reconciles with the holding-type cards.

## Not Changed
- Dashboard and Actual BNI Quick Sum.
- Monthly page and investment execution workflow.
- Monthly Report.
- Portfolio selected-month forecast/actual values, including BNI Reksa Dana updated forecast basis.
- Backend, Apps Script, Google Sheet structure, manifest and icons.

## Files to Upload
- app.js
- index.html
- service-worker.js

No styles.css change is required versus v13.0.5.6.28.
