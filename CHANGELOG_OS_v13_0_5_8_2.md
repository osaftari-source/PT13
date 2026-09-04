# PortOS OS v13.0.5.8.2 — Budget Framework Compatibility Layer

## Scope
Compatibility-only patch after the v13.0.5.8.1 budget-framework data migration and Stage 1B category retirement.

## Changes
- Keeps category label resolution based on all `Config_Categories` rows, including inactive/retired categories.
- Filters new transaction category selectors to active categories only.
- Allows an existing inactive category to be preserved when editing an old transaction and the category is unchanged.
- Updates Apps Script transaction validation so legacy inactive category IDs can be saved only when they are the row's existing category.
- Writes/maintains `cost_centre` and `behaviour` columns on new or updated Workbook rows when the selected category has those fields.
- Suppresses cross-boundary budget comparison for reporting months before 2026-10.
- Shows pre-2026-10 expense views as actual-only with the note: "Budget structure changed in October 2026. Plan comparison is available from 2026-10 onward."
- Keeps normal plan comparison behaviour from 2026-10 onward.
- Bumps the service worker cache and asset query versions to force a PWA update.

## Files changed
- `app.js`
- `apps-script.gs`
- `index.html`
- `service-worker.js`

## Acceptance tests
1. Edit 2026-05 split_bill "Makan ASB" (160,000, `food`), change nothing, save → must succeed.
2. Open the May 2026 report → actuals only, no budget/variance, boundary note shown.
3. Open new Record Expense / Record Split Bill category picker → 18 active expense categories, none of the retired 14.
4. Open an August migrated row → migrated category continues to resolve normally.
5. From 2026-10 onward → plan comparison remains present.
