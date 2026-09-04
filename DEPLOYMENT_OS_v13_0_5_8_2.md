# Deployment — OS v13.0.5.8.2

1. Replace Apps Script code with `apps-script.gs` from this package.
2. Save the Apps Script project.
3. Deploy → Manage deployments → Edit active deployment → Version: New version → Deploy.
4. Upload these GitHub files to PT13-main:
   - `app.js`
   - `index.html`
   - `service-worker.js`
   - `styles.css` only if your repo requires uploading the full package; this patch does not change CSS.
5. In PortOS, use Settings → Check for Updates → Update Now, or hard-refresh the browser/PWA.
6. Run the Stage 4A acceptance tests.

Do not delete `Workbook_PREMIGRATION` from the backend Sheet.
