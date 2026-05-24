# PortOS — OS v13.0.5.4
## Monthly Density & Spending Analysis Layout Fix

Public-PWA-only corrective patch based on PortOS OS v13.0.5.3.1.

### Recent Transactions
- Restored compact mobile density for ordinary transactions by returning Edit/Delete controls to a horizontal arrangement.
- Kept Split Bill detail readable while avoiding unnecessarily tall cards.
- Preserved full Rupiah amount formatting, filtering, sorting, edit/delete, and reimbursement behaviour.

### Monthly desktop layout
- Reorganised the analysis area to avoid excessive blank space.
- Daily & Weekly Spending Rate and Spending Composition sit in balanced desktop columns.
- Expense Breakdown is now a separate full-width compact three-column panel on desktop.
- Income Breakdown and Investments / Transfers / Reallocation sit in balanced desktop columns.
- Mobile remains sequential and collapsible.

### Spending analysis
- Spending Composition is now percentage-focused only: doughnut percentage labels and category legend remain, while duplicated Rupiah amount detail has been removed.
- Chart tooltips display percentage only.
- Expense Breakdown remains the detail area and uses compact variance indicators:
  - green `↓ ... under budget`
  - red `↑ ... over budget`
  - neutral `On budget` or `Actual only`

### Deployment
No Apps Script replacement or Google Sheet change is required.
