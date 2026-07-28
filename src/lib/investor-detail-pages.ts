export const investorServicesBasePath = "/services";
export const investorMarketsBasePath = "/markets";

export type InvestorDetailPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  keywords: string[];
  highlights: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const investorServicePages: InvestorDetailPage[] = [
  {
    slug: "off-plan-property-investments",
    eyebrow: "Primary Market",
    title: "Off Plan Property Investments",
    description:
      "Primary investments across Delhi NCR, Goa and Dubai/UAE reviewed through developer quality, RERA or escrow comfort, payment schedule, handover risk and resale depth.",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
      alt: "Modern towers under development",
    },
    keywords: [
      "off plan property investment",
      "Delhi NCR primary property",
      "Dubai off plan property",
      "Goa villa projects",
    ],
    highlights: [
      "Developer and delivery record review",
      "RERA, escrow and title comfort checks",
      "Payment plan and handover risk analysis",
      "Exit and rental depth assessment",
    ],
    sections: [
      {
        heading: "What this service is for",
        body: [
          "Primary and off plan property can be attractive when the entry price, payment schedule and completed-asset demand work together. Hacoco helps buyers separate investable launches from projects that are simply well marketed.",
          "We look at developer credibility, project stage, legal registration, land status, payment plan, construction pace, future supply and resale depth before recommending a serious review.",
        ],
      },
      {
        heading: "How we diligence the opportunity",
        body: [
          "The review starts with the buyer's mandate: geography, ticket size, hold period, yield expectation, currency preference and ability to manage construction risk. From there we compare the project against ready stock, competing launches and future tenant or buyer demand.",
          "A good off plan investment should not depend only on market appreciation. It should make sense as a completed property, with a clear reason why future buyers or tenants will care about that location and product.",
        ],
      },
      {
        heading: "Where investors lose money",
        body: [
          "Most weak primary purchases begin with the wrong comparison set. A payment plan can look attractive against another launch, but the real benchmark is the value of a completed, competing asset in the same micro market.",
          "We review supply coming into the handover window, developer execution record, unit efficiency, floor premium, maintenance load, expected exit pool and whether the buyer is being rewarded enough for accepting construction risk.",
        ],
      },
      {
        heading: "What Hacoco brings to the table",
        body: [
          "Hacoco does not treat Delhi NCR, Goa and Dubai off plan property as one uniform product. Each market has a different regulatory framework, buyer profile, liquidity depth and construction risk.",
          "The output is a short acquisition note: why the project is worth reviewing, what could go wrong, what documents need professional review and which competing options should be seen before capital is committed.",
        ],
      },
    ],
  },
  {
    slug: "south-delhi-prime-homes-builder-floors",
    eyebrow: "South Delhi",
    title: "Prime Homes and Builder Floors",
    description:
      "Filtered South Delhi homes across Defence Colony, Greater Kailash, Vasant Vihar, Anand Niketan, Panchsheel Park and other established colonies.",
    image: {
      src: "/images/investor/jor-bagh.jpeg",
      alt: "Hacoco villa opportunity in Jor Bagh, New Delhi",
    },
    keywords: [
      "South Delhi builder floors",
      "Defence Colony property",
      "Greater Kailash homes",
      "Vasant Vihar real estate",
    ],
    highlights: [
      "Colony and block-level filtering",
      "Title and land-share review coordination",
      "Parking, lift and floor-plan assessment",
      "Negotiation context before site visits",
    ],
    sections: [
      {
        heading: "Why South Delhi needs local judgment",
        body: [
          "South Delhi values are carried by scarcity, address recognition and land-backed ownership. The right floor depends on more than decor. Block, lane width, plot size, parking, construction age, collaboration history and seller intent all matter.",
          "Hacoco builds shortlists around the practical factors that drive livability and resale, not only around what is available in a broker feed.",
        ],
      },
      {
        heading: "What we help buyers compare",
        body: [
          "We help compare ready floors, resale floors, redevelopment-linked assets, bungalows and select land-share opportunities across the colonies that match the buyer's mandate.",
          "The process is especially useful for NRIs and busy local buyers who need fewer but better site visits, cleaner context and a sharper decision framework before capital moves.",
        ],
      },
      {
        heading: "The value is in the block",
        body: [
          "A buyer can overpay for a beautiful finish and still own the wrong floor. South Delhi pricing depends on road width, plot shape, lift and parking quality, construction age, floor height, collaboration structure, entry experience and whether future buyers will trust the lane.",
          "We separate cosmetic value from durable value. Interiors can be changed. Land share, title, approach, parking and neighbourhood quality are harder to repair after purchase.",
        ],
      },
      {
        heading: "How the shortlist is built",
        body: [
          "Hacoco begins with the buyer's non-negotiables, then filters inventory through title comfort, seller seriousness, comparable pricing, redevelopment risk, floor plan utility and resale depth.",
          "The goal is not to flood the buyer with options. It is to reduce the search to a set of homes that deserve inspection, negotiation and professional due diligence.",
        ],
      },
    ],
  },
  {
    slug: "dubai-property-investment",
    eyebrow: "Dubai",
    title: "Dubai Property Investment",
    description:
      "Dubai and UAE property shortlists across off plan projects, ready income assets, villa communities, branded residences and family-led long-hold opportunities.",
    image: {
      src: "/images/investor/dubai-marina.jpg",
      alt: "Dubai Marina residential towers and waterfront",
    },
    keywords: [
      "Dubai property investment",
      "UAE real estate investment",
      "Dubai off plan",
      "Dubai rental yield",
    ],
    highlights: [
      "Ready versus off plan comparison",
      "Developer and community selection",
      "Yield, service charge and exit review",
      "Residency and currency context",
    ],
    sections: [
      {
        heading: "The Dubai mandate",
        body: [
          "Dubai can serve several purposes: rental income, currency diversification, family use, residency planning, business presence and global liquidity. Each purpose points to a different shortlist.",
          "Hacoco helps buyers compare communities, developers, payment schedules, ready stock and future supply so the investment is not driven only by launch momentum.",
        ],
      },
      {
        heading: "What we watch closely",
        body: [
          "The strongest Dubai assets tend to combine credible location, developer delivery, tenant demand, manageable service charges and a clear resale pool. We pressure test these before treating a project as suitable.",
          "For Indian buyers, we also account for currency exposure, remittance planning, future use, professional tax advice and whether a purchase should sit alongside free zone setup or a wider UAE plan.",
        ],
      },
      {
        heading: "Ready versus off plan",
        body: [
          "Ready property can provide rental evidence, physical inspection and faster possession. Off plan property can provide phased payments, new inventory and access to projects that may be scarce once completed. Both can work, but they require different underwriting.",
          "Hacoco compares net yield, service charges, expected completion supply, developer record, unit plan, community maturity and resale depth before presenting Dubai options as investable.",
        ],
      },
      {
        heading: "A global buyer lens",
        body: [
          "Dubai is attractive because it is open, liquid and globally understood. That openness also means buyers are exposed to aggressive launches, crowded narratives and projects that sell faster than they can be properly evaluated.",
          "We help buyers slow the decision down. The better Dubai acquisition has a clear use case, sensible entry, defensible location, clean payment path and a realistic exit buyer.",
        ],
      },
    ],
  },
  {
    slug: "dubai-free-zone-company-setup",
    eyebrow: "Company Setup",
    title: "Dubai Free Zone Company Setup",
    description:
      "Dubai free zone setup support for entrepreneurs, trading families and investors who need activity fit, documentation coordination, visa planning and banking readiness.",
    image: {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85",
      alt: "Dubai business towers and city skyline",
    },
    keywords: [
      "Dubai free zone company setup",
      "start company in Dubai",
      "UAE business setup",
      "Dubai company formation",
    ],
    highlights: [
      "Activity and free zone fit",
      "Documentation coordination",
      "Visa and office package planning",
      "Banking readiness support",
    ],
    sections: [
      {
        heading: "More than a license",
        body: [
          "A Dubai free zone company should fit the business activity, banking plan, visa requirement and intended operating model. The cheapest license is not useful if it creates friction later.",
          "Hacoco helps clients frame the business requirement, compare free zone pathways and coordinate with relevant providers for formation, visa and banking preparation.",
        ],
      },
      {
        heading: "Where property and setup connect",
        body: [
          "For many families, Dubai real estate and company setup are connected decisions. A property may support use or residency optionality, while the company supports trading, consulting, services or holding activity.",
          "The goal is to make those decisions coherent, with the right professional advice around tax, compliance, banking and corporate structure.",
        ],
      },
      {
        heading: "How we frame the setup",
        body: [
          "The starting point is the activity, not the package price. Consulting, trading, holding, services and regional operating businesses may need different free zones, office commitments, visa planning and banking preparation.",
          "Hacoco helps coordinate the question set before introductions are made: ownership, activity, invoicing flow, client geography, visa requirement, expected banking profile and whether UAE property sits alongside the company plan.",
        ],
      },
      {
        heading: "What should be reviewed professionally",
        body: [
          "Company formation should be coordinated with qualified corporate, tax, banking and compliance specialists. Hacoco does not replace that advice. We help the client prepare a cleaner brief and avoid a setup that looks simple but creates operational friction later.",
          "For serious families, the value is sequence. Property payments, documentation, source of funds, visas, operating purpose and banking readiness should be considered together.",
        ],
      },
    ],
  },
  {
    slug: "goa-villas-second-homes",
    eyebrow: "Goa",
    title: "Goa Villas and Second Homes",
    description:
      "Goa villa and second-home acquisition across selected micro markets, reviewed for title, permissions, location quality, management and rental potential.",
    image: {
      src: "/images/investor/goa.jpg",
      alt: "Goa villa and coastal second-home context",
    },
    keywords: [
      "Goa villas",
      "Goa second homes",
      "Goa real estate investment",
      "managed villas Goa",
    ],
    highlights: [
      "Micro-market selection",
      "Title and permission review coordination",
      "Managed rental feasibility",
      "Operating cost and maintenance context",
    ],
    sections: [
      {
        heading: "Goa is an operating asset",
        body: [
          "A Goa villa is not only a property purchase. It is a use, rental, staffing, furnishing, maintenance and management decision. Strong returns require a credible operating plan, not just a beautiful house.",
          "Hacoco evaluates location, title comfort, permissions, access, water, power, rental manager quality and realistic occupancy assumptions before shaping a shortlist.",
        ],
      },
      {
        heading: "Where selectivity matters",
        body: [
          "North Goa, South Goa and inland pockets all serve different buyers. Some assets suit rental income. Some suit personal use. Some are better treated as land banking or low-density lifestyle ownership.",
          "We help define that purpose early so the buyer does not overpay for emotion or reject a strong asset because the comparison set is badly built.",
        ],
      },
      {
        heading: "What makes a villa investment grade",
        body: [
          "A Goa asset needs more than charm. We look at title comfort, access, water, power, permissions, design quality, staffing, maintenance, rental manager capability, occupancy assumptions and the ease of eventual resale.",
          "The best opportunities usually combine lifestyle utility with a realistic operating plan. A weak villa may photograph well and still become expensive to own.",
        ],
      },
      {
        heading: "How Hacoco protects the process",
        body: [
          "We help buyers avoid comparing a managed villa, raw land parcel, boutique project and personal-use home as if they were the same asset class.",
          "The shortlist is built around purpose first: personal use, managed rental, capital appreciation, family retreat or long-duration land exposure.",
        ],
      },
    ],
  },
  {
    slug: "north-india-land-acquisition",
    eyebrow: "North India",
    title: "Land Acquisition",
    description:
      "Specialised land acquisition across North India corridors including Baghpat, Haridwar, Neemrana, Jewar, Dehradun, Mussoorie foothills, Kotabagh and Bejunia.",
    image: {
      src: "/images/investor/haridwar-land.jpg",
      alt: "Hacoco land opportunity on the Haridwar Dehradun corridor",
    },
    keywords: [
      "North India land acquisition",
      "Baghpat land investment",
      "Haridwar land",
      "Neemrana land",
      "Dehradun land",
    ],
    highlights: [
      "Corridor and access review",
      "Title and mutation diligence coordination",
      "Land use and conversion context",
      "Exit-buyer logic before acquisition",
    ],
    sections: [
      {
        heading: "Where Hacoco has an edge",
        body: [
          "Land acquisition rewards field knowledge, patience and discipline. Hacoco focuses on corridors where infrastructure, access, employment, tourism or lifestyle demand can create future relevance.",
          "We review Baghpat and Baraut, Haridwar and Rishikesh access, Neemrana and DMIC influence, Jewar and YEIDA, Dehradun and Mussoorie foothills, Kotabagh, Bejunia and other selective land opportunities.",
        ],
      },
      {
        heading: "What makes land investable",
        body: [
          "The land must have a credible reason to be owned: access, title, land use, future demand, route, aggregation possibility, development pathway or long-hold scarcity.",
          "We help screen for local risks before the buyer spends serious time or money, including fragmented ownership, weak approach, unclear conversion, environmental constraints and unrealistic seller pricing.",
        ],
      },
      {
        heading: "Corridors are not enough",
        body: [
          "The phrase near an expressway can hide a wide range of outcomes. A parcel near the wrong access point, with weak approach or difficult title, may not benefit from the larger infrastructure story.",
          "Hacoco evaluates the exact asset: road width, distance from meaningful access, land use, mutation history, ownership fragmentation, drainage, conversion pathway, local demand and the likely future buyer.",
        ],
      },
      {
        heading: "What serious buyers need",
        body: [
          "Land is a patient asset. It should be bought with a holding plan, a legal review plan and a clear view of what would make the next buyer pay more.",
          "We work best with buyers who want a disciplined field filter before committing travel, legal cost or negotiation energy to a parcel.",
        ],
      },
    ],
  },
  {
    slug: "france-vineyard-opportunities",
    eyebrow: "France",
    title: "France Vineyard Opportunities",
    description:
      "Selective vineyard opportunities in France for families seeking international hard-asset diversification, lifestyle utility and operating-asset exposure.",
    image: {
      src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
      alt: "French vineyard rows",
    },
    keywords: [
      "France vineyard investment",
      "vineyards for sale France",
      "international real estate diversification",
      "wine estate investment",
    ],
    highlights: [
      "Appellation and asset review",
      "Operating business diligence",
      "Lifestyle and legacy planning context",
      "Specialist professional coordination",
    ],
    sections: [
      {
        heading: "A different type of real asset",
        body: [
          "A vineyard can combine land, production, brand, hospitality, inventory and family legacy. It is not a passive apartment equivalent, which is why the mandate needs to be framed carefully.",
          "Hacoco can help families evaluate vineyard opportunities when available, including whether the asset is being considered for operating income, diversification, lifestyle utility or long-term legacy ownership.",
        ],
      },
      {
        heading: "What needs expert review",
        body: [
          "Vineyard diligence should include appellation, terroir, production history, operating team, capex, agricultural risk, distributor relationships, local legal structure, tax treatment and sale process.",
          "The buyer should move with specialist legal, tax, agricultural and operating advice. Hacoco's role is to help frame the opportunity and coordinate the right review path.",
        ],
      },
      {
        heading: "Why families consider it",
        body: [
          "A vineyard is different from residential real estate because it can combine land value, brand equity, production economics and family use. That mix can be attractive, but only when the buyer understands the operating burden.",
          "Hacoco treats vineyard opportunities as specialist investments. The review must test the romance of the asset against cash flow, capex, staffing, agricultural volatility and jurisdiction-specific advice.",
        ],
      },
      {
        heading: "How the mandate is framed",
        body: [
          "Some families look for a lifestyle estate. Others want a functioning operating asset, hospitality potential or a long-term family holding. Each purpose changes the diligence path.",
          "The first step is to define the role of the asset inside the family's broader portfolio before a specific estate is recommended.",
        ],
      },
    ],
  },
  {
    slug: "remote-acquisition-support",
    eyebrow: "NRI",
    title: "Remote Acquisition Support",
    description:
      "A structured acquisition process for NRIs and overseas buyers who need shortlisting, coordination and professional review before travel or capital commitment.",
    image: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      alt: "Quiet advisory office",
    },
    keywords: [
      "NRI property investment",
      "remote property buying India",
      "NRI real estate support",
      "property acquisition advisory",
    ],
    highlights: [
      "Mandate and shortlist discipline",
      "Remote inspection coordination",
      "Document review coordination",
      "Closing and professional workflow support",
    ],
    sections: [
      {
        heading: "Built for buyers away from the market",
        body: [
          "NRIs and overseas buyers often lose time to unfiltered links, incomplete documentation and poorly sequenced site visits. Hacoco brings structure before the buyer travels or sends funds.",
          "We define the mandate, filter options, coordinate next steps and help the buyer engage the right legal, tax, banking and local professionals before a decision is made.",
        ],
      },
      {
        heading: "What the process improves",
        body: [
          "The value is not only convenience. A disciplined remote process reduces weak site visits, avoids rushed decisions and gives the buyer more confidence in documentation, fit and timing.",
          "This is especially useful across South Delhi, Dubai, Goa and land parcels where micro-market context matters more than a listing link.",
        ],
      },
      {
        heading: "A better remote workflow",
        body: [
          "The work begins with a written mandate and a clear rejection framework. That helps avoid the common remote-buyer problem of reviewing too many weak links and too few real opportunities.",
          "Hacoco can coordinate video walkthroughs, document collection, pricing context, site visit sequencing and introductions to qualified professionals where required.",
        ],
      },
      {
        heading: "Where it matters most",
        body: [
          "Remote acquisition support is most valuable when local nuance drives value: South Delhi lanes, Goa permissions, Dubai project selection and North India land title.",
          "The aim is to make the buyer's first physical visit more productive, with fewer surprises and a clearer sense of what still needs verification.",
        ],
      },
    ],
  },
];

