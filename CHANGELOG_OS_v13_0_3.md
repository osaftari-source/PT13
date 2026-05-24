# OS v13.0.3 — Month-Key Integrity, Save Feedback & Auto-Sync Fix

## Corrected in this package
- Standardises application amount summaries: below Rp1 million uses `K`, Rp1 million to below Rp1 billion uses `M`, and Rp1 billion or more uses `B`, each shown with two decimal places. Recent Transactions intentionally keeps full written Rupiah amounts; chart axes/tooltips follow the compact K/M/B convention.
- Shows immediate in-form saving status, prevents repeated submissions while a write is pending, and only reports fully synced success after refreshed data is loaded.
- Warns clearly when a write is saved to Google Sheets but display refresh fails.
- Restores background sync when the app reloads/opens while unlocked, when the app returns online, and after short background returns that do not trigger the existing PIN lock rule.
- Retains all v13.0.2 responsive UI and outstanding-receivable corrections.

## Backend-required correction
- Requires the bundled Apps Script update. New app writes store `reporting_month` as canonical plain-text `YYYY-MM`, and reads normalise Google Sheets date/ISO/text variants into that same key. This resolves the confirmed issue where an app-written row was stored as `5/1/2026` and filtered out of May totals.

## Compatibility
- Existing v13 Google Sheets schema remains compatible. No migration workbook re-import is required.
- Previously malformed month-key rows become readable after backend update and sync; records may also be manually repaired in Sheets if desired.
