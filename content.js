// =============================================================
//  POINTR — CONTENT FILE
//  ✏️  This is the ONLY file you need to edit for content changes.
//  Change text, labels, options, programs, prices here.
//  Do NOT edit index.html or script.js for content changes.
// =============================================================

const CONTENT = {

  // ── PAGE META ──────────────────────────────────────────────
  meta: {
    pageTitle:       "Pointr — Know what your points are worth",
    pageDescription: "Australian loyalty points aggregator. See your real dollar value.",
  },

  // ── NAV ────────────────────────────────────────────────────
  nav: {
    logoText:  "Pointr",          // The wordmark. The "i" is always violet — don't remove it.
    pillText:  "Early Access",    // Small badge top-right of nav
  },

  // ── HERO (left side) ───────────────────────────────────────
  hero: {
    eyebrow:   "Australian loyalty points — decoded",
    headline:  ["Your points.", "Real dollar", "value."],
    // headline[0] = parchment, headline[1] = violet italic, headline[2] = amber italic
    subtext:   "I bought a house in Melbourne and felt every dollar. Then I found <strong>$3,511 in forgotten points</strong> across four programs I never checked.<br><br>Pointr shows you what your loyalty points are actually worth and how you can maximise their use. Real value - updated daily.",
    stats: [
      { number: "8+",  label: "Programs tracked" },
      { number: "1",   label: "Daily insight",    amber: true },
      { number: "$0",  label: "To join waitlist" },
    ],
  },

  // ── INCENTIVE BANNER (above the form) ──────────────────────
  incentive: {
    icon:  "🎁",
    title: "Waitlist members",
    desc:  "Register early. Get ahead faster",
  },

  // ── FORM ───────────────────────────────────────────────────
  form: {
    title:    "Get early access",
    titleEm:  "early access",   // This word goes violet italic inside the title
    subtitle: "Takes 60 seconds.",

    // Field labels and placeholders
    fields: {
      firstName: {
        label:       "First name",
        placeholder: "Alex",
        required:    true,
      },
      email: {
        label:       "Email address",
        placeholder: "alex@email.com.au",
        required:    true,
      },
    },

    // ── PROGRAMS (multi-select checkboxes) ───────────────────
    // Add or remove programs here. dotColor is the small dot beside the name.
    // Keep popular Australian programs at the top.
    programsLabel: "Programs you're in",
    programs: [
      { value: "qantas",    label: "Qantas Frequent Flyer",  dotColor: "#E8192C" },
      { value: "velocity",  label: "Virgin Velocity",        dotColor: "#E8192C" },
      { value: "flybuys",   label: "Coles Flybuys",          dotColor: "#FFCC00" },
      { value: "everyday",  label: "Everyday Rewards",       dotColor: "#00A650" },
      { value: "amex",      label: "Amex Membership Rewards",dotColor: "#007BC1" },
      { value: "cba",       label: "CommBank Awards",        dotColor: "#FFD000" },
      { value: "anz",       label: "ANZ Rewards",            dotColor: "#007DBA" },
      { value: "nab",       label: "NAB Rewards",            dotColor: "#DA1710" },
      { value: "westpac",   label: "Westpac Altitude",       dotColor: "#DA1710" },
      { value: "nrma",      label: "NRMA Rewards",           dotColor: "#0033A0" },
      { value: "ihg",       label: "IHG One Rewards",        dotColor: "#006272" },
      { value: "marriott",  label: "Marriott Bonvoy",        dotColor: "#8B2332" },
      { value: "other",     label: "Other",                  dotColor: "#9A8A6E" },
    ],

    // ── GOALS field ──────────────────────────────────────────
    goalsLabel:       "What are your goals with your points?",
    goalsPlaceholder: "e.g. I want to fly business class to Bali, or save on my weekly grocery shop…",

    // ── FRUSTRATIONS (multi-choice, pick one) ────────────────
    frustrationLabel: "What frustrates you most about rewards points?",
    frustrations: [
      { value: "expiry",  label: "Points expiring" },
      { value: "value",   label: "Not knowing dollar value" },
      { value: "logins",  label: "Too many apps / logins" },
      { value: "redeem",  label: "Hard to transfer or redeem" },
      { value: "other",   label: "Other" },
    ],
    // If "Other" is selected, a textarea appears. Set required: true to force them to fill it.
    frustrationOtherPlaceholder: "Tell us what frustrates you most…",
    frustrationOtherRequired: false,   // ← change to true to make it required

    // ── PRICE OPTIONS ────────────────────────────────────────
    priceLabel:   "How much would you pay per month for Pointr?",
    priceOptions: [
      { value: "0",     label: "$0",      sub: "Free only"       },
      { value: "4.99",  label: "$4.99",   sub: "Coffee money"    },
      { value: "9.99",  label: "$9.99",   sub: "Most likely"     },
      { value: "14.99", label: "$14.99",  sub: "If it's great"   },
      { value: "19.99", label: "$19.99+", sub: "I'd pay more"    },
    ],

    // ── CTA BUTTON ───────────────────────────────────────────
    ctaText:    "Join the waiting list",
    submitNote: "Your data is handled under the Australian Privacy Act 1988. We never sell or share your information.",
  },

  // ── SOCIAL PROOF (below submit button) ─────────────────────
  proof: [
    "Australian-built",
    "Free to join"
  ],

  // ── SUCCESS STATE ───────────────────────────────────────────
  success: {
    icon:    "✓",
    title:   "You're in.",
    message: "Voila, you are now 1 step closer to get ahead and to be in control of your points.<br><br>We'll be in touch before anyone else gets access.<br><br>Follow <strong>@pointr__</strong> on Instagram for weekly points tips while you wait.",
  },

  // ── FEATURES SECTION ────────────────────────────────────────
  features: {
    title:    "What Pointr does",
    titleEm:  "Pointr",   // This word goes violet italic
    subtitle: "Built for Australians who are tired of leaving money on the table.",
    cards: [
      { icon: "$",  amber: false, name: "Dollar value daily",  desc: "See what every program is worth in AUD — updated every day. No more abstract numbers." },
      { icon: "⚡", amber: true,  name: "One smart action",    desc: "Each morning: one specific recommendation based on your balances, expiry dates, and live bonus offers." },
      { icon: "⏱", amber: false, name: "Expiry alerts",       desc: "Never lose points to expiry again. Pointr watches the clock so you don't have to." },
      { icon: "📈", amber: true,  name: "Points portfolio",    desc: "Your total rewards value — all programs — shown as a growing portfolio over time." },
      { icon: "🎯", amber: false, name: "Goal tracker",        desc: "Set a target — a flight, an upgrade — and Pointr shows exactly how close you are." },
      { icon: "🔍", amber: true,  name: "Daily deals",         desc: "Bonus point offers from your programs, surfaced daily before they expire." },
    ],
  },

  // ── PRIVACY NOTICE ─────────────────────────────────────────
  privacy: {
    title: "Privacy & Data Collection Notice",
    text:  "Pointr collects personal information (name, email, loyalty program preferences) for the purpose of managing early access registration and communicating product updates. Your information is handled in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs). We do not sell, rent, or share your personal information with third parties. Points values are indicative estimates only and do not constitute financial advice. You may request access to, correction of, or deletion of your personal information at any time by emailing <a href='mailto:privacy@pointrapp.com.au'>privacy@pointrapp.com.au</a>.",
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    note: "Points values are estimates based on May 2026 data. Not financial advice. Pointr is not affiliated with Qantas, Virgin Australia, Coles, or Woolworths. Built in Melbourne. © 2026 Pointr.",
  },

};
