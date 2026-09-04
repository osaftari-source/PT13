# PortOS — OS v13.0.5.6.14
## SBN Coupon Attribution Fix

### Scope
Narrow functional/data-mapping correction based on OS v13.0.5.6.13.

### Implemented in the Public PWA
- Added report attribution support for income category `sbn_existing_coupon` / **SBN Existing Coupon** so cash coupon income is allocated to instrument `bni_sbn` / **SBN Existing**.
- Preserved the existing `sr025_coupon` mapping to `sr025` / **SR025 T5** for the planned September SR025 holding.
- Preserved Monthly Report accuracy refinements, expense drill-downs, Smart Account Defaults, privacy-eye behaviour, update management and all prior calculation/workflow logic.

### Required Google Sheet Data Correction
The report attribution fix becomes effective for the existing May coupon after the live Google Sheet data is corrected:
1. In `Config_Categories`, add a new income category row for `sbn_existing_coupon` with display name `SBN Existing Coupon`, transaction entry enabled and investment-earnings inclusion enabled.
2. In `Workbook`, edit the May income transaction amounting to `Rp 21,703` currently classified as `sr025_coupon`, changing its `category_id` to `sbn_existing_coupon`.
3. Do **not** rename or remove `sr025_coupon`; retain it for planned SR025 T5 coupon income from September onward.

### Deployment From v13.0.5.6.13
Replace these public-PWA files only:
- `app.js`
- `index.html`
- `service-worker.js`

No change is required to `styles.css`, `manifest.json`, icon files or Apps Script.
