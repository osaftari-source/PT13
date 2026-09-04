# Deploy PortOS OS v13.0.5.6.14 — SBN Coupon Attribution Fix

## Public PWA Update from v13.0.5.6.13
Upload/replace only these files in the GitHub Pages app repository:
- `app.js`
- `index.html`
- `service-worker.js`

No changes are required to:
- `styles.css`
- `manifest.json`
- icons
- Apps Script backend

## Required Google Sheet Edit
Follow `GOOGLE_SHEET_UPDATE_INSTRUCTIONS_OS_v13_0_5_6_14.md` after deploying the PWA files. Without the Sheet category/transaction correction, the existing May income will still be classified as SR025 coupon in the source data.

## After Deployment
Use **Settings → App Installation & Updates → Check for Updates → Update Now**, then run **Sync** after editing the Google Sheet and regenerate the May report.
