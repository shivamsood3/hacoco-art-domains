export type LeadField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fullWidth?: boolean;
};

export type ContentCard = {
  kicker: string;
  title: string;
  copy: string;
  href?: string;
};

export type ShowcaseItem = {
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  image?: string;
  href?: string;
};

export type ProcessStep = {
  title: string;
  copy: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CommodityCategory = {
  number: string;
  title: string;
  mode: "Sourcing & facilitation" | "Direct trading available";
  description: string;
  image: string;
  featured?: boolean;
};

export type TradeServiceModel = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  appliesTo: string;
  relationship: string;
};

export type TradeRiskControl = {
  number: string;
  title: string;
  description: string;
};

export type SiteConfig = {
  slug: "capital" | "investor" | "advisory";
  vertical: "real-estate" | "commodities";
  primaryDomain: string;
  hostAliases: string[];
  brand: {
    name: string;
    eyebrow: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  navCtaLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    formAboveFold?: boolean;
    ctas: Array<{
      label: string;
      href: string;
      variant: "primary" | "secondary";
    }>;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    image: {
      src: string;
      alt: string;
      eyebrow: string;
      captionTitle: string;
      captionText: string;
    };
  };
  trustStrip: Array<{
    kicker: string;
    title: string;
    copy: string;
  }>;
  sections: {
    collectWhy?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ContentCard[];
    };
    themes?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ContentCard[];
    };
    advisoryAreas?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ContentCard[];
    };
    acquisitionFocus?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ContentCard[];
    };
    showcase?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ShowcaseItem[];
    };
    whyHacoco?: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      aside?: string;
    };
    process?: {
      eyebrow: string;
      title: string;
      steps: ProcessStep[];
    };
    faq?: {
      eyebrow: string;
      title: string;
      items: FaqItem[];
    };
  };
  ctaBand: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  formSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    leadTag: "CAP-LEAD" | "INV-LEAD" | "ADV-LEAD";
    fields: LeadField[];
  };
  success: {
    eyebrow: string;
    title: string;
    message: string;
  };
  commodities?: {
    categories: CommodityCategory[];
    serviceModels: TradeServiceModel[];
    riskControls: TradeRiskControl[];
  };
  calendly?: {
    url: string;
  };
  footer: {
    copy: string;
    email: string;
    contactLabel: string;
  };
};

const commodityImages = {
  oil: "https://images.unsplash.com/photo-1530890448995-4d82724f702c?auto=format&fit=crop&w=1800&q=88",
  grain:
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85",
  fertilizer:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=85",
  cropProtection:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
} as const;

const realEstateImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
] as const;

const realEstateTrustStrip = [
  {
    kicker: "Access",
    title: "Private mandates",
    copy: "Curated opportunities across select Delhi NCR micro markets.",
  },
  {
    kicker: "Review",
    title: "Document led",
    copy: "Every serious conversation begins with asset, title, and fit review.",
  },
  {
    kicker: "Execution",
    title: "Guided closure",
    copy: "A clear path from mandate to negotiation and transaction support.",
  },
] as const;

const commodityTrustStrip = [
  {
    kicker: "Mandate",
    title: "Requirement first",
    copy: "Product, specification, volume, route, and timeline shape every engagement.",
  },
  {
    kicker: "Verification",
    title: "Counterparty led",
    copy: "Credibility checks come before introductions and document exchange.",
  },
  {
    kicker: "Execution",
    title: "Trade disciplined",
    copy: "Commercial documents and payment instruments follow an agreed sequence.",
  },
] as const;

