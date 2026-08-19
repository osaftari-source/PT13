# PortOS OS v13.0.5.7.11 — Mobile Apps Script Sync Fallback Fix

## Purpose
Fix mobile/private sync compatibility after v13.0.5.7.10 successfully restored desktop private sync but mobile/incognito mobile still received an HTML response from Apps Script instead of JSON.

## Changes
- Frontend `post()` now keeps the v13.0.5.7.10 form-payload POST as the primary path.
- If `getAll` receives HTML instead of JSON, frontend retries using a GET fallback with encoded `payload`.
- Apps Script `doGet(e)` now supports an authenticated `payload` query fallback for `getAll` while preserving the normal public health-check response when no private action is supplied.
- Startup/background sync now reports errors when it was explicitly triggered by app load/unlock/online recovery, instead of failing silently.
- Existing v13.0.5.7.9/v13.0.5.7.10 cache protections remain: invalid HTML, public health-check data, or incomplete private data cannot overwrite last known good private cache.

## Expected result
- Desktop sync should continue to work.
- Mobile browsers that fail on Apps Script POST should retry with the authenticated GET fallback and load the private dataset.
- If browser refresh or app reload triggers background sync and it fails, the app should surface an error instead of silently retaining the old timestamp.

## Deployment order
1. Update Apps Script with `apps-script.gs`.
2. Deploy/update the Apps Script Web App.
3. Upload PWA files to GitHub: `app.js`, `index.html`, `service-worker.js`.
4. Use PortOS Check for Updates or hard refresh.
5. Reconnect/sync on desktop and mobile.

## Not changed
- Google Sheet structure
- Calculations
- Transaction workflows
- Dashboard / Monthly / Portfolio logic
- Monthly Report analytics
- Actual BNI Quick Sum
- `styles.css`
- Manifest/icons

## Files changed from v13.0.5.7.10
- `app.js`
- `index.html`
- `service-worker.js`
- `apps-script.gs`

`styles.css` is unchanged.
