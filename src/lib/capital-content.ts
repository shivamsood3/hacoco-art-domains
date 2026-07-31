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
    maySuit:
      "Family offices, founders, UHNI buyers, NRI principals and advisers with a defined purchase thesis rather than a general property search.",
    valueDriver:
      "Scarcity, replacement value, seller context, transaction evidence and future liquidity.",
    diligence:
      "Title, ownership authority, comparable transactions, access, possession, tax and legal review, and the credibility of the seller's timeline.",
    misconception:
      "Private does not automatically mean better. A private opportunity still has to justify price, documentation risk and exit logic.",
    decline:
      "Hacoco may decline where the buyer mandate is vague, the seller is not authorised, pricing is unsupported or the asset requires public marketing rather than a private process.",
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
    maySuit:
      "Capital seeking income visibility, a defined lease profile and a clearer view of downside than a pure appreciation-led purchase.",
    valueDriver:
      "Contracted cash flow, tenant durability, lease structure, escalation, operating cost discipline and exit yield.",
    diligence:
      "Lease, tenant credit, WALE, vacancy, deposits, lock-in, escalation, outgoings, building condition, compliance and likely buyer depth at exit.",
    misconception:
      "A higher headline yield is not always a better investment. It may simply be compensation for weaker income, shorter certainty or poorer liquidity.",
    decline:
      "Hacoco may decline where rent is overstated, lease documents are unclear, tenant replacement is weak or the asset is priced as if risk does not exist.",
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
    maySuit:
      "Owners, developers and capital partners reviewing redevelopment, collaboration, repositioning or value-creation transactions.",
    valueDriver:
      "Residual land value, permitted area, construction cost, absorption, partner capability and timing.",
    diligence:
      "Title, planning, approvals, saleable area, cost plan, contingency, market absorption, developer track record and exit route.",
    misconception:
      "A higher proposed built-up area does not create value if permissions, cost, timeline or demand assumptions are fragile.",
    decline:
      "Hacoco may decline where control is fragmented, approvals are unrealistic, economics depend on best-case pricing or the proposed partner lacks capability.",
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
    maySuit:
      "Patient capital, owners and developers evaluating strategic holding, aggregation, infrastructure adjacency or future-use optionality.",
    valueDriver:
      "Title clarity, access, frontage, permitted use, infrastructure assumptions, aggregation potential and future buyer logic.",
    diligence:
      "Revenue records, title chain, mutation, encumbrances, zoning, land use, road access, boundaries, litigation, approvals and local execution risk.",
    misconception:
      "Cheap price per acre can be expensive if title, access, land use or exit liquidity are weak.",
    decline:
      "Hacoco may decline where title cannot be reviewed, boundaries are unclear, access is dependent on informal arrangements or the thesis is only corridor speculation.",
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
    maySuit:
      "Capital and owners comfortable with complex timing, succession, distress, partner exit, incomplete execution or restructuring-led real estate situations.",
    valueDriver:
      "Complexity, mispricing, timing pressure, documentation clarity and the ability to solve a specific transaction problem.",
    diligence:
      "Ownership, authority, liabilities, documentation gaps, counterparty incentives, timing, litigation, financing position and execution sequence.",
    misconception:
      "Complex does not mean undervalued. Some complexity only reduces the probability of closing.",
    decline:
      "Hacoco may decline where the situation is unclear, parties are not aligned, documents are incomplete or value depends on pressure rather than a credible solution.",
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
    maySuit:
      "Owners, families, developers and corporates considering a sale, partial exit or capital partner without broad public exposure.",
    valueDriver:
      "Preparation quality, buyer qualification, pricing evidence, information control and negotiation discipline.",
    diligence:
      "Ownership authority, asset facts, title position, tenancy or possession, pricing support, likely buyer universe and disclosure boundaries.",
    misconception:
      "More circulation does not always create more value. For large assets, weak or premature circulation can reduce leverage.",
    decline:
      "Hacoco may decline where the owner is not aligned, price expectations cannot be supported or the transaction requires mass brokerage rather than private preparation.",
  },
] as const;