export const siteConfigs: Record<string, SiteConfig> = {
  "hacococapital.com": {
    slug: "capital",
    vertical: "real-estate",
    primaryDomain: "hacococapital.com",
    hostAliases: ["www.hacococapital.com", "hacococapital.local"],
    brand: {
      name: "Hacoco Capital",
      eyebrow: "Private Real Estate Transactions",
    },
    seo: {
      title: "Hacoco Capital | Private Real Estate Capital & Transaction Advisory",
      description:
        "Hacoco Capital advises investors, owners, developers and family offices on select private real estate transactions, capital mandates and complex real estate opportunities.",
      keywords: [
        "private real estate capital",
        "real estate transaction advisory India",
        "private real estate acquisitions",
        "real estate capital introductions",
        "large ticket real estate transactions",
        "family office real estate India",
        "real estate disposition advisory",
      ],
      ogImage: "/images/investor/janpath.jpeg",
    },
    navigation: [
      { label: "Transactions", href: "/transactions" },
      { label: "Capital", href: "/capital" },
      { label: "Strategies", href: "/strategies" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
    ],
    navCtaLabel: "Private Desk",
    hero: {
      eyebrow: "Private real estate capital access",
      title: "Private real estate capital and transaction advisory.",
      description:
        "For capital seeking opportunity and real estate opportunity seeking qualified capital.",
      ctas: [
        { label: "Request Private Access", href: "#lead-form", variant: "primary" },
        { label: "View Approach", href: "#focus", variant: "secondary" },
      ],
      metrics: [
        { value: "Private", label: "Off market and selective mandates" },
        { value: "Reviewed", label: "Asset and documentation led screening" },
        { value: "Prepared", label: "Transactions reviewed before introductions" },
      ],
      image: {
        src: realEstateImages[0],
        alt: "Luxury residential real estate exterior",
        eyebrow: "Capital Mandates",
        captionTitle: "Real estate access with sharper filters",
        captionText:
          "Structured introductions for buyers who want quality, clarity, and fewer wasted site visits.",
      },
    },
    trustStrip: [...realEstateTrustStrip],
    sections: {
      showcase: {
        eyebrow: "Opportunity Types",
        title: "Real estate mandates shaped for serious buyers.",
        description:
          "The page is built around private capital conversations, not public listings.",
        items: [
          {
            title: "Prime residential",
            subtitle: "South Delhi, Lutyens influence, gated addresses",
            category: "Homes",
            badge: "Private",
            image: realEstateImages[0],
          },
          {
            title: "Income assets",
            subtitle: "Leased floors, offices, retail, and yield led assets",
            category: "Commercial",
            badge: "Review",
            image: realEstateImages[1],
          },
          {
            title: "Redevelopment potential",
            subtitle: "Builder floors, bungalows, and plot led mandates",
            category: "Land",
            badge: "Selective",
            image: realEstateImages[2],
          },
          {
            title: "NRI acquisition support",
            subtitle: "Remote review, local coordination, and closure support",
            category: "Advisory",
            badge: "Guided",
            image: realEstateImages[3],
          },
        ],
      },
      themes: {
        eyebrow: "Capital Focus",
        title: "Three ways we help capital enter real estate more intelligently.",
        description:
          "Each route begins with requirement clarity, ticket size, holding period, and risk comfort.",
        items: [
          {
            kicker: "Residential",
            title: "Prime homes and floors",
            copy: "For buyers seeking end use, legacy homes, or long hold residential assets.",
          },
          {
            kicker: "Commercial",
            title: "Yield oriented assets",
            copy: "For investors reviewing rent, tenant quality, location depth, and exit comfort.",
          },
          {
            kicker: "Strategic",
            title: "Land and redevelopment",
            copy: "For capital that can underwrite location, permissions, time, and asset complexity.",
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Hacoco Capital",
        title: "A better real estate decision usually begins before the site visit.",
        paragraphs: [
          "Most buyers lose time because the mandate is vague, the asset is weak, or the numbers are not framed clearly. We start by narrowing the brief.",
          "Hacoco Capital filters opportunities around location, documentation, use case, capital size, and buyer intent before asking you to spend time on a property.",
        ],
        aside:
          "No listing clutter. No pressure calls. Just a clearer route to assets worth reviewing.",
      },
      process: {
        eyebrow: "Process",
        title: "From capital brief to serious opportunity review.",
        steps: [
          {
            title: "Brief",
            copy: "Share location preference, ticket size, use case, and timeline.",
          },
          {
            title: "Filter",
            copy: "We screen available and private opportunities against your capital brief.",
          },
          {
            title: "Review",
            copy: "You receive a tighter set of assets with context for the next conversation.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Private Desk",
      title: "If capital or a transaction deserves a private conversation, start with a clear brief.",
      description:
        "Share only the context needed for Hacoco Capital to review fit, confidentiality and next step.",
      buttonLabel: "Discuss A Mandate",
    },
    formSection: {
      eyebrow: "Private Mandate",
      title: "Share a capital or transaction brief.",
      description:
        "A concise brief helps qualify ticket size, role, asset class, confidentiality and timing.",
    },
    form: {
      eyebrow: "Capital Desk",
      title: "Discuss a private real estate mandate",
      description:
        "For larger private real estate transactions where discretion and counterparty quality matter.",
      submitLabel: "Discuss Mandate",
      leadTag: "CAP-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        { name: "organisation", label: "Organisation / family office", type: "text", required: true, placeholder: "Company, family office or self" },
        {
          name: "mandateType",
          label: "Mandate type",
          type: "select",
          required: true,
          options: ["Deploy capital", "Discuss transaction", "Request memorandum", "Intermediary introduction"],
        },
        {
          name: "indicativeRange",
          label: "Indicative range",
          type: "select",
          required: true,
          options: ["INR 25 Cr to 50 Cr", "INR 50 Cr to 100 Cr", "INR 100 Cr to 250 Cr", "INR 250 Cr to 500 Cr", "INR 500 Cr+"],
        },
        {
          name: "message",
          label: "Brief context",
          type: "textarea",
          placeholder: "Share role, asset class, geography, timing and confidentiality needs. Do not upload documents here.",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Brief Received",
      title: "Your private mandate is in review.",
      message:
        "Hacoco Capital will review fit, confidentiality and next step before responding.",
    },
    footer: {
      copy: "Private real estate capital and transaction advisory for clients who prefer discretion, clarity and qualified counterparties.",
      email: "advisory@hacococapital.com",
      contactLabel: "Capital desk",
    },
  },
  "investwithhacoco.com": {
    slug: "investor",
    vertical: "real-estate",
    primaryDomain: "investwithhacoco.com",
    hostAliases: ["www.investwithhacoco.com", "investwithhacoco.local"],
    brand: {
      name: "Invest With Hacoco",
      eyebrow: "Private Real Estate",
    },
    seo: {
      title: "Invest With Hacoco | Private Real Estate Investment and Acquisition",
      description:
        "Private real estate acquisition, property sourcing and investment analysis across South Delhi, Delhi NCR, Dubai, Goa and North India land corridors.",
      keywords: [
        "real estate investment India",
        "private property acquisition",
        "South Delhi property",
        "South Delhi investment",
        "Delhi luxury real estate",
        "Delhi property investment",
        "Dubai real estate investment",
        "North India land acquisition",
        "off market property India",
      ],
      ogImage: "/og-investwithhacoco.png",
    },
    navigation: [
      { label: "Invest", href: "#approach" },
      { label: "Markets", href: "#markets" },
      { label: "Opportunities", href: "/listings" },
      { label: "Intelligence", href: "/market-intelligence" },
      { label: "About", href: "/about" },
      { label: "Speak to Hacoco", href: "/contact" },
    ],
    navCtaLabel: "Speak to Hacoco",
    hero: {
      eyebrow: "Private Real Estate and Investment",
      title: "Property worth owning.",
      description:
        "Hacoco sources and evaluates residential, land and investment opportunities across Delhi, NCR, Dubai and selected markets.",
      formAboveFold: false,
      ctas: [
        { label: "Discuss an Investment", href: "/contact", variant: "primary" },
        { label: "View Opportunities", href: "/listings", variant: "secondary" },
      ],
      metrics: [
        { value: "Primary", label: "Off plan projects in Delhi NCR, Goa and Dubai/UAE" },
        { value: "Land", label: "Baghpat, Haridwar, Neemrana and foothill corridors" },
        { value: "Global", label: "Dubai setup and France vineyard diversification" },
      ],
      image: {
        src: realEstateImages[1],
        alt: "Modern luxury home interior",
        eyebrow: "Private Acquisition Desk",
        captionTitle: "Property, land and Dubai access matched to brief",
        captionText:
          "A cleaner route to residential assets, land parcels, second homes, Dubai property and business setup support.",
      },
    },
    trustStrip: [...realEstateTrustStrip],
    sections: {
      acquisitionFocus: {
        eyebrow: "Services",
        title: "One acquisition desk for property, land, Dubai market entry and diversification.",
        description:
          "Built for buyers who care about location quality, legal clarity, market context and a practical route to execution.",
        items: [
          {
            kicker: "Primary Market",
            title: "Off plan property investments",
            copy: "Primary investments across Delhi NCR, Goa and Dubai/UAE reviewed for developer quality, RERA or escrow comfort, payment plan, handover risk and resale depth.",
            href: "/services/off-plan-property-investments",
          },
          {
            kicker: "South Delhi",
            title: "Prime homes and builder floors",
            copy: "Filtered residential options across established Delhi colonies based on budget, parking, floor quality, title comfort and resale depth.",
            href: "/services/south-delhi-prime-homes-builder-floors",
          },
          {
            kicker: "Dubai",
            title: "Property investment",
            copy: "Shortlists across ready income assets, off plan opportunities, family communities and prime inventory with developer and yield context.",
            href: "/services/dubai-property-investment",
          },
          {
            kicker: "Company Setup",
            title: "Dubai free zone support",
            copy: "Coordination for free zone selection, activity fit, company formation, visa planning, office packages and banking readiness.",
            href: "/services/dubai-free-zone-company-setup",
          },
          {
            kicker: "Goa",
            title: "Villas and second homes",
            copy: "Curated Goa opportunities reviewed for location, title, permissions, managed rental potential and long hold lifestyle value.",
            href: "/services/goa-villas-second-homes",
          },
          {
            kicker: "North India",
            title: "Land acquisition",
            copy: "Specialised sourcing across Baghpat, Haridwar, Neemrana, Dehradun, Mussoorie foothills, Kotabagh, Bejunia and other up and coming corridors.",
            href: "/services/north-india-land-acquisition",
          },
          {
            kicker: "France",
            title: "Vineyard opportunities",
            copy: "Selective access to French vineyard opportunities for families seeking operating-asset diversification beyond residential property.",
            href: "/services/france-vineyard-opportunities",
          },
          {
            kicker: "NRI",
            title: "Remote acquisition support",
            copy: "A structured process for overseas buyers who need shortlisting, local coordination and professional review before committing travel or capital.",
            href: "/services/remote-acquisition-support",
          },
        ],
      },
      showcase: {
        eyebrow: "Markets",
        title: "Investable markets matched to mandate, not browsing behaviour.",
        description:
          "Representative acquisition categories for buyers reviewing Indian and Dubai real estate with a serious capital allocation lens.",
        items: [
          {
            title: "South Delhi homes",
            subtitle: "Builder floors, bungalows and redevelopment assets across prime colonies",
            category: "Delhi",
            badge: "Core",
            image: realEstateImages[0],
            href: "/markets/south-delhi-homes",
          },
          {
            title: "Delhi NCR off plan",
            subtitle: "Primary projects across Gurugram, Dwarka Expressway, SPR, Noida and emerging NCR corridors",
            category: "Primary",
            badge: "Off plan",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
            href: "/markets/delhi-ncr-off-plan",
          },
          {
            title: "Dubai property",
            subtitle: "Primary off plan, ready yield, family communities and UAE market access",
            category: "UAE",
            badge: "Global",
            image: realEstateImages[1],
            href: "/markets/dubai-property",
          },
          {
            title: "Goa villas",
            subtitle: "Second homes and managed rental assets in selected micro markets",
            category: "Goa",
            badge: "Lifestyle",
            image: realEstateImages[2],
            href: "/markets/goa-villas",
          },
          {
            title: "Jewar and YEIDA land",
            subtitle: "Airport influenced land and plotted opportunities reviewed with planning context",
            category: "North India",
            badge: "Land",
            image: realEstateImages[3],
            href: "/markets/jewar-yeida-land",
          },
          {
            title: "Baghpat and Haridwar belt",
            subtitle: "Delhi-Dehradun Expressway influenced land, plotted, hospitality and access-led opportunities",
            category: "North India",
            badge: "Corridor",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
            href: "/markets/baghpat-haridwar-belt",
          },
          {
            title: "Neemrana and DMIC",
            subtitle: "Industrial, warehousing and highway-linked land in the Khushkhera-Bhiwadi-Neemrana belt",
            category: "Rajasthan",
            badge: "Industrial",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",
            href: "/markets/neemrana-dmic",
          },
          {
            title: "Dehradun foothills",
            subtitle: "Delhi-Dehradun and Mussoorie access areas, including Kotabagh and Bejunia near Kaladhungi",
            category: "Uttarakhand",
            badge: "Foothills",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
            href: "/markets/dehradun-foothills",
          },
          {
            title: "Dubai free zones",
            subtitle: "Company setup and market entry support for entrepreneurs and trading families",
            category: "Business Setup",
            badge: "Services",
            image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85",
            href: "/services/dubai-free-zone-company-setup",
          },
          {
            title: "France vineyards",
            subtitle: "Available vineyard opportunities for diversification, lifestyle utility and operating-asset exposure",
            category: "France",
            badge: "Selective",
            image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85",
            href: "/markets/france-vineyards",
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Invest With Hacoco",
        title: "Real estate allocation needs deeper review than a listing site can offer.",
        paragraphs: [
          "Good assets are rarely understood through photographs alone. Location depth, title, access, construction quality, yield assumptions, seller intent, permissions and exit liquidity all matter.",
          "We help buyers move from broad interest to a mandate led shortlist across South Delhi, primary off plan projects, Dubai/UAE, Goa, northern land corridors and selective international diversification.",
        ],
        aside:
          "The goal is simple: fewer irrelevant assets, better context and a clearer route to purchase or setup.",
      },
      process: {
        eyebrow: "Simple Process",
        title: "From mandate to investable shortlist.",
        steps: [
          {
            title: "Share",
            copy: "Tell us your budget, preferred market, asset type, risk appetite and reason for buying.",
          },
          {
            title: "Match",
            copy: "We filter property, land or Dubai setup routes against your mandate and practical execution path.",
          },
          {
            title: "Review",
            copy: "You receive a relevant shortlist with next step guidance and professional coordination where needed.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions buyers ask before reviewing options.",
        items: [
          {
            question: "Can I request one specific market only?",
            answer:
              "Yes. You can request only South Delhi, only primary off plan, only Dubai/UAE, only Goa, only North India land, or only vineyard diversification. The process is shaped around your mandate.",
          },
          {
            question: "Can you help with Dubai company setup too?",
            answer:
              "Yes. Hacoco can coordinate free zone company setup support, including activity fit, free zone selection, documentation, visa planning and banking readiness with relevant providers.",
          },
          {
            question: "Do you specialise in land acquisition?",
            answer:
              "Yes. Hacoco has a focused land acquisition capability in northern India, including Baghpat, Haridwar, Neemrana, Jewar, Dehradun, Mussoorie foothills, Kotabagh, Bejunia and other corridors where title, access, planning and hold period need careful review.",
          },
          {
            question: "How do you evaluate off plan property investments?",
            answer:
              "We review developer record, RERA or escrow comfort, land status, launch price against ready stock, payment plan, construction stage, future supply, rental depth and resale liquidity before recommending a project for serious review.",
          },
          {
            question: "Can you help compare Delhi NCR, Goa and Dubai off plan options?",
            answer:
              "Yes. The comparison is built around the buyer's currency, hold period, use case, liquidity needs, risk appetite and whether the completed asset has tenant or resale demand.",
          },
          {
            question: "What makes a land parcel investable?",
            answer:
              "A land parcel needs more than a growth story. We look for access, title comfort, mutation, land use, conversion pathway, road width, zoning, infrastructure timing, local demand and a realistic exit buyer.",
          },
          {
            question: "Do you handle documentation or legal advice directly?",
            answer:
              "Hacoco coordinates the acquisition process and helps frame diligence, but legal, tax, compliance and technical reviews should be completed by qualified professionals appointed by the buyer.",
          },
          {
            question: "Can you help with France vineyard opportunities?",
            answer:
              "Yes, selectively. Vineyard opportunities require specialist legal, tax, agricultural and operating review. We help frame the mandate and coordinate the right review path when suitable opportunities are available.",
          },
          {
            question: "How quickly will I receive options?",
            answer:
              "Clear briefs receive the fastest response. A useful brief includes market, ticket size, asset type, purpose, hold period, preferred timing and any non-negotiables around location or risk.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Investment Requirement",
      title: "Tell us what you are looking for.",
      description:
        "Share your market, budget and buying intent. Hacoco will respond with the next useful step.",
      buttonLabel: "Discuss an Investment",
    },
    formSection: {
      eyebrow: "Investment Requirement",
      title: "Tell us what you are looking for.",
      description:
        "A short brief is enough to begin a direct conversation with Hacoco.",
    },
    form: {
      eyebrow: "Private Acquisition",
      title: "Discuss your requirement",
      description:
        "Share the essentials. Detailed qualification can follow directly.",
      submitLabel: "Send Requirement",
      leadTag: "INV-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, placeholder: "+91 / +971 / +44" },
        {
          name: "requirement",
          label: "What are you looking for?",
          type: "select",
          required: true,
          options: [
            "Residential property",
            "Land",
            "Commercial property",
            "Off market opportunity",
            "Off plan property",
            "Not decided yet",
          ],
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["INR 5 Cr to 10 Cr", "INR 10 Cr to 25 Cr", "INR 25 Cr to 50 Cr", "INR 50 Cr+"],
        },
        {
          name: "market",
          label: "Market",
          type: "select",
          required: true,
          options: ["Delhi", "NCR", "Dubai", "Goa", "Land in North India", "Other"],
        },
        {
          name: "message",
          label: "Anything else we should know?",
          type: "textarea",
          placeholder: "Location, timing, intended use or one non-negotiable.",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Request Received",
      title: "Your property brief is in.",
      message:
        "We will review your preferences and respond with relevant real estate, land, off plan, Dubai setup or diversification options.",
    },
    footer: {
      copy: "Private real estate investment and acquisition across Delhi, NCR, Dubai and selected markets.",
      email: "shiv@hacococapital.com",
      contactLabel: "Private acquisition desk",
    },
  },
  "hacocoadvisory.com": {
    slug: "advisory",
    vertical: "commodities",
    primaryDomain: "hacocoadvisory.com",
    hostAliases: [
      "www.hacocoadvisory.com",
      "hacocoadvisory.local",
      "hacocoadvisory.localhost",
    ],
    brand: {
      name: "Hacoco Advisory",
      eyebrow: "Global Commodity Trade",
    },
    seo: {
      title: "Commodity Trading and Crude Oil Sourcing | Hacoco Advisory",
      description:
        "Commodity trading, verified counterparty sourcing, and trade facilitation for crude oil, refined petroleum products, food grains, fertilizers, and pesticides.",
      keywords: [
        "commodity trading advisory",
        "crude oil sourcing",
        "refined petroleum products sourcing",
        "commodity trade facilitation",
        "food grains trading",
        "fertilizer sourcing",
        "pesticide sourcing",
        "verified commodity counterparties",
        "cross-border commodity trade",
        "LC SBLC commodity transactions",
      ],
      ogImage: "/og-commodities.jpg?v=20260728",
    },
    navigation: [
      { label: "Commodities", href: "#commodities" },
      { label: "How We Operate", href: "#operating-models" },
      { label: "Risk Control", href: "#risk-control" },
      { label: "Process", href: "#process" },
      { label: "Trade Desk", href: "#lead-form" },
    ],
    navCtaLabel: "Submit Requirement",
    hero: {
      eyebrow: "Commodities sourcing and trade facilitation",
      title: "Commodity trade, built on trust.",
      description:
        "Crude oil and refined products lead our sourcing and facilitation desk. We also cover food grains, fertilizers, and pesticides across select trade routes.",
      ctas: [
        { label: "Submit a Trade Requirement", href: "#lead-form", variant: "primary" },
        { label: "See How We Operate", href: "#operating-models", variant: "secondary" },
      ],
      metrics: [
        { value: "04", label: "Commodity categories" },
        { value: "02", label: "Distinct operating models" },
        { value: "01", label: "Disciplined trade desk" },
      ],
      image: {
        src: commodityImages.oil,
        alt: "Bulk cargo vessel at an industrial port",
        eyebrow: "Lead Category",
        captionTitle: "Crude oil and refined products",
        captionText:
          "Verified counterparty sourcing and structured trade facilitation for serious mandates.",
      },
    },
    trustStrip: [...commodityTrustStrip],
    sections: {
      whyHacoco: {
        eyebrow: "Why Trade Discipline Matters",
        title: "A credible offer is more than a price and a document.",
        paragraphs: [
          "Cross-border commodity transactions can stall on counterparty capability, inconsistent documents, or payment terms that do not match the commercial reality of the deal.",
          "We help buyers and sellers qualify the mandate, test the transaction path, and engage counterparties with greater clarity before time and credibility are spent.",
        ],
        aside:
          "No introduction removes the need for independent legal, financial, technical, sanctions, and compliance review.",
      },
      process: {
        eyebrow: "Trade Process",
        title: "From requirement to credible counterparty.",
        steps: [
          {
            title: "Consult",
            copy: "We capture product specifications, volume, delivery basis, route, timeline, and commercial position.",
          },
          {
            title: "Frame",
            copy: "We determine the operating model and align the mandate, KYC, supporting documents, and proposed payment path.",
          },
          {
            title: "Source",
            copy: "We identify suitable counterparties and support a controlled progression through introductions, documents, and next steps.",
          },
        ],
      },
      faq: {
        eyebrow: "Trade Desk FAQ",
        title: "Questions serious counterparties ask first.",
        items: [
          {
            question:
              "Does Hacoco trade crude oil and refined products directly?",
            answer:
              "Not by default. For crude oil and refined products, Hacoco primarily sources qualified counterparties and facilitates the trade. Hacoco acts as principal only when expressly agreed in writing.",
          },
          {
            question: "Which commodities can Hacoco trade directly?",
            answer:
              "Select food grains such as rice may be handled directly as principal, subject to product, volume, route, compliance, and commercial acceptance.",
          },
          {
            question: "What should a commodity requirement include?",
            answer:
              "Include the product and specification, volume and frequency, preferred origin and destination, delivery basis, timeline, your role, and proposed payment terms.",
          },
          {
            question: "Does Hacoco work with buyer and seller mandates?",
            answer:
              "Yes, when the mandate is authorised and its authority can be verified. KYC, company information, and evidence of the mandate are reviewed before a serious introduction.",
          },
          {
            question: "How are LC and SBLC terms handled?",
            answer:
              "Hacoco can help align the proposed instrument with the transaction sequence. The parties, their banks, and their appointed legal or financial advisors remain responsible for reviewing, issuing, accepting, and performing under any LC, SBLC, or other payment instrument.",
          },
          {
            question: "Does an introduction guarantee a completed trade?",
            answer:
              "No. Every transaction remains subject to contract, due diligence, compliance, documentation, and performance by the buyer and seller. An introduction does not replace independent legal, financial, technical, sanctions, or compliance review.",
          },
        ],
      },
    },
    commodities: {
      categories: [
        {
          number: "01",
          title: "Crude Oil & Refined Products",
          mode: "Sourcing & facilitation",
          description:
            "Our lead category. We work from qualified mandates to source credible buyers or sellers and help structure the path toward a workable transaction.",
          image: commodityImages.oil,
          featured: true,
        },
        {
          number: "02",
          title: "Food Grains",
          mode: "Direct trading available",
          description:
            "Select food grains, including rice, may be traded directly by Hacoco as principal. Other enquiries are assessed by product and route.",
          image: commodityImages.grain,
        },
        {
          number: "03",
          title: "Fertilizers",
          mode: "Sourcing & facilitation",
          description:
            "Counterparty sourcing and trade facilitation for defined fertilizer requirements, subject to specification, market, and compliance review.",
          image: commodityImages.fertilizer,
        },
        {
          number: "04",
          title: "Pesticides",
          mode: "Sourcing & facilitation",
          description:
            "Trade introductions for crop protection requirements where product registration, destination rules, and supplier capability are clear.",
          image: commodityImages.cropProtection,
        },
      ],
      serviceModels: [
        {
          number: "01",
          eyebrow: "Principal Model",
          title: "Direct trading",
          description:
            "For selected, easier-to-handle commodities, Hacoco may contract as the buyer or seller and execute the trade directly as principal.",
          appliesTo:
            "Currently relevant to select food grains such as rice, subject to product, volume, route, and commercial acceptance.",
          relationship:
            "Your commercial contract is directly with Hacoco.",
        },
        {
          number: "02",
          eyebrow: "Facilitation Model",
          title: "Sourcing & trade facilitation",
          description:
            "Hacoco qualifies the requirement, sources suitable counterparties, and supports the transaction path without acting as principal.",
          appliesTo:
            "The primary model for crude oil and refined products, fertilizers, pesticides, and other complex cross-border mandates.",
          relationship:
            "The buyer and seller contract with each other. Hacoco facilitates the engagement.",
        },
      ],
      riskControls: [
        {
          number: "A",
          title: "Counterparty credibility",
          description:
            "We look for evidence that the buyer can buy, the seller can supply, and the people presenting the mandate are authorised to do so.",
        },
        {
          number: "B",
          title: "Document consistency",
          description:
            "Product, volume, route, pricing basis, and procedure need to align across the mandate, offer, and supporting documents.",
        },
        {
          number: "C",
          title: "Payment instrument fit",
          description:
            "LC, SBLC, and other instrument language must suit the transaction sequence and be reviewed by the parties and their banks.",
        },
      ],
    },
    ctaBand: {
      eyebrow: "Trade Desk",
      title: "A serious commodity requirement deserves a serious first review.",
      description:
        "Share the product, volume, route, timing, and your role in the transaction. We will assess fit before proposing a next step.",
      buttonLabel: "Submit a Trade Requirement",
    },
    formSection: {
      eyebrow: "Start a Trade Conversation",
      title: "Tell us what needs to move, and where.",
      description:
        "Complete the short mandate form. Clear requirements receive the fastest and most useful response.",
    },
    form: {
      eyebrow: "Commodity Requirement",
      title: "Submit your trade brief",
      description:
        "For buyers, sellers, and authorised mandates seeking direct trade or verified counterparty sourcing.",
      submitLabel: "Send Trade Requirement",
      leadTag: "ADV-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        {
          name: "company",
          label: "Company",
          type: "text",
          required: true,
          placeholder: "Company or trading entity",
        },
        {
          name: "requirement",
          label: "Commodity requirement",
          type: "select",
          required: true,
          options: [
            "Crude Oil & Refined Products",
            "Food Grains",
            "Fertilizers",
            "Pesticides",
            "Other",
          ],
        },
        {
          name: "role",
          label: "Your role",
          type: "select",
          required: true,
          options: ["Buyer", "Seller", "Buyer mandate", "Seller mandate", "Other"],
        },
        {
          name: "dealVolume",
          label: "Deal size / Volume",
          type: "text",
          required: true,
          placeholder: "e.g. 50,000 MT or 2 million barrels per month",
          fullWidth: true,
        },
        {
          name: "originDestination",
          label: "Origin / Destination country",
          type: "text",
          required: true,
          placeholder: "Preferred origin and delivery destination",
          fullWidth: true,
        },
        {
          name: "notes",
          label: "Specifications and notes",
          type: "textarea",
          placeholder: "Add product specifications, delivery basis, timing, target terms, and any mandate details.",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Requirement Received",
      title: "Your trade brief is with our desk.",
      message:
        "A member of Hacoco Advisory will review the commodity, volume, route, and commercial fit before responding with an appropriate next step.",
    },
    footer: {
      copy: "Direct trading for selected commodities. Verified counterparty sourcing and trade facilitation for complex mandates.",
      email: "shiv@hacocoadvisory.com",
      contactLabel: "Commodity trade desk",
    },
  },
};

export const defaultDomain = "investwithhacoco.com";

export function getSiteConfigByDomain(domain: string) {
  const direct = siteConfigs[domain];

  if (direct) {
    return direct;
  }

  const aliasMatch = Object.values(siteConfigs).find((site) =>
    site.hostAliases.includes(domain),
  );

  return aliasMatch ?? siteConfigs[defaultDomain];
}
