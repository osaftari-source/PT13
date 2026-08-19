# PortOS OS v13.0.5.7.10 — Apps Script POST Payload Compatibility Fix

## Purpose
Fix the private sync connection mismatch where the Apps Script deployment health check was reachable but private `getAll` sync returned public `privateData:false` or failed to return the authenticated dataset.

## Changes
- Front-end POST helper now submits requests as form payloads containing JSON (`payload=...`) instead of raw text/plain JSON.
- Apps Script backend adds `parseRequestBody(e)` so it can accept both raw JSON and form `payload` JSON.
- Apps Script `loadAll()` now explicitly returns `privateData:true` with the private dataset.
- Keeps v13.0.5.7.9 sync payload validation so public health-check responses cannot overwrite local private cache.
- Updates PWA/service-worker/cache/version markers to OS v13.0.5.7.10.

## Deployment impact
This patch includes both public PWA files and an Apps Script backend update. Update and redeploy Apps Script first, then upload the PWA files to GitHub.

## Not changed
- Google Sheet structure
- Transaction, dashboard, monthly, portfolio, report, and BNI Quick Sum calculations
- Styles, manifest, and icons
