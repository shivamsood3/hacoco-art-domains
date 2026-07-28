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
};

export type ShowcaseItem = {
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  image?: string;
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
      eyebrow: "Private Real Estate Capital",
    },
    seo: {
      title: "Hacoco Capital | Private Real Estate Investment Access",
      description:
        "Private real estate investment access for HNIs, family offices, founders, and NRIs seeking curated residential and commercial opportunities in Delhi NCR.",
      keywords: [
        "private real estate investment",
        "Delhi NCR real estate investment",
        "off market property Delhi NCR",
        "commercial property investment Delhi",
        "NRI property investment India",
        "HNI real estate advisory",
      ],
      ogImage: realEstateImages[0],
    },
    navigation: [
      { label: "Opportunities", href: "#featured-works" },
      { label: "Approach", href: "#focus" },
      { label: "Process", href: "#process" },
      { label: "Request Access", href: "#lead-form" },
    ],
    navCtaLabel: "Request Access",
    hero: {
      eyebrow: "Private real estate capital access",
      title: "Curated real estate opportunities for serious capital.",
      description:
        "For HNIs, NRIs, founders, and family offices looking at high quality residential, commercial, and land linked opportunities across Delhi NCR.",
      ctas: [
        { label: "Request Private Access", href: "#lead-form", variant: "primary" },
        { label: "View Approach", href: "#focus", variant: "secondary" },
      ],
      metrics: [
        { value: "Private", label: "Off market and selective mandates" },
        { value: "Reviewed", label: "Asset and documentation led screening" },
        { value: "Focused", label: "Shortlists built around capital fit" },
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
      eyebrow: "Private Access",
      title: "If you are deploying serious capital, start with a clear mandate.",
      description:
        "Share your real estate brief and we will respond with the most relevant next step.",
      buttonLabel: "Request Private Access",
    },
    formSection: {
      eyebrow: "Real Estate Brief",
      title: "Share your acquisition mandate.",
      description:
        "A concise mandate helps us qualify location, ticket size, asset type, and urgency.",
    },
    form: {
      eyebrow: "Capital Brief",
      title: "Request private real estate access",
      description:
        "For buyers and investors seeking curated real estate opportunities.",
      submitLabel: "Request Private Access",
      leadTag: "CAP-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        { name: "location", label: "Preferred location", type: "text", required: true, placeholder: "South Delhi, Gurgaon, Noida, etc." },
        {
          name: "assetType",
          label: "Asset type",
          type: "select",
          required: true,
          options: ["Residential", "Commercial", "Land or redevelopment", "Mixed mandate"],
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["INR 2 Cr to 5 Cr", "INR 5 Cr to 10 Cr", "INR 10 Cr to 25 Cr", "INR 25 Cr+"],
        },
        {
          name: "message",
          label: "Mandate notes",
          type: "textarea",
          placeholder: "Share timeline, preferred micro market, return expectation, or end use requirement.",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Access Requested",
      title: "Your real estate brief is in review.",
      message:
        "A Hacoco Capital advisor will review your mandate and respond with an appropriate next step.",
    },
    footer: {
      copy: "Private real estate capital access for clients who prefer clarity before site visits.",
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
      eyebrow: "South Delhi Real Estate",
    },
    seo: {
      title: "Invest With Hacoco | South Delhi Real Estate Investment",
      description:
        "Curated South Delhi real estate investment opportunities across Greater Kailash, Defence Colony, Vasant Vihar, Panchsheel Park, Hauz Khas, and nearby prime markets.",
      keywords: [
        "South Delhi real estate",
        "South Delhi property investment",
        "builder floors South Delhi",
        "Greater Kailash property",
        "Defence Colony property",
        "Vasant Vihar real estate",
      ],
      ogImage: realEstateImages[1],
    },
    navigation: [
      { label: "Opportunities", href: "#featured-works" },
      { label: "Why Us", href: "#focus" },
      { label: "Blog", href: "/blog" },
      { label: "Get Options", href: "#lead-form" },
    ],
    navCtaLabel: "Get Options",
    hero: {
      eyebrow: "Curated South Delhi property options",
      title: "Tell us your budget. We will shortlist South Delhi real estate worth reviewing.",
      description:
        "For buyers and investors who want relevant properties in prime Delhi locations without scrolling through stale listings.",
      formAboveFold: true,
      ctas: [
        { label: "Get Property Options", href: "#lead-form", variant: "primary" },
        { label: "Read Market Guides", href: "/blog", variant: "secondary" },
      ],
      metrics: [
        { value: "South Delhi", label: "Prime residential and investment markets" },
        { value: "Matched", label: "By budget, location, and use case" },
        { value: "Curated", label: "Shortlists instead of listing overload" },
      ],
      image: {
        src: realEstateImages[1],
        alt: "Modern luxury home interior",
        eyebrow: "Property Access",
        captionTitle: "South Delhi properties matched to brief",
        captionText:
          "A faster route to residential floors, bungalows, redevelopment assets, and investment grade properties.",
      },
    },
    trustStrip: [...realEstateTrustStrip],
    sections: {
      acquisitionFocus: {
        eyebrow: "What You Can Review",
        title: "A focused route into South Delhi real estate.",
        description:
          "Built for buyers who care about location quality, clean context, and a practical buying process.",
        items: [
          {
            kicker: "Residential",
            title: "Builder floors and homes",
            copy: "Options across prime South Delhi colonies based on size, budget, parking, and lifestyle fit.",
          },
          {
            kicker: "Investment",
            title: "Yield and appreciation",
            copy: "Review assets through rental demand, entry price, redevelopment potential, and exit comfort.",
          },
          {
            kicker: "NRI",
            title: "Remote buyer support",
            copy: "A more organized process for NRIs who need local filtering before a property visit.",
          },
        ],
      },
      showcase: {
        eyebrow: "Property Categories",
        title: "South Delhi real estate options matched to your buying brief.",
        description:
          "Representative categories for serious buyers in prime Delhi micro markets.",
        items: [
          {
            title: "Greater Kailash floors",
            subtitle: "Premium residential floors with strong end use demand",
            category: "GK 1 and GK 2",
            badge: "Prime",
            image: realEstateImages[0],
          },
          {
            title: "Defence Colony homes",
            subtitle: "Central location depth with strong resale familiarity",
            category: "Defence Colony",
            badge: "High demand",
            image: realEstateImages[1],
          },
          {
            title: "Vasant Vihar assets",
            subtitle: "Low density luxury housing and embassy side demand",
            category: "Vasant Vihar",
            badge: "Luxury",
            image: realEstateImages[2],
          },
          {
            title: "Redevelopment plots",
            subtitle: "Selective mandates for buyers who can evaluate structure and time",
            category: "South Delhi",
            badge: "Selective",
            image: realEstateImages[3],
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Invest With Hacoco",
        title: "South Delhi property buying needs sharper filtering than a listing site can offer.",
        paragraphs: [
          "Many good South Delhi properties are not evaluated well through photos alone. Colony, plot orientation, parking, floor height, documentation, and seller intent all matter.",
          "We help buyers move from broad interest to a shortlist that matches budget, location preference, asset type, and practical buying readiness.",
        ],
        aside:
          "The goal is simple: fewer irrelevant properties, better conversations, and a clearer route to purchase.",
      },
      process: {
        eyebrow: "Simple Process",
        title: "From budget to shortlist.",
        steps: [
          {
            title: "Share",
            copy: "Tell us your budget, preferred colonies, and reason for buying.",
          },
          {
            title: "Match",
            copy: "We filter South Delhi real estate options against your requirement.",
          },
          {
            title: "Review",
            copy: "You receive a relevant property shortlist and next step guidance.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions buyers ask before reviewing South Delhi property options.",
        items: [
          {
            question: "Can I request properties in specific South Delhi colonies?",
            answer:
              "Yes. You can name colonies such as Greater Kailash, Defence Colony, Vasant Vihar, Panchsheel Park, Hauz Khas, Anand Niketan, or other preferred micro markets.",
          },
          {
            question: "Can you help with both end use and investment properties?",
            answer:
              "Yes. The shortlist can be shaped around self use, rental yield, capital appreciation, redevelopment potential, or a blended requirement.",
          },
          {
            question: "Will I receive every property available in the market?",
            answer:
              "No. The purpose is to filter, not flood. You receive a smaller set of South Delhi real estate options that better match your budget and intent.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Property Shortlist",
      title: "Ready for South Delhi property options that match your actual brief?",
      description:
        "Share your budget, preferred colonies, and buying intent. We will respond with a more useful next step than a generic listing feed.",
      buttonLabel: "Get Property Options",
    },
    formSection: {
      eyebrow: "Receive Property Options",
      title: "Tell us what you want to buy.",
      description:
        "A short real estate brief helps us respond with better South Delhi property options.",
    },
    form: {
      eyebrow: "Property Brief",
      title: "Receive curated property options",
      description:
        "For direct buyers seeking matched South Delhi real estate opportunities.",
      submitLabel: "Get Property Options",
      leadTag: "INV-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        {
          name: "preferredColonies",
          label: "Preferred colonies",
          type: "text",
          required: true,
          placeholder: "GK, Defence Colony, Vasant Vihar, Hauz Khas, etc.",
          fullWidth: true,
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["INR 2 Cr to 5 Cr", "INR 5 Cr to 10 Cr", "INR 10 Cr to 25 Cr", "INR 25 Cr+"],
        },
        {
          name: "purpose",
          label: "Purpose",
          type: "select",
          required: true,
          options: ["Self use", "Investment", "Rental income", "Redevelopment"],
        },
      ],
    },
    success: {
      eyebrow: "Request Received",
      title: "Your property brief is in.",
      message:
        "We will review your preferences and respond with relevant South Delhi real estate options.",
    },
    footer: {
      copy: "Curated South Delhi real estate opportunities for buyers who want relevance, trust, and speed.",
      email: "shiv@hacococapital.com",
      contactLabel: "Buyer inquiries",
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
      ogImage: "/og-commodities.jpg",
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
