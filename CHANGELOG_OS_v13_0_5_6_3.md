# PortOS — OS v13.0.5.6.3
## Compact Number Format Fix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.2.

### Fixed
- Restored rollover-style decimal point notation for compact K/M/B monetary displays:
  - `Rp 183.20K`
  - `Rp 11.75M`
  - `Rp 1.19B`
- This applies wherever the shared compact formatter is used, including summary cards, portfolio values, budget displays and compact chart labels/tooltips.

### Not Changed
- Full Recent Transaction amounts remain in their existing format in this patch.
- Recent Transaction note display from v13.0.5.6.2 is retained.
- Dark-mode contrast and semantic-colour hotfix from v13.0.5.6.1 is retained.
- No layout, calculation, Apps Script or Google Sheet changes.

### Deployment
No Apps Script or Google Sheet update is required.
