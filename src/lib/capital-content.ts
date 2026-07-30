import type { LeadField } from "./site-config";

export const capitalNav = [
  { label: "Transactions", href: "/transactions" },
  { label: "Capital", href: "/capital" },
  { label: "Strategies", href: "/strategies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const capitalImages = {
  hero: "/images/investor/janpath.jpeg",
  income: "/images/investor/safdarjung.jpeg",
  land: "/images/investor/neemrana-land.jpg",
  development: "/images/investor/haridwar-land.jpg",
} as const;

export const transactionStrategies = [
  {
    slug: "private-acquisitions",
    eyebrow: "Buy-side",
    title: "Private Acquisitions",
    summary:
      "Mandate-led sourcing for family offices, founders, UHNI buyers and NRI capital seeking qualified real estate opportunities before public noise builds.",
    focus:
      "Large residential assets, commercial properties, land positions, redevelopment opportunities and confidential owner conversations.",
    risk:
      "The work is not to find more options. It is to reject weak opportunities early, then move only where title, counterparty, pricing and execution path deserve attention.",
  },
  {
    slug: "income-assets",
    eyebrow: "Cash flow",
    title: "Income Assets",
    summary:
      "Review of leased and leasable real estate where rent quality, tenant profile, lease structure, capital expenditure and exit depth matter more than brochure yield.",
    focus:
      "Commercial floors, retail, office, mixed-use assets and residential holdings where income must be understood in context.",
    risk:
      "Yield can be misleading when vacancy, lock-in, escalation, fit-out cost, maintenance, compliance and tenant replacement risk are not priced correctly.",
  },
  {
    slug: "development-redevelopment",
    eyebrow: "Value creation",
    title: "Development & Redevelopment",
    summary:
      "Transaction support for owners, developers and capital partners reviewing redevelopment, builder collaboration, plotted development or repositioning opportunities.",
    focus:
      "Colonies, corridors and asset situations where permissions, timing, local market depth and partner capability shape the outcome.",
    risk:
      "Development upside is only useful when legal position, approvals, cost assumptions, exit market and partner alignment can survive a difficult review.",
  },
  {
    slug: "land",
    eyebrow: "Strategic holding",
    title: "Land",
    summary:
      "Selective sourcing and review of land parcels where patient capital can underwrite title, access, aggregation, infrastructure adjacency and future buyer logic.",
    focus:
      "North India corridors, urban expansion zones, logistics adjacency, institutional use cases and family balance-sheet land exposure.",
    risk:
      "Land is not liquid by default. The decision must be built around clean records, boundaries, access, zoning, realistic hold period and a credible exit route.",
  },
  {
    slug: "special-situations",
    eyebrow: "Complexity",
    title: "Special Situations",
    summary:
      "Confidential review of real estate situations where timing, distress, restructuring, succession, partner exit or incomplete execution creates a potential opening.",
    focus:
      "Assets that require careful counterparty handling, private negotiation and senior-level judgement before any capital is exposed.",
    risk:
      "Complexity can create entry advantage, but only when downside is visible and the transaction can be documented without ambiguity.",
  },
  {
    slug: "private-disposition-advisory",
    eyebrow: "Sell-side",
    title: "Private Disposition Advisory",
    summary:
      "Discreet preparation and buyer-introduction support for owners who want to discuss a sale, capital partner or partial exit without broadcasting the asset.",
    focus:
      "Owners, families, developers and corporates with real estate that requires controlled positioning before it reaches prospective capital.",
    risk:
      "A weak sale process can damage price discovery. Confidentiality, buyer qualification and narrative discipline matter before conversations begin.",
  },
] as const;

export const transactionDesk = {
  title: "Current Transaction Desk",
  description:
    "Active opportunities are shared only when there is a genuine mandate, suitable counterparty fit and permission to discuss details. Public examples are intentionally limited.",
  emptyState:
    "No public transaction memoranda are open on the website today. Qualified capital can submit a mandate to receive relevant private conversations when available.",
};

export const activeCapitalMandates = {
  title: "Active Capital Mandates",
  description:
    "Hacoco Capital maintains live conversations with private capital only where mandate, ticket size, market and risk appetite are clear enough to act.",
  emptyState:
    "Mandates are not published as a public directory. Owners, developers and intermediaries can submit an opportunity for confidential review.",
};

export const underwritingPillars = [
  {
    title: "Counterparty Quality",
    copy:
      "Who owns, controls or represents the asset, and whether they are capable of closing on the stated terms.",
  },
  {
    title: "Title & Documentation",
    copy:
      "What must be reviewed by qualified professionals before capital, exclusivity or price commitment is discussed.",
  },
  {
    title: "Location & Liquidity",
    copy:
      "Why this micro-market has depth, who the future buyer or tenant is, and what could restrict exit.",
  },
  {
    title: "Capital Fit",
    copy:
      "Whether the transaction matches ticket size, hold period, income need, appreciation objective and execution complexity.",
  },
] as const;

export const capitalInsights = [
  {
    slug: "private-real-estate-capital-needs-a-mandate-before-a-market",
    title: "Private real estate capital needs a mandate before a market",
    description:
      "Why serious buyers should define ticket size, hold period, risk tolerance and execution constraints before reviewing private real estate opportunities.",
    minutes: "6 min read",
    body: [
      "Large private real estate transactions rarely fail because the buyer did not see enough options. They fail because the buyer saw too many unqualified options before the mandate was precise. A mandate is not a wishlist. It is a decision framework. It defines what kind of risk the capital is allowed to take, how long it can remain illiquid, what level of documentation comfort is required and what would make the opportunity unacceptable even if the address looks attractive.",
      "For family offices and founder capital, this matters because real estate is often emotional and operational at the same time. A home can also be a store of capital. A commercial asset can appear income-led while hiding vacancy or capex risk. A land parcel can look inexpensive while carrying time, access and title complexity. Without a mandate, every asset begins to look plausible. With a mandate, most assets are rejected quickly.",
      "Hacoco Capital starts with the capital brief because it protects time. The brief should cover ticket size, geography, asset class, income versus appreciation objective, target hold period, funding route, decision timeline and documentation thresholds. Only after that does sourcing become useful. The goal is not volume. The goal is a smaller universe of opportunities that can survive first-principles questioning.",
      "This is also where the distinction between Invest With Hacoco and Hacoco Capital matters. Invest With Hacoco is built for acquisition discovery across specific residential, land and global entry routes. Hacoco Capital is built for larger, more private transactions where capital and opportunity must be matched carefully, often before either side wants visibility.",
    ],
  },
  {
    slug: "what-a-private-real-estate-transaction-memorandum-should-answer",
    title: "What a private real estate transaction memorandum should answer",
    description:
      "The practical questions a memorandum should address before an investor, owner or capital partner spends time on a private transaction.",
    minutes: "7 min read",
    body: [
      "A private memorandum is not marketing decoration. It should help a qualified counterparty decide whether the transaction deserves a serious conversation. That means it must answer the questions that matter early: what is the asset, who controls it, what is the proposed transaction, what is known, what is unknown and what must be verified independently.",
      "In a private real estate situation, a good memorandum should describe the location, title position, current use, tenancy or possession status, development potential, pricing logic, expected timeline and the reason the transaction exists. It should also be honest about constraints. If approvals are pending, access is imperfect, tenancy is complex or family consent is required, those issues should not be hidden until diligence.",
      "For capital, the memorandum should make the risk visible enough to decide whether to proceed. For owners, it should protect confidentiality while making the opportunity credible. For intermediaries, it should prevent a weak first conversation with the wrong buyer. The best private processes do not begin with mass circulation. They begin with controlled information and qualified recipients.",
      "Hacoco Capital does not publish memoranda publicly. When a transaction is suitable for discussion, details are shared with qualified counterparties after context, permission and confidentiality expectations are clear.",
    ],
  },
  {
    slug: "income-assets-require-more-than-a-yield-number",
    title: "Income assets require more than a yield number",
    description:
      "Why rent, tenant quality, lease terms, maintenance and future liquidity matter before private capital buys an income-producing real estate asset.",
    minutes: "5 min read",
    body: [
      "A quoted yield is only a starting point. Serious capital needs to know the quality of that income, the durability of the tenant, the enforceability of lease terms, the replacement depth in that micro-market and the capital expenditure likely to be required over the hold period.",
      "The most common mistake is comparing income assets only by headline return. Two assets can show similar yield while carrying very different risk. One may have a strong tenant, clean documentation and a location with future buyer depth. Another may have short lease visibility, building condition issues, concentrated tenant risk and weak resale liquidity. The yield number alone does not capture that difference.",
      "A disciplined review looks at lease lock-in, escalation, deposit, outgoings, vacancy assumptions, fit-out obligations, maintenance liabilities, compliance and the probability of selling the asset to the next buyer. Income is valuable when it is durable. It is less valuable when it compensates the buyer for risks they have not understood.",
      "Hacoco Capital treats income assets as transactions, not coupons. The question is not only what rent is being received today. The better question is whether the capital has been paid adequately for the risks it is accepting.",
    ],
  },
] as const;

export const deployCapitalFields: LeadField[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "organisation", label: "Organisation / family office", type: "text", required: true, placeholder: "Company, family office or self" },
  { name: "role", label: "Role", type: "text", required: true, placeholder: "Founder, family office, principal, adviser" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +971 / +44" },
  { name: "primaryLocation", label: "Primary location", type: "text", required: true, placeholder: "Delhi, Dubai, London, Singapore" },
  {
    name: "indicativeCapitalRange",
    label: "Indicative capital range",
    type: "select",
    required: true,
    options: ["INR 25 Cr to 50 Cr", "INR 50 Cr to 100 Cr", "INR 100 Cr to 250 Cr", "INR 250 Cr to 500 Cr", "INR 500 Cr+"],
  },
  { name: "targetGeography", label: "Target geography", type: "text", required: true, placeholder: "Delhi NCR, North India, pan India, selective" },
  {
    name: "targetAssetClass",
    label: "Target asset class",
    type: "select",
    required: true,
    options: ["Income asset", "Prime residential", "Land", "Development or redevelopment", "Special situation", "Mixed mandate"],
  },
  {
    name: "objective",
    label: "Income or appreciation objective",
    type: "select",
    required: true,
    options: ["Income-led", "Appreciation-led", "Capital preservation", "Value creation", "Mixed objective"],
  },
  {
    name: "targetHoldPeriod",
    label: "Target hold period",
    type: "select",
    required: true,
    options: ["1 to 3 years", "3 to 5 years", "5 to 10 years", "10 years+", "Flexible"],
  },
  { name: "timing", label: "Timing", type: "text", required: true, placeholder: "Immediate, 3 months, 6 months, exploratory" },
  { name: "existingMandateNotes", label: "Existing mandate notes", type: "textarea", placeholder: "Share constraints, preferred structure, markets to avoid or decision criteria.", fullWidth: true },
  {
    name: "preferredContactMethod",
    label: "Preferred contact method",
    type: "select",
    options: ["Email", "Phone", "WhatsApp", "Introducer-led call"],
  },
];

export const transactionFields: LeadField[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "organisation", label: "Organisation", type: "text", required: true, placeholder: "Owner, developer, adviser, company" },
  { name: "role", label: "Role", type: "text", required: true, placeholder: "Owner, director, authorised representative" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +971 / +44" },
  {
    name: "relationshipToAsset",
    label: "Relationship to asset",
    type: "select",
    required: true,
    options: ["Owner", "Developer", "Family representative", "Authorised adviser", "Intermediary", "Other"],
  },
  {
    name: "transactionType",
    label: "Transaction type",
    type: "select",
    required: true,
    options: ["Sale", "Capital partner", "Joint development", "Partial exit", "Private acquisition", "Other"],
  },
  {
    name: "assetClass",
    label: "Asset class",
    type: "select",
    required: true,
    options: ["Income asset", "Prime residential", "Land", "Development or redevelopment", "Hospitality or mixed-use", "Other"],
  },
  { name: "broadLocation", label: "Broad location", type: "text", required: true, placeholder: "City, corridor or micro-market" },
  { name: "indicativeValue", label: "Indicative value", type: "text", required: true, placeholder: "Approximate value or expected ticket size" },
  { name: "transactionObjective", label: "Transaction objective", type: "textarea", required: true, placeholder: "What outcome are you seeking and why now?", fullWidth: true },
  {
    name: "confidentialityLevel",
    label: "Confidentiality level",
    type: "select",
    required: true,
    options: ["Highly confidential", "Limited circulation", "Can discuss selectively", "Exploratory"],
  },
  { name: "timeline", label: "Timeline", type: "text", required: true, placeholder: "Immediate, 3 months, 6 months, no fixed timeline" },
  { name: "shortDescription", label: "Short description", type: "textarea", placeholder: "Add the minimum useful context. Do not upload documents here.", fullWidth: true },
];

export const memorandumFields: LeadField[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "companyOrFamilyOffice", label: "Company / family office", type: "text", required: true, placeholder: "Entity or family office name" },
  { name: "role", label: "Role", type: "text", required: true, placeholder: "Principal, CIO, founder, adviser" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +971 / +44" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "City and country" },
  {
    name: "indicativeCapitalRange",
    label: "Indicative capital range",
    type: "select",
    required: true,
    options: ["INR 25 Cr to 50 Cr", "INR 50 Cr to 100 Cr", "INR 100 Cr to 250 Cr", "INR 250 Cr to 500 Cr", "INR 500 Cr+"],
  },
  { name: "transactionReference", label: "Transaction reference", type: "text", required: true, placeholder: "If shared privately, add reference name or context" },
  { name: "reasonForInterest", label: "Reason for interest", type: "textarea", required: true, placeholder: "Briefly explain capital fit, geography, asset class and timing.", fullWidth: true },
  { name: "existingRelationship", label: "Existing Hacoco relationship", type: "text", placeholder: "Introducer, prior conversation or none" },
  { name: "adviserDetails", label: "Adviser details", type: "text", placeholder: "If represented by an adviser, mention firm/name" },
];

export type CapitalFormKind = "deploy" | "transaction" | "memorandum";

export const capitalFormCopy: Record<
  CapitalFormKind,
  {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successTitle: string;
    successMessage: string;
    fields: LeadField[];
  }
> = {
  deploy: {
    eyebrow: "Deploy Capital",
    title: "Share a private capital mandate",
    description:
      "For principals and advisers reviewing larger real estate allocations. A clear mandate helps us decide what deserves a private conversation.",
    submitLabel: "Submit Capital Mandate",
    successTitle: "Capital mandate received",
    successMessage:
      "Hacoco Capital will review the mandate and respond only with a relevant next step.",
    fields: deployCapitalFields,
  },
  transaction: {
    eyebrow: "Discuss A Transaction",
    title: "Share an opportunity confidentially",
    description:
      "For owners, developers and authorised representatives who want to discuss a sale, capital partner, partial exit or private real estate transaction.",
    submitLabel: "Discuss Transaction",
    successTitle: "Transaction brief received",
    successMessage:
      "The brief has been received. Hacoco Capital will review fit and confidentiality before any next step.",
    fields: transactionFields,
  },
  memorandum: {
    eyebrow: "Request Memorandum",
    title: "Request access to private materials",
    description:
      "Use this only when a transaction has been referenced privately. Documents are not collected or distributed through this public form.",
    submitLabel: "Request Memorandum",
    successTitle: "Memorandum request received",
    successMessage:
      "Your request has been logged for review. Access is subject to fit, permission and confidentiality.",
    fields: memorandumFields,
  },
};
