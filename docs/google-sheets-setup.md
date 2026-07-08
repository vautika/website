# Google Sheets Setup for Vautika Contact Forms

## What this does
When someone fills the contact form or popup on your website, their details (name, phone, condition, service, message) are sent automatically to a Google Sheet — like a CRM.

---

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet named **"Vautika Leads"**
3. Add these column headers in Row 1:
   ```
   A: Timestamp | B: Name | C: Phone | D: Condition | E: Service | F: Message | G: Source
   ```

---

## Step 2: Create the Apps Script

1. In the Google Sheet, click **Extensions → Apps Script**
2. Replace all the default code with:

```javascript
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;
    
    sheet.appendRow([
      params.timestamp || new Date().toLocaleString('en-IN'),
      params.name || '',
      params.phone || '',
      params.condition || '',
      params.service || '',
      params.message || '',
      params.source || 'Website'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (Ctrl+S), name the project "Vautika Contact Form"

---

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Type" → Select **Web app**
3. Settings:
   - **Description**: Vautika Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: **Anyone** ← Important!
4. Click **Deploy**
5. **Authorize** the app when prompted (click "Allow")
6. **Copy the Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

---

## Step 4: Add the URL to your website

Open both of these files and replace `YOUR_SCRIPT_ID_HERE` with your actual URL:

1. [`src/components/sections/ContactFormSection.tsx`](../src/components/sections/ContactFormSection.tsx) — line 8
2. [`src/components/ui/ContactPopup.tsx`](../src/components/ui/ContactPopup.tsx) — line 5

**Example:**
```typescript
// Before:
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec'

// After:
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby.../exec'
```

---

## Step 5: Test it

1. Open your website
2. Fill the contact form or wait for the popup
3. Check your Google Sheet — you should see a new row!

---

## Notes

- Data appears in the sheet within seconds
- The form still works even if the sheet fails (users can WhatsApp/call)
- The popup appears after 25 seconds, and won't show again for 3 days per device
- All entries are timestamped in IST (Indian Standard Time)