export const strategyComparison = [
  {
    strategy: "Private Acquisitions",
    driver: "Scarcity and entry quality",
    matters: "Replacement value, seller context, title, transaction evidence and liquidity",
    diligence: "Ownership authority, title, pricing support, access, possession and exit depth",
    risk: "Overpaying for privacy or weak documentation",
    counterparty: "Principal buyer, family office, owner, authorised adviser",
    horizon: "Acquisition-led, hold period varies by mandate",
  },
  {
    strategy: "Income Assets",
    driver: "Contracted cash flow",
    matters: "Tenant, lease, WALE, escalation, operating costs and exit yield",
    diligence: "Lease review, tenant quality, vacancy, compliance and capex",
    risk: "Income interruption or repricing",
    counterparty: "Investor, owner, corporate occupier, family office",
    horizon: "Hold-led, with exit underwritten from day one",
  },
  {
    strategy: "Development & Redevelopment",
    driver: "Value creation",
    matters: "Residual land value, approvals, cost, saleable area and absorption",
    diligence: "Title, planning, construction cost, contingency and partner capability",
    risk: "Execution and market timing",
    counterparty: "Owner, developer, capital partner",
    horizon: "Transaction or project-led",
  },
  {
    strategy: "Land",
    driver: "Strategic optionality",
    matters: "Title, access, permitted use, frontage and infrastructure assumptions",
    diligence: "Revenue records, land use, boundaries, encumbrances and exit liquidity",
    risk: "Illiquidity and planning uncertainty",
    counterparty: "Owner, aggregator, developer, patient capital",
    horizon: "Longer duration",
  },
  {
    strategy: "Special Situations",
    driver: "Complexity or mispricing",
    matters: "Counterparty alignment, documentation, timing and path to control",
    diligence: "Ownership, liabilities, legal review, consent and execution sequence",
    risk: "Execution failure",
    counterparty: "Owner, lender, partner, family office, developer",
    horizon: "Event-led",
  },
  {
    strategy: "Private Disposition Advisory",
    driver: "Preparation and buyer qualification",
    matters: "Pricing evidence, disclosure boundaries, buyer universe and negotiation sequence",
    diligence: "Ownership authority, title, asset facts, buyer qualification and process control",
    risk: "Weak circulation damaging price discovery",
    counterparty: "Owner, family, developer, corporate, qualified buyer",
    horizon: "Sale or capital-partner process",
  },
] as const;

export const transactionDesk = {
  title: "Current Transaction Desk",
  description:
    "Active opportunities are shared only when there is a genuine mandate, suitable counterparty fit and permission to discuss details. Public examples are intentionally limited.",
  emptyState:
    "No public transaction memoranda are currently open. Qualified counterparties may contact the Private Desk to discuss current requirements.",
};

export const activeCapitalMandates = {
  title: "Active Capital Mandates",
  description:
    "Hacoco Capital maintains live conversations with private capital only where mandate, ticket size, market and risk appetite are clear enough to act.",
  emptyState:
    "Active capital requirements are selectively disclosed where doing so may help identify a suitable opportunity.",
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
    title: "Mandate Fit",
    copy:
      "Whether the transaction matches ticket size, hold period, income need, appreciation objective and execution complexity.",
  },
] as const;

export const underwritingFramework = [
  {
    title: "Income asset",
    items: ["NOI", "Tenant quality", "Lease expiry", "Escalation", "Operating costs", "Vacancy", "Exit yield"],
  },
  {
    title: "Development",
    items: ["Residual land value", "Approvals", "Construction cost", "Saleable area", "Absorption", "Contingency", "Developer capability"],
  },
  {
    title: "Land",
    items: ["Title", "Land use", "Access", "Frontage", "Planning", "Infrastructure assumptions", "Exit liquidity"],
  },
  {
    title: "Private acquisition",
    items: ["Scarcity", "Replacement value", "Seller context", "Transaction evidence", "Title", "Liquidity"],
  },
] as const;

export const howCapitalWorks = [
  {
    title: "Originate",
    copy: "Understand the asset, capital requirement, counterparty and objective.",
  },
  {
    title: "Assess",
    copy: "Review economics, title, documentation, market evidence and transaction fit.",
  },
  {
    title: "Prepare",
    copy: "Develop the transaction narrative, key materials and qualification criteria.",
  },
  {
    title: "Match",
    copy: "Approach suitable capital, assets or counterparties selectively.",
  },
  {
    title: "Execute",
    copy: "Support introductions, diligence, negotiation and transaction progression.",
  },
] as const;

export const leadership = [
  {
    name: "Shivam Sood",
    role: "Founder / Private Transactions",
    focus:
      "Leads Hacoco's private client and counterparty conversations across real estate acquisition, capital and transaction mandates.",
    linkedIn: "https://www.linkedin.com/in/shivamso/",
  },
] as const;

