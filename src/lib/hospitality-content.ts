import type { FaqItem } from "./site-config";

export type HospitalityService = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  idealFor: string;
  scope: string[];
  diligence: string[];
  outcomes: string[];
  faq: FaqItem[];
};

export const hospitalityAssetTypes = [
  "Economy, midscale, upscale and luxury hotels",
  "Boutique hotels, resorts and business hotels",
  "Serviced apartments and hospitality-led mixed-use assets",
  "Operating hotels, incomplete projects and redevelopment opportunities",
];

export const hospitalityFaq: FaqItem[] = [
  {
    question: "Does Hacoco Capital advise hotel buyers and hotel sellers?",
    answer:
      "Yes. Hacoco Capital supports both sides of selected hotel transactions: acquisition mandates for qualified buyers and sell-side or disposition mandates for owners, promoters and authorised advisers.",
  },
  {
    question: "Does Hacoco work on greenfield and brownfield hotel projects?",
    answer:
      "Yes. The desk can help assess greenfield development, brownfield acquisition, incomplete projects, repositioning and redevelopment situations, subject to mandate fit and the availability of credible information.",
  },
  {
    question: "What hotel sizes does Hacoco cover?",
    answer:
      "The work is mandate-led rather than restricted to one key count. Hacoco may review boutique, limited-service, full-service, resort and larger hotel opportunities where the transaction case and counterparty are credible.",
  },
  {
    question: "Does Hacoco provide a formal hotel valuation?",
    answer:
      "Hacoco can support valuation framing, feasibility review, transaction benchmarking and commercial underwriting. A formal statutory, lender or regulatory valuation should be completed by an appropriately qualified independent professional where required.",
  },
  {
    question: "What does on-ground hotel advisory include?",
    answer:
      "On-ground support can include site review coordination, local market context, operator and consultant coordination, document follow-up, execution tracking and transaction issue escalation. The exact scope is agreed for each mandate.",
  },
];

