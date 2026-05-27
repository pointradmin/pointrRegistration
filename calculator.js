// =============================================================
//  POINTR — POINTS CALCULATOR
//  📊  Standalone calculator. Not used on the waitlist page.
//      Drop this file into any future page where you need it.
//      All verified rates sourced May 2026.
// =============================================================

// ── VERIFIED RATES (May 2026) ─────────────────────────────────
// Sources: Finder, Australian Frequent Flyer, Point Hacks
// All values in CENTS PER POINT.
const CALC_RATES = {
  qantas: {
    name:       "Qantas Frequent Flyer",
    dotColor:   "#E8192C",
    worst:      { rate: 0.46, label: "Gift card (e.g. David Jones $50 = 10,900 pts)" },
    mid:        { rate: 1.80, label: "Average across all redemptions (AFF weighted)" },
    best:       { rate: 8.00, label: "International upgrade (e.g. Economy → Business)" },
    note:       "Rates include August 2025 devaluation (5–20% more points required for flights).",
    source:     "Finder May 2026, Australian Frequent Flyer Point Valuations",
  },
  velocity: {
    name:       "Virgin Velocity",
    dotColor:   "#E8192C",
    worst:      { rate: 0.40, label: "Gift card / store purchase" },
    mid:        { rate: 1.70, label: "Average across all redemptions (AFF weighted)" },
    best:       { rate: 4.00, label: "International business class reward seat" },
    note:       "United Business Class partner rewards ended August 2025.",
    source:     "Finder May 2026, Australian Frequent Flyer Point Valuations",
  },
  flybuys: {
    name:       "Coles Flybuys",
    dotColor:   "#FFCC00",
    worst:      { rate: 0.50, label: "Coles checkout ($10 off = 2,000 pts)" },
    mid:        { rate: 0.50, label: "Standard checkout / gift card value" },
    best:       { rate: 1.50, label: "Via Velocity Frequent Flyer transfer (2,000 Flybuys = 1,000 Velocity)" },
    note:       "Transfer rate: 1,000 Flybuys = 500 Velocity Points. Value depends on Velocity redemption.",
    source:     "Point Hacks July 2025, The Point Calculator March 2026",
  },
  everyday: {
    name:       "Everyday Rewards (Woolworths)",
    dotColor:   "#00A650",
    worst:      { rate: 0.50, label: "Shopping discount ($10 off = 2,000 pts)" },
    mid:        { rate: 0.50, label: "Standard shopping discount value" },
    best:       { rate: 3.00, label: "Via Qantas Points transfer (2,000 EDR = 1,000 QFF), redeemed for Business Class" },
    note:       "Transfer rate: 2,000 Everyday Rewards = 1,000 Qantas Points. Best value from Qantas flight redemptions.",
    source:     "Executive Traveller, FlightHacks April 2026, Point Hacks",
  },
};

// ── CALCULATE ─────────────────────────────────────────────────
// Returns worst, mid, and best dollar values for a given
// program and number of points. All values in AUD.
//
// Usage:
//   const result = calculatePoints('qantas', 50000);
//   console.log(result.mid.dollars); // → 900
//
function calculatePoints(programKey, points) {
  const r = CALC_RATES[programKey];
  if (!r || !points || points <= 0) return null;

  return {
    program: r.name,
    points:  points,
    worst: {
      dollars:   parseFloat((points * r.worst.rate / 100).toFixed(2)),
      label:     r.worst.label,
      centsPerPt: r.worst.rate,
    },
    mid: {
      dollars:   parseFloat((points * r.mid.rate / 100).toFixed(2)),
      label:     r.mid.label,
      centsPerPt: r.mid.rate,
    },
    best: {
      dollars:   parseFloat((points * r.best.rate / 100).toFixed(2)),
      label:     r.best.label,
      centsPerPt: r.best.rate,
    },
    note:   r.note,
    source: r.source,
    asOf:   "May 2026",
    disclaimer: "Estimated values only. Not financial advice. Verify current rates before redeeming.",
  };
}

// ── CALCULATE PORTFOLIO TOTAL ─────────────────────────────────
// Pass an object of { programKey: pointsAmount } pairs.
// Returns total worst, mid, and best dollar values.
//
// Usage:
//   const total = calculatePortfolio({
//     qantas:   56840,
//     velocity: 160000,
//     flybuys:  12000,
//   });
//   console.log(total.mid); // → 3526.80
//
function calculatePortfolio(pointsMap) {
  let worstTotal = 0;
  let midTotal   = 0;
  let bestTotal  = 0;
  const breakdown = [];

  for (const [key, pts] of Object.entries(pointsMap)) {
    if (!pts || pts <= 0) continue;
    const r = CALC_RATES[key];
    if (!r) continue;

    const worst = pts * r.worst.rate / 100;
    const mid   = pts * r.mid.rate   / 100;
    const best  = pts * r.best.rate  / 100;

    worstTotal += worst;
    midTotal   += mid;
    bestTotal  += best;

    breakdown.push({
      program: r.name,
      points:  pts,
      worst:   parseFloat(worst.toFixed(2)),
      mid:     parseFloat(mid.toFixed(2)),
      best:    parseFloat(best.toFixed(2)),
    });
  }

  return {
    worst:     parseFloat(worstTotal.toFixed(2)),
    mid:       parseFloat(midTotal.toFixed(2)),
    best:      parseFloat(bestTotal.toFixed(2)),
    breakdown: breakdown,
    disclaimer: "Estimated values only. Not financial advice. Verify current rates before redeeming.",
    asOf:       "May 2026",
  };
}

// ── FORMAT HELPERS ────────────────────────────────────────────
function formatDollars(amount) {
  return '$' + parseFloat(amount).toLocaleString('en-AU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatPoints(pts) {
  return parseInt(pts).toLocaleString('en-AU') + ' pts';
}

// ── AVAILABLE PROGRAMS ────────────────────────────────────────
function getAvailablePrograms() {
  return Object.keys(CALC_RATES);
}
