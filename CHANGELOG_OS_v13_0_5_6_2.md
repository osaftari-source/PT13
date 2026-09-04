# PortOS — OS v13.0.5.6.2
## Recent Transaction Note Display Fix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.1.

### Fixed
- Restored stored transaction notes in the Recent Transactions metadata line.
- When a note exists, it is shown after date and account/context, for example:
  - `2026-05-26 · BSI Operational · Puja Sera`
- When a note is blank, no trailing separator is displayed.
- Applies to Expense, Income, Transfer, Investment, Split Bill and Receivable transaction entries displayed by the existing Recent Transactions component.

### Preserved
- Dark Mode Contrast & Semantic Colour Hotfix from v13.0.5.6.1.
- Compact mobile transaction density.
- Filters, sorting, Edit/Delete and Split Bill reimbursement controls.
- Existing full Rupiah and compact K/M/B number formatting; no separator-format change in this patch.
- Calculations, backend workflow, Apps Script and Google Sheet structure.

### Deployment
No Apps Script or Google Sheet update is required.
