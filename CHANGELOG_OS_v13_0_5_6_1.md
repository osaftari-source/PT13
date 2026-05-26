# PortOS — OS v13.0.5.6.1
## Dark Mode Contrast & Semantic Colour Hotfix

Narrow public-PWA-only correction based on PortOS OS v13.0.5.6.

### Fixed
- Restored semantic financial colour hierarchy in Dark mode:
  - positive / income / remaining budget = green
  - expense / negative = red
  - investment / transfer / action values = blue
  - incidental / warning values = amber
- Fixed unreadable dark-mode modal/form surfaces caused by styling the wrong shared modal selector.
- Applied readable dark treatment to:
  - Record Activity menu
  - Expense / Income / Transfer / Investment / Split Bill / Receivable forms
  - Update Asset Value and Update Balance
  - Statement, Connection, PIN and confirmation dialogs
  - Month-End Snapshot dialogs using the shared modal component

### Preserved
- v13.0.5.6 layout and workflow
- financial calculations
- existing theme selector behaviour
- backend connection and Google Sheet structure

### Deployment
No Apps Script or Google Sheet update is required.