export const capitalInsights = [
  {
    slug: "private-real-estate-capital-needs-a-mandate-before-a-market",
    title: "Private real estate capital needs a mandate before a market",
    description:
      "Why serious buyers should define ticket size, hold period, risk tolerance and execution constraints before reviewing private real estate opportunities.",
    minutes: "3 min read",
    category: "Underwriting",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "A private real estate mandate should define risk, liquidity, time and documentation thresholds before sourcing begins.",
    body: [
      "Large private real estate transactions rarely fail because the buyer did not see enough options. They fail because the buyer saw too many unqualified options before the mandate was precise. A mandate is not a wishlist. It is a decision framework. It defines what kind of risk the capital is allowed to take, how long it can remain illiquid, what level of documentation comfort is required and what would make the opportunity unacceptable even if the address looks attractive.",
      "For family offices and founder capital, this matters because real estate is often emotional and operational at the same time. A home can also be a store of capital. A commercial asset can appear income-led while hiding vacancy or capex risk. A land parcel can look inexpensive while carrying time, access and title complexity. Without a mandate, every asset begins to look plausible. With a mandate, most assets are rejected quickly.",
      "Hacoco Capital starts with the capital brief because it protects time. The brief should cover ticket size, geography, asset class, income versus appreciation objective, target hold period, funding route, decision timeline and documentation thresholds. Only after that does sourcing become useful. The goal is not volume. The goal is a smaller universe of opportunities that can survive first-principles questioning.",
      "This is also where the distinction between Invest With Hacoco and Hacoco Capital matters. Invest With Hacoco is built for acquisition discovery across specific residential, land and global entry routes. Hacoco Capital is built for larger, more private transactions where capital and opportunity must be matched carefully, often before either side wants visibility.",
      "A good mandate should also state what the buyer will not do. Exclusions are useful because they prevent drift. If the capital will not accept fragmented ownership, short lease visibility, unclear access, speculative land-use change or long approval dependency, those limits should be written down before opportunities arrive.",
      "The practical output is a decision memo, not a wish list. The memo should define the role of the allocation, the acceptable evidence threshold and the next action if an asset passes initial review. This protects the buyer from momentum and protects the seller from conversations with capital that was never likely to proceed.",
    ],
  },
  {
    slug: "what-a-private-real-estate-transaction-memorandum-should-answer",
    title: "What a private real estate transaction memorandum should answer",
    description:
      "The practical questions a memorandum should address before an investor, owner or capital partner spends time on a private transaction.",
    minutes: "3 min read",
    category: "Private Transactions",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "A memorandum should make a private transaction easier to qualify, not simply easier to circulate.",
    body: [
      "A private memorandum is not marketing decoration. It should help a qualified counterparty decide whether the transaction deserves a serious conversation. That means it must answer the questions that matter early: what is the asset, who controls it, what is the proposed transaction, what is known, what is unknown and what must be verified independently.",
      "In a private real estate situation, a good memorandum should describe the location, title position, current use, tenancy or possession status, development potential, pricing logic, expected timeline and the reason the transaction exists. It should also be honest about constraints. If approvals are pending, access is imperfect, tenancy is complex or family consent is required, those issues should not be hidden until diligence.",
      "For capital, the memorandum should make the risk visible enough to decide whether to proceed. For owners, it should protect confidentiality while making the opportunity credible. For intermediaries, it should prevent a weak first conversation with the wrong buyer. The best private processes do not begin with mass circulation. They begin with controlled information and qualified recipients.",
      "Hacoco Capital does not publish memoranda publicly. When a transaction is suitable for discussion, details are shared with qualified counterparties after context, permission and confidentiality expectations are clear.",
      "The strongest memoranda are specific about what is confirmed and what remains subject to review. That distinction matters. A buyer can tolerate open diligence points if they are named early. What damages trust is discovering late that a core assumption was only verbal, incomplete or dependent on a third party consent.",
      "For an owner, the memorandum also sets the tone of the process. It should qualify the buyer, reduce repeated questions and prevent inconsistent summaries from circulating through the market. The document is not meant to replace diligence. It is meant to earn the right diligence conversation.",
    ],
  },
  {
    slug: "income-assets-why-wale-can-matter-more-than-headline-yield",
    title: "Income assets: why WALE can matter more than headline yield",
    description:
      "Why rent durability, tenant quality, lease expiry and exit yield can matter more than the first yield number a buyer sees.",
    minutes: "3 min read",
    category: "Income Assets",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "Headline yield is useful only after the buyer understands how long the income may last and what the next buyer will underwrite.",
    body: [
      "A quoted yield is only a starting point. Serious capital needs to know the quality of that income, the durability of the tenant, the enforceability of lease terms, the replacement depth in that micro-market and the capital expenditure likely to be required over the hold period.",
      "The most common mistake is comparing income assets only by headline return. Two assets can show similar yield while carrying very different risk. One may have a strong tenant, clean documentation and a location with future buyer depth. Another may have short lease visibility, building condition issues, concentrated tenant risk and weak resale liquidity. The yield number alone does not capture that difference.",
      "A disciplined review looks at lease lock-in, escalation, deposit, outgoings, vacancy assumptions, fit-out obligations, maintenance liabilities, compliance and the probability of selling the asset to the next buyer. Income is valuable when it is durable. It is less valuable when it compensates the buyer for risks they have not understood.",
      "Hacoco Capital treats income assets as transactions, not coupons. The question is not only what rent is being received today. The better question is whether the capital has been paid adequately for the risks it is accepting.",
      "WALE is useful because it connects income to time. A short WALE does not automatically make an asset weak, but it changes the buyer's margin of safety. The investor must ask what happens if the lease is not renewed, whether the space can be re-let quickly and how much capital is required to restore income.",
      "The buyer should also underwrite the next buyer. If the asset will be resold with shorter lease visibility, the exit yield may widen. That can erase years of income if entry pricing assumes certainty that will not exist at exit.",
    ],
  },
  {
    slug: "south-delhi-redevelopment-residual-land-value",
    title: "South Delhi redevelopment: why residual land value matters",
    description:
      "How redevelopment conversations should move beyond asking price and into residual land value, permissions, cost, absorption and partner capability.",
    minutes: "3 min read",
    category: "Development",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "The seller's asking price is only one input. Residual land value is where a redevelopment transaction begins to show whether it can work.",
    body: [
      "Redevelopment is often discussed as if the asset value is obvious because the address is strong. In practice, the address is only the starting point. The transaction depends on what can legally and commercially be created, how long that creation may take, what it may cost and whether the completed product has a credible buyer or occupier market.",
      "Residual land value forces discipline. It starts with the expected end value, subtracts construction cost, approvals, finance, contingency, marketing, taxes, partner economics and required margin. What remains is the amount the project can rationally support for land or owner consideration. If the seller expectation is materially above that number, the project may still be desirable, but it is not economically prepared.",
      "In South Delhi, redevelopment is particularly sensitive because plots, lanes, parking, floor configurations, collaboration terms and buyer expectations vary sharply. Two assets in the same colony can produce very different economics. The underwriting has to move from address-level excitement to asset-level math.",
      "Hacoco's view is that redevelopment conversations should begin with title, control, permissions, cost and buyer depth. Only then should parties debate price. If the economics cannot survive a conservative residual value review, wider circulation will not fix the transaction.",
      "The biggest mistake is treating redevelopment as a simple premium over current use. The transaction has to absorb time, disruption, approvals, construction risk, sales risk and partner economics. If those costs are understated, the headline land value becomes fictional.",
      "A serious review should include multiple exit cases. The base case should not depend on peak pricing, perfect absorption or zero delay. If the project still works under a more conservative sale price, longer timeline and higher contingency, the transaction deserves further discussion.",
    ],
  },
  {
    slug: "commercial-property-lease-expiry-and-price",
    title: "Commercial property: how lease expiry changes price",
    description:
      "Why the same rent can imply different values depending on lease expiry, tenant replacement depth, escalation and buyer exit assumptions.",
    minutes: "3 min read",
    category: "Income Assets",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "A lease with weak remaining certainty should not be priced like a lease with durable income visibility.",
    body: [
      "Commercial real estate is often sold on rent and yield. The missing question is how much of that rent is durable. Lease expiry changes the price because it changes the buyer's certainty. A tenant with two years of visibility, unclear renewal economics or significant replacement risk is not the same as a tenant with longer contractual comfort and a deeper occupier market.",
      "The underwriting should examine expiry, lock-in, escalation, deposits, tenant obligations, operating costs, fit-out ownership and the cost of vacancy. If the tenant leaves, the buyer needs to know who replaces them, at what rent, after how many months and with what capital expenditure.",
      "Exit matters as much as entry. The next buyer will also review lease certainty. If the asset is likely to be sold near lease expiry, the exit yield may widen and the buyer may lose value even if the current rent looks attractive.",
      "Hacoco's view is direct: lease expiry is not a footnote. It is a pricing input. Any income asset discussion that starts with yield but ignores expiry is incomplete.",
      "A buyer should model at least three cases: renewal at current economics, renewal at a lower effective rent and vacancy followed by re-letting. The difference between those cases is often the real risk premium.",
      "Lease expiry also affects negotiation. If the seller is pricing the asset as stable but the buyer is inheriting near-term renewal risk, the buyer should either seek a lower price, stronger protections or a clearer route to income replacement.",
    ],
  },
  {
    slug: "land-title-access-permitted-use-price-per-acre",
    title: "Land: why title, access and permitted use can outweigh price per acre",
    description:
      "A transaction note on land where cheap entry can become expensive if title, road access, land use or exit liquidity are weak.",
    minutes: "3 min read",
    category: "Land",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "Price per acre is not the investment case. Title, access, permitted use and exit liquidity decide whether the land can actually perform.",
    body: [
      "Land attracts capital because it appears simple. There is no tenant to manage, no fit-out to review and no building to maintain. That simplicity is misleading. Land can carry some of the hardest real estate risk because the buyer is underwriting what may happen in the future while accepting illiquidity today.",
      "The first filter is title. Revenue records, mutation, encumbrances, litigation, family consent, land ceiling, zoning and permitted use must be reviewed by qualified professionals. The second filter is access. A parcel without reliable road access or frontage may trade at a discount for a reason. The third filter is future use. If the exit depends on a policy change, infrastructure assumption or speculative buyer, that risk must be priced.",
      "Price per acre becomes meaningful only after these filters are passed. A higher-priced parcel with clean title, usable access and realistic exit demand can be safer than a cheaper parcel where every future step depends on uncertainty.",
      "Hacoco's view is that land should be underwritten backwards from the exit. If the future buyer, use case and route to liquidity are unclear, patience alone is not an investment strategy.",
      "Land also needs operational diligence. Boundaries, approach roads, drainage, local disputes, possession, utility access and on-ground seller authority can matter as much as the document set. A parcel that looks clean on a map can become difficult if physical control is weak.",
      "The buyer should define the likely future user before purchase. A developer, warehouse operator, resort buyer, farmer, institution and local end user all value different attributes. Without a future user, price per acre is just a number.",
    ],
  },
  {
    slug: "private-dispositions-uncontrolled-circulation",
    title: "Private dispositions: why uncontrolled circulation can weaken a large property transaction",
    description:
      "Why owners of large assets should prepare buyer qualification, pricing logic and disclosure boundaries before broad circulation.",
    minutes: "3 min read",
    category: "Private Transactions",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "Large transactions do not close simply because more people see them. They close when the opportunity is properly prepared and reaches the right counterparty.",
    body: [
      "For a large property owner, exposure can feel like progress. More calls, more messages and more circulated teasers can create the impression of momentum. The problem is that uncontrolled circulation can weaken the process. Buyers receive incomplete information, intermediaries repeat inconsistent numbers and the market starts to treat the asset as tired before a qualified conversation has even happened.",
      "A private disposition should begin with preparation. The owner needs clarity on price logic, title position, tenancy or possession, intended structure, disclosure boundaries and who is authorised to speak. The buyer universe should be defined before the asset is circulated.",
      "The strongest private processes are not silent. They are selective. The right counterparties receive enough information to judge relevance, and the wrong counterparties never enter the conversation.",
      "Hacoco's view is that confidentiality has commercial value only when it is paired with preparation. Secrecy alone does not create price. A prepared process can protect leverage, reduce noise and improve the probability of a serious conversation.",
      "Before any outreach, the owner should decide what can be disclosed, what requires an NDA or private conversation and who has authority to negotiate. This prevents the asset from being described differently by different people.",
      "Buyer qualification should happen before detailed disclosure. A serious buyer should have the mandate, capital capacity, decision process and reason for interest to justify access to more information.",
    ],
  },
  {
    slug: "special-situations-complexity-value-risk",
    title: "Special situations: when complexity creates value and when it only creates risk",
    description:
      "A framework for separating real estate complexity that may create entry advantage from complexity that simply makes execution weaker.",
    minutes: "3 min read",
    category: "Special Situations",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "Complexity is investable only when it can be understood, documented and solved within a credible transaction path.",
    body: [
      "Special situations can attract capable capital because complexity may reduce competition. The opportunity may involve timing pressure, succession, partner exit, incomplete execution, debt, litigation context or a seller that needs certainty. But complexity is not the same as value. Sometimes it is only a warning that the transaction cannot close cleanly.",
      "The first question is whether the complexity is soluble. If the issue is documentation, consent, timing or counterparty alignment, it may be possible to structure a path. If the issue is unclear ownership, disputed authority, unrealistic expectations or incomplete facts, the discount may not be enough.",
      "Special situations require sharper sequencing. The buyer should know what must be verified before exclusivity, what must be solved before capital moves and what condition would end the discussion.",
      "Hacoco's view is that complexity should be paid for only when the solution is visible. If the solution is vague, the transaction is not special. It is simply risky.",
      "The underwriting should separate solvable complexity from permanent impairment. A documentation gap may be solvable. A disputed authority position may not be. A timing issue may create opportunity. A consent problem may prevent closing entirely.",
      "Good special-situation investing is less about boldness and more about sequence. The buyer should identify the order in which risks must fall away and refuse to move capital before the critical risks are resolved or properly priced.",
    ],
  },
  {
    slug: "tenant-quality-income-durability",
    title: "Tenant quality: assessing income durability beyond the brand name",
    description:
      "Why tenant brand, sector, premises relevance, lease behaviour and replacement market all matter in income asset underwriting.",
    minutes: "3 min read",
    category: "Income Assets",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "A recognised tenant name helps, but income durability depends on much more than brand familiarity.",
    body: [
      "A strong tenant name can make an income asset feel safe. It is useful, but it is not enough. The buyer needs to understand why the tenant occupies the asset, whether the premises are important to their operations, how the lease is structured and whether the rent is sustainable in that market.",
      "Tenant quality should be reviewed through business stability, sector exposure, payment behaviour, security deposit, lease obligations, fit-out investment, renewal incentives and replacement demand. A famous tenant in the wrong location or with a short remaining term may still leave the buyer exposed.",
      "Replacement is the real test. If the current tenant leaves, how many comparable occupiers exist, what rent would they pay and what downtime or capex would be required?",
      "Hacoco's view is that tenant quality is a durability question, not a branding question. The rent is only as valuable as the probability that it continues or can be replaced on acceptable terms.",
      "A strong tenant in a weak building can still create risk. If the premises are inefficient, expensive to operate or difficult to replace, the tenant's brand may hide asset-level fragility.",
      "The buyer should ask why the tenant is there and why they would stay. Location relevance, fit-out investment, operational dependence and alternatives in the same micro-market all shape income durability.",
    ],
  },
  {
    slug: "exit-liquidity-underwrite-backwards",
    title: "Exit liquidity: underwrite large-ticket real estate backwards",
    description:
      "Why private capital should define the likely future buyer, financing environment and resale narrative before acquiring a large asset.",
    minutes: "3 min read",
    category: "Underwriting",
    published: "2026-07-30",
    updated: "2026-07-30",
    thesis:
      "A large real estate asset should be underwritten from the exit backwards, not only from the entry price forward.",
    body: [
      "Large-ticket real estate can look attractive at entry because supply is scarce and negotiation feels proprietary. The harder question is who buys it next. Exit liquidity is not a generic market condition. It is specific to asset size, ticket, location, title, tenancy, use case and the future buyer pool.",
      "Underwriting backwards means asking who the next buyer is, what they will care about, what financing or internal approval they may need and what might make the asset harder to sell. A family buyer, developer, institution and owner-occupier all look at risk differently.",
      "If the future buyer universe is narrow, the entry price must compensate for that. If the future buyer universe is deep, the asset may deserve a different conversation. Either way, exit cannot be postponed until the sale.",
      "Hacoco's view is that every private acquisition should carry an exit memo, even if the capital intends to hold for a long time. Long hold does not remove liquidity risk. It only delays the moment when that risk becomes visible.",
      "An exit memo should identify likely buyer groups, likely objections and the conditions under which the asset becomes harder to sell. It should also ask whether the asset can be divided, leased, repositioned or otherwise made more liquid if the preferred exit is not available.",
      "The best time to solve exit questions is before entry. Once capital has moved, the buyer's flexibility is lower and the market's objections become more expensive to fix.",
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
  { name: "reasonForInterest", label: "Reason for interest", type: "textarea", required: true, placeholder: "Briefly explain geography, asset class, timing and why the transaction is relevant.", fullWidth: true },
  {
    name: "privacyAcknowledgement",
    label: "Consent and privacy acknowledgement",
    type: "select",
    required: true,
    options: ["I consent to be contacted and understand sensitive documents should not be sent through this form"],
  },
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
