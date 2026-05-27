// =============================================================
//  POINTR — CONFIG FILE
//  ⚙️  Developer settings and toggles.
//  Change these values to control behaviour without touching
//  the main script or HTML.
// =============================================================

const CONFIG = {

  // ── FORM MODE ──────────────────────────────────────────────
  //
  //  "progressive"  → Fields 1-3 show first. Fields 4-6 reveal
  //                   after the user fills in name + email.
  //                   Best for production — reduces overwhelm.
  //
  //  "all"          → Entire form shows at once from the start.
  //                   Use this for testing or reviewing the form.
  //
  formMode: "progressive",   // ← TOGGLE THIS: "progressive" | "all"


  // ── SUBMISSION ENDPOINT ────────────────────────────────────
  //
  //  Where form data gets sent.
  //  Options:
  //    "console"    → Logs to browser console only (dev/testing)
  //    "airtable"   → Posts to Airtable (fill in keys below)
  //    "mailchimp"  → Posts to Mailchimp (fill in keys below)
  //    "formspree"  → Posts to Formspree (fill in endpoint below)
  //
  submitTo: "airtable",       // ← CHANGE THIS when you connect a backend


  // ── AIRTABLE SETTINGS (only used if submitTo: "airtable") ──
  airtable: {
    personalAccessToken:  "patyhlCFLA3eyNjgs.65f80db214ebaaedca986ff84732af09f9f2dd098adfe68774d32b6fa0147e39",
    baseId:  "appWrwFQHjoTJBPyb",
    table:   "Registrations",
  },


  // ── FORMSPREE SETTINGS (only used if submitTo: "formspree") ─
  formspree: {
    endpoint: "https://formspree.io/f/mvzyveyj",
  },


  // ── MAILCHIMP SETTINGS (only used if submitTo: "mailchimp") ─
  mailchimp: {
    endpoint: "YOUR_MAILCHIMP_POST_URL",
  },


  // ── PROGRESSIVE FORM TRIGGER ───────────────────────────────
  //  Which fields must be filled before the second group appears.
  //  Only used when formMode is "progressive".
  //  Options: "name_and_email" | "email_only" | "name_only"
  //
  progressiveTrigger: "name_and_email",


  // ── ANALYTICS ─────────────────────────────────────────────
  //  Set to true once you've added Google Analytics or similar.
  trackingEnabled: false,
  googleAnalyticsId: "G-XXXXXXXXXX",

};
