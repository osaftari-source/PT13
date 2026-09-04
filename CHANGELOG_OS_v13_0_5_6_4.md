# PortOS — OS v13.0.5.6.4
## App Installation & Update Management Fix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.3.

### Added in Settings
- New `App Installation & Updates` card.
- Visible current running app version.
- `Install App` button when the browser provides a PWA installation prompt.
- `Check for Updates` button with checking/up-to-date feedback.
- `Update Now` action when a new service worker is waiting.

### Adapted from the Engineering Toolkit Hub mechanism
- Versioned CSS, JavaScript and manifest URLs in `index.html`.
- Service-worker registration using a versioned URL and `{ updateViaCache: "none" }`.
- Waiting service worker notification and `SKIP_WAITING` apply-update flow.
- Automatic reload after `controllerchange`.
- Network-first navigation so reopening the app checks the online page before falling back offline.
- Old application caches removed during service-worker activation.

### Preserved
- Dark-mode contrast and semantic-colour hotfix from v13.0.5.6.1.
- Recent Transaction note display from v13.0.5.6.2.
- Compact decimal-point K/M/B display from v13.0.5.6.3.
- Current layout, calculations, Google Sheets and Apps Script workflow.

### Transition Note
Because releases before v13.0.5.6.4 do not contain the in-app update controls, an already cached older PortOS may require one final hard refresh or app reopen after deployment to load this update-management patch. Future updates can be handled from Settings.
