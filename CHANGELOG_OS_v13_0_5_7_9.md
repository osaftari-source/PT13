# PortOS OS v13.0.5.7.9 — Private Sync Payload Validation Fix

## Purpose

Narrow public-PWA-only sync safety patch from OS v13.0.5.7.8.

This patch protects PortOS from saving public health-check responses, HTML error pages, empty responses, or incomplete private sync payloads as local portfolio data.

## Issue addressed

After a transaction was entered and written to Google Sheets, the app could keep refreshing and then display an empty Monthly page. In Settings, the app could show `Connected`, `Private data loaded`, and `Last successful sync: Invalid Date`. The Apps Script deployment health check still returned JSON, but private data was not loaded into the app.

The root frontend weakness was that `getAll` responses were saved directly to local cache without verifying that the response was a complete private portfolio dataset.

## Changes

- Added private dataset validation before local cache save.
- Rejects `privateData:false` public health-check responses for private sync.
- Rejects payloads missing transactions, monthly plan, account/category/instrument configuration, or empty content.
- Prevents invalid/incomplete sync payloads from overwriting last known good local data.
- Replaced direct `res.json()` parsing with safer text-first response handling.
- Provides clearer error when backend returns HTML instead of JSON.
- Adds `cache:'no-store'` and a client request id to backend POST requests.
- Normalizes missing/invalid `lastSync` on otherwise valid private datasets.
- Displays `Never synced` instead of `Invalid Date` if sync time is absent or invalid.

## Not changed

- No backend / Apps Script change.
- No Google Sheet structure change.
- No transaction workflow calculation change.
- No Dashboard, Monthly, Portfolio, Monthly Report, BNI Quick Sum calculation change.
- No styles.css, manifest, or icons change.

## Files to replace from v13.0.5.7.8

- `app.js`
- `index.html`
- `service-worker.js`

`styles.css` is unchanged.

## Validation

- JavaScript syntax check passed.
- Service worker syntax check passed.
- ZIP integrity verified.
