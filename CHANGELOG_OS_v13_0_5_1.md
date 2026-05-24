# PortOS — OS v13.0.5.1
## Sync Feedback & Foreground Refresh Fix

Targeted corrective patch based on PortOS OS v13.0.5.

### Corrected
- Automatic sync after app open or page reload while already unlocked now uses the visible spinning sync indicator and displays a subtle completion message.
- Automatic sync after unlocking provides the same completion feedback.
- Returning to the app after briefly switching browser tabs or laptop programs no longer triggers a fresh sync on every visibility change.
- The existing >60-second away/background lock rule is retained.
- When connectivity returns while the app remains unlocked, the app syncs and provides completion feedback.

### Deferred
- Dark-theme modal/form contrast and semantic-colour audit are deferred to the planned visual redesign phase.

### Deployment
Replace only the public PWA files in the v13/PortOS GitHub Pages repository. No Apps Script or Google Sheet update is required for this patch.