export const investorMarketPages: InvestorDetailPage[] = [
  {
    slug: "south-delhi-homes",
    eyebrow: "Delhi",
    title: "South Delhi Homes",
    description:
      "Builder floors, bungalows and redevelopment assets across Defence Colony, Greater Kailash, Vasant Vihar, Anand Niketan, Panchsheel Park and other prime colonies.",
    image: {
      src: "/images/investor/safdarjung.jpeg",
      alt: "Hacoco bungalow opportunity in Safdarjung Enclave, New Delhi",
    },
    keywords: ["South Delhi homes", "builder floors South Delhi", "Defence Colony", "Greater Kailash"],
    highlights: ["Scarce colony land", "Resale depth", "End-use demand", "Documentation-sensitive"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "South Delhi is a capital preservation market where scarcity, address and land share do much of the heavy lifting. The best purchases are usually micro-market decisions built around block, lane, plot and title.",
          "Hacoco helps buyers compare the real trade-offs between new floors, resale floors, redevelopment assets and rare bungalow opportunities.",
        ],
      },
      {
        heading: "What drives pricing",
        body: [
          "The pricing conversation changes street by street. Defence Colony, Greater Kailash, Vasant Vihar, Anand Niketan, Panchsheel Park, Jor Bagh and Sunder Nagar each carry different buyer pools, plot typologies and resale behaviour.",
          "A finished floor can command a premium, but the durable value often sits in land share, block quality, parking, lift experience, floor plate efficiency, documentation and how many future buyers will trust the address.",
        ],
      },
      {
        heading: "What Hacoco checks",
        body: [
          "We screen for seller intent, comparable evidence, parking clarity, collaboration terms, land share, construction age, floor quality, lane width and professional document review before treating a property as worth serious buyer time.",
          "The goal is fewer site visits and stronger conviction. For South Delhi, a short list should feel narrow because the market rewards precision.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "South Delhi is built around plotted colonies, redevelopment economics and builder-floor ownership. Older plots are often redeveloped into independent floors, with value shaped by land share, parking, lift, floor level, terrace rights where applicable and the quality of the collaboration or redevelopment history.",
          "Freehold or leasehold status, mutation, sanctioned plans, completion or occupancy comfort, property tax records, mortgage status and parking allocation all need professional review. The commercial decision and documentation review should move together.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This market suits buyers seeking capital preservation, family occupation, address value and a recognised resale pool. It is less suitable for buyers whose main objective is high current yield or a quick speculative exit.",
          "The main risks are opaque pricing, excessive seller expectations, title complexity, weak parking, overpaying for finish, collaboration ambiguity and liquidity friction at very high ticket sizes.",
        ],
      },
      {
        heading: "How Hacoco approaches South Delhi",
        body: [
          "We build the shortlist around colony, block, plot, floor, parking, seller seriousness and document-readiness. A beautiful floor in the wrong lane can be weaker than an older home with better land and address fundamentals.",
          "Hacoco's role is to compress the market into fewer serious options, create negotiation context and coordinate the right professional review before the buyer commits.",
        ],
      },
    ],
  },
  {
    slug: "delhi-ncr-off-plan",
    eyebrow: "Primary",
    title: "Delhi NCR Off Plan",
    description:
      "Primary projects across Gurugram, Dwarka Expressway, SPR, New Gurgaon, Noida, Greater Noida and emerging NCR corridors.",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
      alt: "City towers",
    },
    keywords: ["Delhi NCR off plan", "Gurugram primary property", "Noida new launches"],
    highlights: ["RERA review", "Developer selection", "Launch price discipline", "Future supply check"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "Delhi NCR primary investments work best where infrastructure, employment access, developer credibility and future end-user demand converge.",
          "Hacoco evaluates whether the project can compete after handover, not only whether the launch payment plan looks attractive today.",
        ],
      },
      {
        heading: "Where the opportunity is",
        body: [
          "Gurugram, Dwarka Expressway, SPR, New Gurgaon, Noida Expressway and selected peripheral corridors can all produce investable opportunities, but not every launch deserves capital.",
          "The strongest primary assets usually combine credible developer delivery, sensible density, infrastructure visibility, livable unit planning and a future buyer pool that extends beyond launch investors.",
        ],
      },
      {
        heading: "Risk lens",
        body: [
          "Hacoco reviews project registration, land status, payment schedule, construction progress, developer balance sheet behaviour, competing supply and likely resale depth after possession.",
          "A buyer should understand what happens if exit before handover is not available. If the asset does not work as a completed home or rental product, the entry is weaker than it appears.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "NCR primary property is driven by launch cycles, RERA registration, developer credibility, infrastructure dependency, payment schedules and future handover supply. A project can look compelling at launch and still struggle if the completed micro market has too much similar inventory.",
          "Investors should compare the launch against nearby ready stock, likely possession-year competition, maintenance cost, unit efficiency, access, schools, office catchments and the developer's earlier handover behaviour.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This market can suit buyers seeking developer-led growth exposure, staged payments and entry into an improving corridor. It is less suitable for buyers who need immediate rental income or cannot tolerate delay and execution risk.",
          "The main risks are weak developer delivery, infrastructure delays, payment-plan driven pricing, thin resale before possession, high density, poor maintenance planning and a future buyer pool that is narrower than the launch narrative suggests.",
        ],
      },
      {
        heading: "How Hacoco approaches NCR",
        body: [
          "Hacoco starts by asking whether the completed asset would still make sense if the buyer had to hold it. We then review developer, location, construction stage, registration, payment schedule and exit logic.",
          "The objective is to avoid launch noise and isolate projects where price, product, delivery and future demand are coherent.",
        ],
      },
    ],
  },
  {
    slug: "dubai-property",
    eyebrow: "UAE",
    title: "Dubai Property",
    description:
      "Primary off plan, ready yield, branded residences, family communities and UAE market access for Indian and global buyers.",
    image: {
      src: "/images/investor/dubai-marina.jpg",
      alt: "Dubai Marina waterfront and high-rise towers",
    },
    keywords: ["Dubai property", "Dubai off plan", "UAE real estate"],
    highlights: ["Global buyer access", "Escrow framework", "Rental depth", "Currency diversification"],
    sections: [
      {
        heading: "Market overview",
        body: [
          "Dubai is a global real estate market with several different buyer motives sitting inside one city: rental income, family use, business migration, currency diversification, residency planning and long-hold lifestyle ownership.",
          "The market is not a single skyline story. A Dubai Marina duplex, a Downtown branded residence, a Business Bay apartment, a Dubai Hills family home, a Palm Jumeirah asset and a JVC off plan unit all carry different tenant pools, service charges, exit buyers and holding behaviour.",
        ],
      },
      {
        heading: "The Hacoco view",
        body: [
          "We like Dubai when the buyer has a written reason to own there and the asset can stand up to completed-market scrutiny. We are more cautious when the purchase is driven only by launch scarcity, payment-plan comfort or an advertised yield that has not been converted into net owner return.",
          "Scarcity is genuine in certain waterfront, prime, branded, villa and family-community segments. It is less genuine where similar units can be launched or handed over in volume. The discipline is to separate city-level strength from building-level risk.",
        ],
      },
      {
        heading: "Ready versus off plan",
        body: [
          "Ready property gives the buyer an existing building, observable service charges, current rental evidence and faster possession. It can be the better route when income visibility or family use matters more than payment flexibility.",
          "Off plan property can provide earlier entry, staged payments and access to new communities, but the buyer accepts developer execution risk, future supply risk and the possibility that resale before handover is not available on favourable terms.",
        ],
      },
      {
        heading: "Developer selection",
        body: [
          "In Dubai, the developer is part of the asset. Delivery record, building management, handover quality, buyer communication, community planning and resale perception all influence the investment result.",
          "Hacoco reviews the developer before the view, brochure or payment plan. A strong payment plan can make cash flow easier, but it cannot compensate for weak delivery, poor unit planning or a location that lacks a future tenant base.",
        ],
      },
      {
        heading: "Communities and micro markets",
        body: [
          "Dubai Marina and JBR tend to appeal to buyers seeking waterfront lifestyle, rentals and global familiarity. Downtown and Business Bay can suit central-city demand and branded inventory. Dubai Hills and Emirates Living style communities often speak to family occupation and longer-hold end users. JVC and emerging communities need sharper supply and service-charge review.",
          "The right market depends on the mandate. Income, personal use, status, liquidity, residency relevance and business presence do not always point to the same building.",
        ],
      },
      {
        heading: "Rental economics",
        body: [
          "High advertised yield does not automatically mean high total return. The investor needs to move from gross rent to net owner outcome after service charges, vacancy, furnishing, property management, maintenance, transaction costs and currency movement.",
          "Hacoco reviews whether the expected tenant pool is deep enough for the unit type and whether the asset would remain rentable if nearby supply increases.",
        ],
      },
      {
        heading: "Service charges and ownership cost",
        body: [
          "Service charges are central to Dubai underwriting because they affect net yield, resale perception and owner experience. Two similar apartments can have different investment outcomes because one building is better run and less expensive to hold.",
          "We look at building quality, operating cost, maintenance culture, amenities burden and whether the service-charge profile is reasonable for the target tenant and resale buyer.",
        ],
      },
      {
        heading: "Escrow and buyer process",
        body: [
          "Dubai's off plan market operates through regulated project structures and buyer payment processes that should be reviewed at the project level. Buyers should understand the sale agreement, payment schedule, project registration, escrow mechanics, handover terms and default provisions before committing.",
          "Hacoco helps coordinate the questions that should go to the developer, broker, lawyer, mortgage adviser or company setup specialist. The buyer should not treat a launch booking as a substitute for transaction review.",
        ],
      },
      {
        heading: "Indian and NRI considerations",
        body: [
          "Indian and NRI buyers often evaluate Dubai alongside family use, children, business setup, currency diversification, remittance planning and possible residency relevance. That makes the purchase more than a property decision.",
          "The buyer should align property timing with banking, documentation, source of funds, tax advice, company setup needs and future use. A good Dubai plan is sequenced, not improvised.",
        ],
      },
      {
        heading: "Risks",
        body: [
          "The main risks are micro-market oversupply, weak developer delivery, high service charges, overoptimistic rental projections, short-term resale assumptions, payment-plan driven pricing and currency considerations for Indian buyers.",
          "Launch demand does not guarantee resale liquidity. A project can sell quickly and still be a weak investment if too many similar units reach handover together or if the completed building cannot compete with ready alternatives.",
        ],
      },
      {
        heading: "How Hacoco approaches Dubai",
        body: [
          "We start with the mandate: ready or off plan, income or use, apartment or villa, business setup relevance, hold period, currency objective and liquidity need. Then we compare communities, developers, service charges, unit plans, payment structure and likely exit demand.",
          "The output should be a focused shortlist, a list of questions for professional review and a clear explanation of why each option belongs in the conversation.",
        ],
      },
    ],
  },
  {
    slug: "goa-villas",
    eyebrow: "Goa",
    title: "Goa Villas",
    description:
      "Second homes and managed rental villas across selected Goa micro markets where title, permissions and operating quality can support long-hold value.",
    image: {
      src: "/images/investor/goa.jpg",
      alt: "Goa villa and coastal second-home context",
    },
    keywords: ["Goa villas", "Goa second homes", "Goa real estate"],
    highlights: ["Lifestyle utility", "Managed rental potential", "Scarce micro markets", "Permission review"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "Goa rewards local selectivity. A villa is both a home and an operating asset, with rental management, maintenance and permissions shaping the outcome.",
          "Hacoco screens for use case, title comfort, location quality, management and realistic income assumptions.",
        ],
      },
      {
        heading: "Different Goa assets",
        body: [
          "A North Goa income villa, a South Goa family retreat, a boutique project and an inland land parcel are not the same investment. Each has a different operating profile and buyer base.",
          "The best purchases begin with purpose: personal use, managed rental, hybrid use, long hold land banking or hospitality potential.",
        ],
      },
      {
        heading: "Diligence focus",
        body: [
          "Hacoco reviews title comfort, access, water and power, permissions, coastal or village constraints, management partner quality, maintenance cost and realistic rental assumptions.",
          "A villa that is difficult to maintain, operate or resell can quickly become a lifestyle liability. The underwriting has to be practical.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "Goa behaves village by village. North Goa rental-led villa demand, South Goa privacy-led ownership and inland land opportunities each have a different buyer base, operating profile and exit path.",
          "The asset must be reviewed as both property and operation: title, access, water, power, staff, maintenance, guest management, seasonality, owner use and permissions all affect the owner's actual outcome.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "Goa suits buyers who value lifestyle utility, second-home use, managed rental potential or long-hold scarcity in selected micro markets. It is less suitable for buyers seeking predictable passive income with no operating involvement.",
          "The main risks are unclear title, permission gaps, weak access, unrealistic rental projections, high maintenance, poor property management, seasonality and buying emotion without an operating plan.",
        ],
      },
      {
        heading: "How Hacoco approaches Goa",
        body: [
          "We begin with use case: family retreat, managed rental, hybrid use, land banking or boutique hospitality. Then we screen location, documentation, operating partner quality and realistic hold period.",
          "A Goa shortlist should explain why the specific village, product and operating model fit the buyer, not just why Goa is attractive.",
        ],
      },
    ],
  },
  {
    slug: "jewar-yeida-land",
    eyebrow: "North India",
    title: "Jewar and YEIDA Land",
    description:
      "Airport influenced land and plotted opportunities around Jewar and the Yamuna Expressway, reviewed with planning, access and exit-buyer context.",
    image: {
      src: "/images/investor/jaipur-land.jpg",
      alt: "Large North India land parcel used for corridor investment review",
    },
    keywords: ["Jewar land", "YEIDA land", "Yamuna Expressway"],
    highlights: ["Airport influence", "Planning context", "Industrial demand", "Long-hold optionality"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "The Jewar and YEIDA story is driven by airport-led infrastructure, industrial planning, logistics, plotted development and long-duration urbanisation.",
          "Hacoco reviews exact location, access, land use, title and realistic exit demand before treating land as investable.",
        ],
      },
      {
        heading: "Why exact location matters",
        body: [
          "Airport influence does not lift every parcel equally. Interchange access, sector planning, road width, land use, acquisition risk and surrounding development decide whether the land has a credible future buyer.",
          "Hacoco studies the parcel in relation to planned infrastructure, existing access and the likely use case, rather than relying only on the airport narrative.",
        ],
      },
      {
        heading: "Buyer fit",
        body: [
          "This market suits patient capital that can tolerate title review, policy change, holding period and uncertain timing. It is not a quick resale market for casual buyers.",
          "A serious purchase should be supported by legal diligence, mutation checks, land-use review and a realistic view of liquidity.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "Jewar and YEIDA land is shaped by planned infrastructure, authority zones, airport-led expectations, industrial demand, logistics, plotted development and long-duration urbanisation. The relevant question is whether the parcel sits inside a credible use path.",
          "Investors should review exact access, authority jurisdiction, land use, ownership chain, mutation, acquisition risk, road hierarchy, nearby planned use and whether aggregation or conversion is realistic.",
        ],
      },
      {
        heading: "Risks",
        body: [
          "The main risks are buying too far from usable access, relying on speculative infrastructure assumptions, title defects, fragmented ownership, unclear land use, weak liquidity and sellers pricing land as if future development has already happened.",
          "Airport proximity is not a thesis by itself. A parcel needs a practical reason to be owned and a future buyer who can use it.",
        ],
      },
      {
        heading: "How Hacoco approaches Jewar and YEIDA",
        body: [
          "Hacoco reviews land at the parcel level before the corridor level. We want to know the road, title, planning context, use case, seller seriousness and exit logic before discussing price.",
          "A good land note should say what is known, what needs legal review and what must happen for the investment to work.",
        ],
      },
    ],
  },
  {
    slug: "baghpat-haridwar-belt",
    eyebrow: "North India",
    title: "Baghpat and Haridwar Belt",
    description:
      "Delhi-Dehradun Expressway influenced land across Baghpat, Baraut, Haridwar, Rishikesh access and related hospitality or plotted opportunities.",
    image: {
      src: "/images/investor/haridwar-land.jpg",
      alt: "Hacoco land opportunity on the Haridwar Dehradun corridor",
    },
    keywords: ["Baghpat land", "Haridwar land", "Delhi Dehradun Expressway"],
    highlights: ["Expressway access", "Hospitality demand", "Plotted potential", "Conversion-sensitive"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "The Delhi-Dehradun access story can support select land, plotted, hospitality and farmhouse opportunities along the route. The opportunity is location-specific, not corridor-wide.",
          "Hacoco filters for interchanges, access, land use, conversion comfort, flood and drainage risk, and the future buyer profile.",
        ],
      },
      {
        heading: "Baghpat to Haridwar logic",
        body: [
          "Baghpat and Baraut can benefit from improved access to Delhi and regional movement, while Haridwar and Rishikesh-linked areas may support hospitality, wellness, plotted and second-home demand.",
          "The attractive thesis is not just distance from Delhi. It is whether the parcel sits near meaningful access, can be legally used for the intended purpose and has a future buyer beyond the current seller's story.",
        ],
      },
      {
        heading: "Risk lens",
        body: [
          "Hacoco reviews road approach, drainage, title chain, land use, conversion pathway, local disputes, environmental issues and whether development cost makes the purchase sensible.",
          "This is a corridor where discipline matters. The best asset may not be the cheapest land, but the land with the cleanest path to use and exit.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "The Baghpat and Haridwar belt is not one uniform corridor. Baghpat and Baraut are access and regional movement stories, while Haridwar and Rishikesh-side land may involve pilgrimage, wellness, hospitality, plotted living or second-home demand.",
          "The mechanics are local: interchange relevance, road approach, land use, drainage, flood risk, conversion, village boundaries, water, power and the buyer base at exit.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This market may suit long-duration buyers who can accept field diligence and uncertain timing. It is less suitable for buyers who need immediate income or quick liquidity.",
          "The main risks are poor approach, unclear conversion, local disputes, environmental constraints, overpaying for broad expressway proximity and buying scenic or cheap land that has no practical use path.",
        ],
      },
      {
        heading: "How Hacoco approaches the belt",
        body: [
          "Hacoco filters this market by route, exact access, land use, local demand and future buyer type. The first question is not whether the corridor is improving, but whether this parcel can benefit from that improvement.",
          "We also separate hospitality, plotted, farmhouse, logistics and land-banking mandates because each requires a different parcel.",
        ],
      },
    ],
  },
  {
    slug: "neemrana-dmic",
    eyebrow: "Rajasthan",
    title: "Neemrana and DMIC",
    description:
      "Industrial, warehousing and highway-linked land in the Khushkhera-Bhiwadi-Neemrana belt for buyers seeking corridor-led exposure.",
    image: {
      src: "/images/investor/neemrana-land.jpg",
      alt: "Neemrana land and development corridor",
    },
    keywords: ["Neemrana land", "DMIC real estate", "industrial corridor land"],
    highlights: ["Industrial logic", "Highway access", "Warehousing demand", "Land use discipline"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "Neemrana is an industrial and employment-led corridor, not a pure lifestyle market. Its strongest cases connect to manufacturing, logistics, warehousing and highway access.",
          "Hacoco focuses on land with credible future use, not random agricultural parcels sold on broad corridor excitement.",
        ],
      },
      {
        heading: "Industrial corridor lens",
        body: [
          "The Neemrana, Bhiwadi and Khushkhera belt should be reviewed through employment, logistics, manufacturing, warehousing and access, not only through residential appreciation.",
          "A good land case has clear road connectivity, realistic land use, proximity to demand and a reason an industrial, commercial or plotted buyer would want it later.",
        ],
      },
      {
        heading: "What we avoid",
        body: [
          "We are cautious around parcels that are too far from usable access, unclear on title, dependent on vague future announcements or priced as if the full corridor story has already been delivered.",
          "The underwriting focuses on what can be verified today and what future optionality is being bought at a sensible price.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "Neemrana and the wider Khushkhera-Bhiwadi belt should be understood through industrial employment, warehousing, highway movement and manufacturing relevance. It is not primarily a weekend-home market.",
          "The mechanics that matter are road access, land use, frontage, parcel size, proximity to industrial demand, conversion comfort and whether a future industrial, logistics or plotted buyer can use the asset.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This market can suit buyers seeking industrial-corridor exposure or land that could appeal to a commercial user later. It is less suitable for buyers who want lifestyle utility or predictable residential rental income.",
          "The main risks are weak access, unclear permitted use, thin end-user demand, fragmented title, overpaying for corridor branding and assuming industrial activity will lift every parcel equally.",
        ],
      },
      {
        heading: "How Hacoco approaches Neemrana",
        body: [
          "Hacoco looks for land where the use case can be explained without stretching. If the future buyer is industrial, warehousing, commercial or plotted, the parcel should already show why that buyer would care.",
          "We prefer land where diligence can confirm access, ownership, use and pricing before the buyer enters extended negotiation.",
        ],
      },
    ],
  },
  {
    slug: "dehradun-foothills",
    eyebrow: "Uttarakhand",
    title: "Dehradun Foothills",
    description:
      "Delhi-Dehradun and Mussoorie access areas, including Dehradun, Mussoorie foothills, Kotabagh, Bejunia near Kaladhungi and related second-home land.",
    image: {
      src: "/images/investor/haridwar-land.jpg",
      alt: "Hacoco land opportunity used for Uttarakhand foothill acquisition review",
    },
    keywords: ["Dehradun land", "Mussoorie foothills", "Kotabagh", "Bejunia Kaladhungi"],
    highlights: ["Second-home demand", "Access-led value", "Buildability review", "Permission-sensitive"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "Foothill land can appeal to families seeking weekend access, boutique hospitality, wellness use or quiet land banking.",
          "Hacoco reviews slope, road width, water, forest boundary, construction rules, title and local permissions before recommending a serious next step.",
        ],
      },
      {
        heading: "The Dehradun and Mussoorie access story",
        body: [
          "Improved Delhi-Dehradun connectivity can increase interest in second homes, retreat land and hospitality-led assets. That does not make every hill parcel investable.",
          "Buildability, road approach, water, slope, forest proximity, local permissions and maintenance logistics determine whether the land can become a usable asset.",
        ],
      },
      {
        heading: "Kotabagh and Bejunia lens",
        body: [
          "Kotabagh and Bejunia near Kaladhungi can appeal to buyers seeking quieter lifestyle land near forest, hill and weekend-use demand. The opportunity requires careful checks on access, ownership, land use and practical development cost.",
          "Hacoco helps buyers avoid buying scenery without a plan. A beautiful parcel still needs legal clarity, buildability and a credible exit buyer.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "Foothill and hill-adjacent land is shaped by road approach, slope, water, forest proximity, construction rules, local permissions, seasonal access and the cost of creating a usable property.",
          "The investor needs to know whether the land is meant for a family retreat, boutique hospitality, wellness use, agriculture-linked ownership or long-hold optionality because each use needs a different parcel.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This market suits buyers who can hold patiently and value lifestyle or hospitality optionality. It is less suitable for buyers who want predictable income, simple maintenance or rapid resale.",
          "The main risks are poor buildability, unclear access, water constraints, forest or environmental limitations, seasonal maintenance, title complexity and overpaying for scenery that cannot be converted into use.",
        ],
      },
      {
        heading: "How Hacoco approaches foothill land",
        body: [
          "Hacoco reviews the physical and legal practicality before the emotional appeal. Road, slope, water, permissions and title come before the view.",
          "A suitable parcel should have a credible use path, a realistic development cost and a future buyer profile that can be explained without relying only on the broader Dehradun or Mussoorie story.",
        ],
      },
    ],
  },
  {
    slug: "france-vineyards",
    eyebrow: "France",
    title: "France Vineyards",
    description:
      "Available vineyard opportunities for diversification, lifestyle utility and operating-asset exposure, reviewed through specialist diligence.",
    image: {
      src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
      alt: "Vineyard rows",
    },
    keywords: ["France vineyards", "vineyard investment", "wine estate"],
    highlights: ["Hard asset diversification", "Operating business exposure", "Lifestyle utility", "Specialist diligence"],
    sections: [
      {
        heading: "Market thesis",
        body: [
          "French vineyards can suit families seeking differentiated real-asset exposure beyond residential property. They require specialist operating and legal diligence.",
          "Hacoco can help frame whether the opportunity is a passion asset, business asset, lifestyle investment or long-term family holding.",
        ],
      },
      {
        heading: "What makes it different",
        body: [
          "A vineyard is a real asset and an operating business. Land, appellation, production history, inventory, hospitality potential, brand and management all affect the investment case.",
          "The buyer must be clear whether the objective is family legacy, lifestyle use, operating income, international diversification or a blend of these.",
        ],
      },
      {
        heading: "Diligence standard",
        body: [
          "Hacoco helps frame the opportunity, but specialist legal, tax, agricultural and operating advice is essential. Capex, staffing, yield variability and market route must be understood before the purchase is treated as serious.",
          "This category is best for families comfortable with operating complexity and a long horizon.",
        ],
      },
      {
        heading: "How the market works",
        body: [
          "A vineyard purchase is not only a land purchase. The buyer is also evaluating production history, appellation, inventory, brand position, distribution, hospitality potential, staffing and agricultural exposure.",
          "The operating model decides the diligence path. A lifestyle estate, a working vineyard and a hospitality-led asset should not be reviewed as the same investment.",
        ],
      },
      {
        heading: "Investor fit and risks",
        body: [
          "This category can suit families seeking international diversification, lifestyle utility and a long-term operating asset. It is less suitable for buyers who want passive ownership or simple resale liquidity.",
          "The main risks are agricultural volatility, capex, staffing, local legal and tax complexity, production quality, distribution weakness and mistaking a romantic asset for a financially coherent one.",
        ],
      },
      {
        heading: "How Hacoco approaches vineyards",
        body: [
          "Hacoco helps define whether the buyer is looking for passion, operating income, legacy, hospitality or diversification. That purpose decides which experts need to review the opportunity.",
          "We keep this category selective. If the asset cannot support a clear operating and diligence path, it should remain a watchlist idea rather than a purchase recommendation.",
        ],
      },
    ],
  },
];

export function getInvestorServicePage(slug: string) {
  return investorServicePages.find((page) => page.slug === slug);
}

export function getInvestorMarketPage(slug: string) {
  return investorMarketPages.find((page) => page.slug === slug);
}
