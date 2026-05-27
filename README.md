# Pointr Waitlist Page

## File Structure

```
pointr-waitlist/
├── index.html        Structure only. Rarely needs editing.
├── styles.css        All visual design — colours, fonts, layout.
├── content.js        ✏️  ALL text, labels, options. Edit this daily.
├── config.js         ⚙️  Behaviour toggles. Edit to switch modes.
├── script.js         🔒 Form logic. Don't edit unless changing behaviour.
├── calculator.js     📊 Standalone points calculator. Not used on this page.
└── README.md         This file.
```

---

## The one-sentence rule for each file

| File | When to open it |
|---|---|
| `content.js` | You want to change any text, label, option, or program |
| `config.js` | You want to change how the form behaves |
| `styles.css` | You want to change colours, fonts, spacing, layout |
| `index.html` | You want to add or remove a whole new section |
| `script.js` | You want to change form validation or submission logic |
| `calculator.js` | You're building a new page with the points calculator |

---

## Common tasks

### Change any text or label
Open `content.js`. Every piece of text on the page lives here.

### Add a new loyalty program to the checkbox list
Open `content.js`. Find the `programs` array. Add a new object:
```js
{ value: "newprogram", label: "Program Name", dotColor: "#HEXCODE" },
```

### Change the price options
Open `content.js`. Find `priceOptions`. Edit the array.

### Add a new frustration option
Open `content.js`. Find `frustrations`. Add a new object:
```js
{ value: "mypain", label: "My frustration" },
```

### Show the entire form at once (for testing or review)
Open `config.js`. Change:
```js
formMode: "progressive"
```
to:
```js
formMode: "all"
```
Change it back to `"progressive"` before deploying to production.

### Change when the second group of fields appears
Open `config.js`. Change `progressiveTrigger` to:
- `"name_and_email"` — both first name and email must be filled (default)
- `"email_only"` — just a valid email required
- `"name_only"` — just a name required

### Connect form submissions to Airtable
1. Open `config.js`
2. Change `submitTo: "console"` to `submitTo: "airtable"`
3. Fill in your `airtable.apiKey`, `airtable.baseId`, and `airtable.table`

### Connect to Formspree (easiest option)
1. Go to formspree.io and create a free form
2. Copy your endpoint URL (looks like `https://formspree.io/f/abcd1234`)
3. Open `config.js`
4. Change `submitTo: "console"` to `submitTo: "formspree"`
5. Paste your URL into `formspree.endpoint`

### Change the main colour
Open `styles.css`. At the very top, find `:root`. Change `--violet` to your new colour.
Every element using that colour updates automatically.

### Change the font
Open `styles.css`. At the top of `:root`:
```css
--serif: 'DM Serif Display', serif;
--sans:  'DM Sans', sans-serif;
```
Also update the Google Fonts `<link>` in `index.html` if using different fonts.

---

## Deploying to GitHub Pages

1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Set Source to `main` branch, root folder
4. Your page is live at `https://yourusername.github.io/your-repo-name`

To use a custom domain (e.g. pointrapp.com.au):
1. Add a file called `CNAME` to your repo containing just: `pointrapp.com.au`
2. In your domain registrar (VentraIP etc), add a CNAME DNS record pointing to `yourusername.github.io`
3. In GitHub Pages settings, add your custom domain

---

## Data collected per submission

Each form submission produces this object (logged to console in dev mode):

```js
{
  timestamp:         "2026-05-27T...",
  firstName:         "Alex",
  email:             "alex@email.com.au",
  programs:          ["qantas", "flybuys", "everyday"],
  goals:             "I want to fly business to Bali...",
  frustration:       "expiry",
  frustrationOther:  "",
  wouldPayPerMonth:  "9.99",
}
```

---

## Points calculator (separate file)

`calculator.js` is a standalone tool not loaded on this page.

To use it on a future page, add this to your HTML:
```html
<script src="calculator.js"></script>
```

Then call:
```js
// Single program
const result = calculatePoints('qantas', 56840);
console.log(result.mid.dollars);   // → 1023

// Full portfolio
const portfolio = calculatePortfolio({
  qantas:   56840,
  velocity: 160000,
});
console.log(portfolio.mid);   // → total midpoint value in dollars
```

All rates are sourced from Finder, Australian Frequent Flyer, and Point Hacks (May 2026).

---

*Built in Melbourne. © 2026 Pointr.*
