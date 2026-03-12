export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ||
  "https://calendar.google.com/appointments/schedules/AcZssZ3VLdfLHPM44u6-3Uc1V9OyKNRiDFuo9gG9rPnEN-_Q4ofiBDl-_2OxXj8jK5GkKKgypxCYdjf2";

export const NAV_LINKS = [
  { label: "Platform", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Tour", href: "#modules" },
  { label: "For Your Team", href: "#for-your-team" },
  { label: "Demo", href: "#lead-capture" },
];

export const MODULE_TABS = [
  {
    id: "ai-hub",
    label: "AI Hub & Portfolio",
    description:
      "Full portfolio intelligence dashboard. Track projects across geographies, monitor verified credit metrics, and access AI-powered impact story generation.",
    persona: "FOR NGOS · INVESTORS",
    outcomes: [
      "Real-time portfolio metrics across all projects",
      "On-chain verified credit tracking",
      "AI-generated impact narratives for comms teams",
    ],
    embedUrl: "https://mcv-impact-dashboard2.vercel.app/dashboard",
    isProtected: false,
  },
  {
    id: "claims-engine",
    label: "Claims Engine",
    description:
      "AI-powered ingestion and structuring of raw impact data. Upload field reports, monitoring documents, or spreadsheets — Compass extracts and organizes verifiable claims automatically.",
    persona: "FOR ALL ORGANIZATIONS",
    outcomes: [
      "Reduce data preparation time by 80%",
      "Auto-tag claims by type, geography, and standard",
      "Audit-ready claims library in days, not months",
    ],
    embedUrl: "https://regen-claims-engine.vercel.app/",
    isProtected: false,
    credentials: "Demo: admin@regen.network / admin",
  },
  {
    id: "fund-intelligence",
    label: "Fund Intelligence",
    description:
      "Portfolio-level diligence and performance tracking for investment funds. Claims-level visibility into every portfolio company's impact evidence.",
    persona: "FOR IMPACT INVESTORS · GRANTMAKERS",
    outcomes: [
      "Structured claims data across your entire portfolio",
      "Cross-portfolio benchmarking and risk flags",
      "Verified evidence trails for LP reporting",
    ],
    embedUrl: "https://ci-fund-intelligence.vercel.app/",
    isProtected: true,
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    description:
      "Traceability and claims verification across complex supply chains. Connect supplier data, verify sustainability claims, and generate audit-ready reports.",
    persona: "FOR CONSUMER BRANDS",
    outcomes: [
      "End-to-end supply chain claims visibility",
      "Verified sustainability data for marketing and compliance",
      "Real-time risk flagging for supply chain ESG exposure",
    ],
    embedUrl: "https://kndemo.gaiaai.xyz/",
    isProtected: true,
  },
  {
    id: "marine-portfolio",
    label: "Marine Portfolio",
    description:
      "Marine biodiversity intelligence platform. Track conservation projects, verify on-chain credits, and generate impact stories from monitoring data.",
    persona: "FOR CONSERVATION NGOS",
    outcomes: [
      "Portfolio tracking across multiple marine ecosystems",
      "On-chain verified credit retirement and attestation",
      "Auto-generated content for donor and partner comms",
    ],
    embedUrl: "https://seatrees-frontend.vercel.app/dashboard",
    isProtected: false,
  },
  {
    id: "mrv-platform",
    label: "MRV Platform",
    description:
      "Measurement, Reporting, and Verification platform with AI-assisted attribution. Connect field data to fundable impact claims.",
    persona: "FOR NGOS · GRANTMAKERS",
    outcomes: [
      "Structured MRV workflows with AI data extraction",
      "Attribution modeling for multi-stakeholder programs",
      "Funder-ready reporting in standardized formats",
    ],
    embedUrl: "https://waterfunder-platform.vercel.app/",
    isProtected: false,
    credentials: "Demo: admin@waterfunder.com / admin-change-me",
  },
  {
    id: "lands-credits",
    label: "Lands & Credits",
    description:
      "Geospatial intelligence for land-based carbon and nature credits. Visualize project geographies, track credit supply, and monitor portfolio performance on a live map.",
    persona: "FOR INVESTORS · REGISTRIES",
    outcomes: [
      "Live map view of all projects with satellite data layers",
      "Credit supply, issuance, and retirement tracking",
      "Marketplace intelligence for credit buyers and sellers",
    ],
    embedUrl: "https://regen-lands-dashboard.vercel.app/",
    isProtected: false,
  },
];

export const PERSONAS = [
  {
    id: "investors",
    icon: "TrendingUp",
    label: "Impact Investors",
    roleLine: "For portfolio managers, ESG analysts, and fund directors",
    headline: "Stop spending months on diligence",
    body: "Compass gives you a verified claims trail, AI-assisted analysis, and portfolio-level intelligence — so you can move from interest to conviction faster.",
    modules: ["Diligence Tools", "Claims Engine", "Trends & Risk"],
    quote:
      "We cut our due diligence cycle from twelve weeks to three. The verified claims trail changed everything.",
    attribution: "— Director of Impact, Social Impact Fund",
  },
  {
    id: "conservation",
    icon: "Leaf",
    label: "Conservation & NGOs",
    roleLine: "For program directors, MRV leads, and field teams",
    headline: "Your field data deserves to be legible",
    body: "Compass transforms monitoring reports and MRV outputs into structured, verifiable claims — ready for funders, partners, and registries.",
    modules: ["Claims Engine", "Reports Module", "Regen Ledger"],
    quote:
      "Our monitoring data finally tells the story our donors need to hear — backed by on-chain proof.",
    attribution: "— Program Director, Marine Conservation NGO",
  },
  {
    id: "brands",
    icon: "Package",
    label: "Consumer Brands",
    roleLine: "For sustainability leads and supply chain managers",
    headline: "Your supply chain tells a story",
    body: "Collect, verify, and communicate impact claims across your value chain — built for scrutiny, designed for storytelling and compliance.",
    modules: ["Claims Engine", "Regen Ledger", "Reports Module"],
    quote:
      "We went from scrambling for sustainability data at audit time to having verified claims ready year-round.",
    attribution: "— VP Sustainability, Global Food Brand",
  },
  {
    id: "grantmakers",
    icon: "HeartHandshake",
    label: "Grantmakers",
    roleLine: "For program officers and due diligence teams",
    headline: "Fund with confidence",
    body: "Give your grantees a structured way to report outcomes — and get a verified, auditable trail of impact evidence for your board and donors.",
    modules: ["Reports Module", "Diligence Tools", "Claims Catalog"],
    quote:
      "Our board reporting went from a quarterly scramble to a one-click export of verified outcomes.",
    attribution: "— Executive Director, Watershed Foundation",
  },
];
