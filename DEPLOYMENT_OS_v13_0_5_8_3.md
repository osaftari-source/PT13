# Deployment — PortOS OS v13.0.5.8.3

1. Replace the live Apps Script code with `apps-script.gs` from this package.
2. Save.
3. Deploy → Manage deployments → Edit active deployment → Version: New version → Deploy.
4. Upload these PWA files to GitHub Pages:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `service-worker.js`
5. Open PortOS → Settings → Check for Updates → Update Now.
6. Confirm the displayed app version is OS v13.0.5.8.3.

## 4B acceptance checks

- Expense picker is grouped by cost centre and only active categories are available for new entries.
- New expense / split-bill defaults to the most-used category within the last-used cost centre.
- Choosing `Cash / e-wallet` requires a note: "What was this for?".
- Dashboard shows Consumption and Total Cash Outflow separately.
- Cash outflow vs THP shows OK/OVER.
- `cash_withdrawal` and `credit_card` envelope watch cards show OK/OVER.
- Sinking panel shows balance, set-aside, draw, and next expected draw.
- Monthly report chart appears in Print / Save as PDF.