export const hospitalityServices: HospitalityService[] = [
  {
    slug: "hotel-acquisitions",
    eyebrow: "Buy-side hospitality",
    title: "Hotel Acquisition Advisory",
    summary:
      "Mandate-led sourcing and underwriting for investors, family offices, operators and strategic buyers evaluating hotel acquisitions in selected Indian markets.",
    metaTitle: "Hotel Acquisition Advisory in India | Hacoco Capital",
    metaDescription:
      "Hacoco Capital advises hotel buyers on sourcing, screening, underwriting, diligence and transaction execution across operating hotels, resorts and hospitality assets.",
    intro:
      "A hotel acquisition is an operating business, a real estate decision and a local market bet at the same time. Hacoco Capital helps buyers keep those three questions connected from the first brief through transaction progression.",
    idealFor:
      "Family offices, hotel operators, strategic buyers, developers, institutional capital and private investors with a defined acquisition thesis.",
    scope: [
      "Acquisition strategy, target profile and geography definition",
      "Off-market and private opportunity origination where authorised",
      "Initial operating, real estate and counterparty screening",
      "Commercial underwriting, information organisation and bid support",
      "Coordination with legal, technical, tax, valuation and hospitality specialists",
    ],
    diligence: [
      "Historical and stabilised operating performance",
      "Room mix, ADR, occupancy, RevPAR and seasonality",
      "Operator, franchise, lease or management agreement terms",
      "Title, approvals, land use, licences, building condition and capex",
      "Competitive supply, demand drivers, exit liquidity and downside cases",
    ],
    outcomes: [
      "A clearer acquisition brief and screening filter",
      "A structured view of commercial and asset-level risks",
      "A more prepared conversation with owners, operators and advisers",
    ],
    faq: [hospitalityFaq[0], hospitalityFaq[2]],
  },
  {
    slug: "hotel-sales",
    eyebrow: "Sell-side hospitality",
    title: "Hotel Sales & Disposition Advisory",
    summary:
      "Discreet preparation and qualified buyer access for hotel owners, promoters and stakeholders considering a sale, partial exit or strategic disposition.",
    metaTitle: "Hotel Sale & Disposition Advisory | Hacoco Capital",
    metaDescription:
      "Hacoco Capital advises hotel owners on sale preparation, buyer positioning, valuation framing, confidential outreach and transaction progression for hospitality assets.",
    intro:
      "A successful hotel sale is rarely just a listing exercise. It depends on the quality of the information, the credibility of the operating story, the seller's timing and access to buyers who can actually execute.",
    idealFor:
      "Hotel owners, promoters, family businesses, lenders, shareholders and authorised advisers considering a full sale, stake sale, asset sale or structured exit.",
    scope: [
      "Sale-readiness review and transaction objective definition",
      "Buyer universe mapping and confidential approach strategy",
      "Asset narrative, data-room checklist and information sequencing",
      "Valuation framing, pricing discussion and bid comparison",
      "Negotiation support and coordination through diligence and closing",
    ],
    diligence: [
      "Ownership, authority and transaction structure",
      "Operating history, budgets, capex and working capital needs",
      "Hotel licences, approvals, employment and vendor obligations",
      "Operator, franchise, lease, brand and management agreements",
      "Buyer capability, funding credibility and execution timeline",
    ],
    outcomes: [
      "A more credible and usable seller package",
      "Better separation between strategic buyers and casual enquiries",
      "A controlled process that protects confidentiality and optionality",
    ],
    faq: [hospitalityFaq[0]],
  },
  {
    slug: "hotel-development",
    eyebrow: "Greenfield & brownfield",
    title: "Hotel Development Advisory",
    summary:
      "Commercial and transaction advice for greenfield hotel development, brownfield acquisition, incomplete projects, repositioning and redevelopment.",
    metaTitle: "Greenfield & Brownfield Hotel Development Advisory | Hacoco Capital",
    metaDescription:
      "Hacoco Capital advises on greenfield and brownfield hotel development, redevelopment, feasibility, operator strategy, project positioning and transaction readiness.",
    intro:
      "Greenfield and brownfield hotel projects require different questions. A greenfield case is built around land, approvals, concept, cost and demand. A brownfield case adds the operating history, physical condition, contracts and inherited liabilities of an existing asset.",
    idealFor:
      "Landowners, developers, hotel companies, family offices and capital partners assessing a new build, conversion, expansion or repositioning opportunity.",
    scope: [
      "Concept, positioning and market-demand framing",
      "Greenfield land and brownfield asset screening",
      "Development budget, phasing and capital requirement review",
      "Operator, brand, management and partnership strategy",
      "Project risk register, transaction structure and execution sequencing",
    ],
    diligence: [
      "Land title, access, zoning, permitted use and approvals path",
      "Existing building condition, backlog capex and conversion constraints",
      "Construction cost, contingency, timeline and procurement assumptions",
      "Demand generators, competitive supply and seasonality",
      "Exit, refinance, operator and stabilisation scenarios",
    ],
    outcomes: [
      "A decision-ready feasibility and project brief",
      "A clearer distinction between development upside and execution risk",
      "A better-prepared basis for operator, capital or buyer conversations",
    ],
    faq: [hospitalityFaq[1], hospitalityFaq[2]],
  },
  {
    slug: "hotel-ma",
    eyebrow: "Corporate and strategic transactions",
    title: "Hotel M&A Advisory",
    summary:
      "Strategic advice for hotel mergers, acquisitions, platform combinations, share sales, portfolio transactions and operator or investor transitions.",
    metaTitle: "Hotel M&A Advisory in India | Hacoco Capital",
    metaDescription:
      "Hacoco Capital provides hotel M&A advisory for strategic acquisitions, share sales, platform combinations, portfolio transactions and operator transitions.",
    intro:
      "Hotel M&A requires more than an asset price. The transaction may include a company, operating platform, brand rights, management agreements, people, debt, pipeline assets or a portfolio strategy. Hacoco helps define what is actually being bought or sold.",
    idealFor:
      "Hotel companies, strategic acquirers, family offices, promoters, shareholders and investors evaluating a corporate or portfolio-level hospitality transaction.",
    scope: [
      "Transaction perimeter and strategic rationale",
      "Buyer or partner identification and confidential outreach",
      "Portfolio, platform and asset-level information organisation",
      "Valuation framing and consideration of structure alternatives",
      "Diligence coordination, negotiation support and execution tracking",
    ],
    diligence: [
      "Shareholding, authority, debt and contingent liabilities",
      "Brand, franchise, management, lease and operator contracts",
      "Portfolio performance, pipeline and capex obligations",
      "Tax, legal, employment, compliance and licensing matters",
      "Integration, transition and post-close operating requirements",
    ],
    outcomes: [
      "A more precise transaction perimeter",
      "A commercial narrative that connects strategy to value",
      "A controlled process for strategic counterparties and advisers",
    ],
    faq: [hospitalityFaq[0]],
  },
  {
    slug: "hotel-valuation",
    eyebrow: "Value and feasibility",
    title: "Hotel Valuation & Feasibility Advisory",
    summary:
      "Commercial valuation framing and feasibility support for hotel acquisitions, development decisions, refinancing, partnerships and exit planning.",
    metaTitle: "Hotel Valuation & Feasibility Advisory | Hacoco Capital",
    metaDescription:
      "Hacoco Capital helps owners and investors frame hotel value, feasibility, operating assumptions, development returns and transaction scenarios with independent specialist support where required.",
    intro:
      "Hotel value is a function of land and building quality, operating performance, brand and operator terms, capital needs, market depth and the credibility of the business plan. We bring those inputs into one commercial decision frame.",
    idealFor:
      "Owners, buyers, developers, lenders, investors and advisers who need a clearer commercial view before committing to a hotel transaction or project.",
    scope: [
      "Revenue, occupancy, ADR, RevPAR and margin assumption review",
      "Comparable transaction, replacement-cost and income approach framing",
      "Greenfield development feasibility and stabilisation scenarios",
      "Brownfield repositioning, capex and operator-change scenarios",
      "Sensitivity analysis around price, cost, timing, leverage and exit",
    ],
    diligence: [
      "Historical accounts, budgets and management reporting",
      "Market demand, competitive set and pipeline supply",
      "Physical condition, capex plan and project delivery assumptions",
      "Operator economics, fees, incentives and contract duration",
      "Independent valuation, legal, tax and technical requirements",
    ],
    outcomes: [
      "A transparent set of operating and value assumptions",
      "A range-based view of upside, downside and break-even conditions",
      "A better basis for negotiation, investment committee or lender review",
    ],
    faq: [hospitalityFaq[3]],
  },
  {
    slug: "hotel-advisory",
    eyebrow: "On-ground execution",
    title: "On-Ground Hotel Advisory",
    summary:
      "Local execution support for hotel owners, buyers and capital partners who need transaction coordination, site context and issue follow-through.",
    metaTitle: "On-Ground Hotel Advisory in India | Hacoco Capital",
    metaDescription:
      "Hacoco Capital provides on-ground hotel advisory for site reviews, local market context, document follow-up, consultant coordination and transaction execution support.",
    intro:
      "Hotel transactions can slow down in the space between the model and the site. On-ground advisory keeps local facts, stakeholders, documents and decisions moving while the client's legal, technical, tax and operating specialists complete their work.",
    idealFor:
      "Remote investors, family offices, owners, developers and transaction teams that need a senior local point of coordination in selected Indian markets.",
    scope: [
      "Site visit planning, local context and issue capture",
      "Coordination with owners, operators, consultants and local stakeholders",
      "Document, approval and action-list follow-up",
      "Transaction timeline, diligence tracker and decision-log support",
      "Pre-close and post-close handover or transition coordination",
    ],
    diligence: [
      "Site access, surrounding development and local demand drivers",
      "Document availability, approval status and open actions",
      "Physical observations requiring specialist technical review",
      "Stakeholder authority, responsiveness and execution dependencies",
      "Local timing, access, procurement and operating constraints",
    ],
    outcomes: [
      "Fewer information gaps between the desk and the asset",
      "A visible action trail across advisers and counterparties",
      "Faster escalation of issues that can change a transaction decision",
    ],
    faq: [hospitalityFaq[4]],
  },
];

export function getHospitalityService(slug: string) {
  return hospitalityServices.find((service) => service.slug === slug);
}
