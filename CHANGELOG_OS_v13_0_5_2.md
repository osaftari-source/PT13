# PortOS — OS v13.0.5.2
## Header Duplication Cleanup

Targeted visual-cleanup patch based on PortOS OS v13.0.5.1.

### Corrected
- The sticky contextual top bar remains visible while scrolling and continues to show the active page, sync status, and global actions.
- Removed the duplicated large page title beneath the sticky top bar on Dashboard, Monthly, Portfolio, and Settings.
- Retained the compact page context/subtitle and relevant month controls below the sticky bar.

### Preserved
- Sync feedback and foreground-refresh fix from v13.0.5.1.
- PortOS v13.0.5 backend, portrait lock, page-order, scroll reset, planning reminder, reallocation forecast logic, and PortOS icon.
- Dark-theme modal/semantic-colour audit remains deferred to the future premium visual redesign phase.

### Deployment
This is a public-PWA-only patch. No Apps Script or Google Sheet update is required.
