# PortOS — OS v13.0.5.6.5
## Recent Transaction Full Amount Format Fix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.4.

### Fixed
- Changed full amount display inside Recent Transactions to use comma thousands separators:
  - `Rp 75,800`
  - `Rp 1,500,000`
  - `Rp 40,951,333`
- Applied consistently to Split Bill detail amounts rendered in Recent Transactions, such as:
  - `Own share Rp 90,000`
  - `Reimbursable Rp 70,000`
- Enforced clean spacing: one space after `Rp` and no spaces around commas.

### Preserved
- Compact K/M/B display remains rollover-style decimal point notation, e.g. `Rp 11.75M`.
- App Installation & Update Management from v13.0.5.6.4.
- Recent Transaction note display from v13.0.5.6.2.
- Dark-mode contrast and semantic-colour hotfix from v13.0.5.6.1.
- Layout, calculations, backend workflow, Apps Script and Google Sheet structure.

### Deployment
No Apps Script or Google Sheet update is required.
Once v13.0.5.6.4 is running, deploy these files and use Settings → App Installation & Updates → Check for Updates.
