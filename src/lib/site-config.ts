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

export type SiteConfig = {
  slug: "capital" | "investor" | "advisory";
  vertical: "real-estate" | "art";
  primaryDomain: string;
  hostAliases: string[];
  brand: {
    name: string;
    eyebrow: string;
  };
  seo: {
    title: string;
    description: string;
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
  calendly?: {
    url: string;
  };
  footer: {
    copy: string;
    email: string;
    contactLabel: string;
  };
};

const artHeroImage =
  "https://hacoco.art/cdn/shop/files/Interior_Mosaic_by_Rhea_Maheshwari.jpg?v=1770199791&width=1066";

const artOgImage =
  "https://hacoco.art/cdn/shop/files/3horses_AK.jpg?v=1769326096&width=1066";

const paintingGallery = [
  "https://hacoco.art/cdn/shop/files/TailofTails_NH.jpg?v=1776419622&width=1066",
  "https://hacoco.art/cdn/shop/files/ashish_K_1.jpg?v=1769535307&width=1066",
  "https://hacoco.art/cdn/shop/files/YellowMosaicScape_OilonCanvas_Ceramicmosaiconwood_30inchdiameter.jpg?v=1770200049&width=1066",
  "https://hacoco.art/cdn/shop/files/OrangeMosaicScape_OilonCanvas_Ceramicmosaiconwood_36inchdiameter.jpg?v=1770200022&width=1066",
  "https://hacoco.art/cdn/shop/files/Interior_Mosaic_by_Rhea_Maheshwari.jpg?v=1770199791&width=1066",
  "https://hacoco.art/cdn/shop/files/Divine_Guidance2024_Rhea_Maheshwari_bb439e27-12de-43eb-a79c-98d6195d4848.jpg?v=1770199600&width=1066",
] as const;

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

const artTrustStrip = [
  {
    kicker: "Discretion",
    title: "Private access",
    copy: "Every inquiry is handled discreetly and matched with intent.",
  },
  {
    kicker: "Curation",
    title: "Curated selection",
    copy: "A narrower shortlist instead of an overwhelming catalogue.",
  },
  {
    kicker: "Execution",
    title: "Guided acquisition",
    copy: "Clear next steps from brief to acquisition.",
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
    vertical: "art",
    primaryDomain: "hacocoadvisory.com",
    hostAliases: [
      "www.hacocoadvisory.com",
      "hacocoadvisory.local",
    ],
    brand: {
      name: "Hacoco Advisory",
      eyebrow: "Private Art Advisory",
    },
    seo: {
      title: "Hacoco Advisory | Bespoke Art Advisory and Private Sourcing",
      description:
        "Private art advisory for collection building, bespoke sourcing, and private sales. Book a consultation with Hacoco Advisory for discreet, high context guidance.",
      ogImage: artOgImage,
    },
    navigation: [
      { label: "Works", href: "#featured-works" },
      { label: "Advisory", href: "#focus" },
      { label: "Process", href: "#process" },
      { label: "Consultation", href: "#lead-form" },
    ],
    navCtaLabel: "Book Consultation",
    hero: {
      eyebrow: "Bespoke sourcing and private guidance",
      title: "Private art advisory for buyers who want stronger judgment and discretion.",
      description:
        "For collectors and buyers who need context, conviction, and a more bespoke art acquisition process.",
      ctas: [
        { label: "Book a Private Consultation", href: "#lead-form", variant: "primary" },
        { label: "Speak to Hacoco Advisory", href: "#lead-form", variant: "secondary" },
      ],
      metrics: [
        { value: "Bespoke", label: "Collection or sourcing led support" },
        { value: "Private", label: "Discreet handling and access" },
        { value: "Clear", label: "A simple advisory workflow" },
      ],
      image: {
        src: artHeroImage,
        alt: "Painting from the Hacoco collection",
        eyebrow: "Private Art Access",
        captionTitle: "Context rich sourcing",
        captionText:
          "Artwork imagery selected from the Hacoco paintings collection.",
      },
    },
    trustStrip: [...artTrustStrip],
    sections: {
      showcase: {
        eyebrow: "Selected Works",
        title: "A visual reference from the Hacoco paintings collection.",
        description: "Used here to frame taste, direction, and sourcing quality.",
        items: [
          {
            title: "Interior Mosaic",
            subtitle: "Rhea Maheshwari",
            category: "Painting",
            badge: "Request",
            image: paintingGallery[4],
          },
          {
            title: "Divine Guidance",
            subtitle: "Rhea Maheshwari",
            category: "Painting",
            badge: "Request",
            image: paintingGallery[5],
          },
          {
            title: "Yellow Mosaic Scape",
            subtitle: "Nupur Kundu",
            category: "Painting",
            badge: "Available",
            image: paintingGallery[2],
          },
          {
            title: "Orange Mosaic Scape",
            subtitle: "Nupur Kundu",
            category: "Painting",
            badge: "Available",
            image: paintingGallery[3],
          },
        ],
      },
      advisoryAreas: {
        eyebrow: "Advisory Areas",
        title: "Where private art advisory creates real value.",
        description:
          "Designed for clients who want guidance, not just access.",
        items: [
          {
            kicker: "Collection building",
            title: "Collection building",
            copy: "Build with stronger coherence, not just isolated purchases.",
          },
          {
            kicker: "Sourcing",
            title: "Bespoke sourcing",
            copy: "Source around a style, thesis, artist, or collecting brief.",
          },
          {
            kicker: "Private sales",
            title: "Private opportunities",
            copy: "For conversations where discretion, access, and fit matter most.",
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Advisory Matters",
        title: "The best art decisions are rarely driven by availability alone.",
        paragraphs: [
          "Real value sits in framing the brief properly: what belongs in the collection, what deserves patience, and where bespoke sourcing can add an edge.",
          "Advisory separates taste from impulse and opportunity from visibility. That distinction matters more as budgets rise and collections become more intentional.",
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A consultation first workflow.",
        steps: [
          {
            title: "Consult",
            copy: "We start with your requirement, budget, and preferences.",
          },
          {
            title: "Frame",
            copy: "We frame the brief around sourcing, collecting, or advisory support.",
          },
          {
            title: "Source",
            copy: "We return with relevant options and decision support.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Private Consultation",
      title: "If you need judgment, discretion, and bespoke sourcing, start with a private advisory brief.",
      description:
        "Share the contours of your requirement and we will shape the right next conversation around it.",
      buttonLabel: "Book a Private Consultation",
    },
    formSection: {
      eyebrow: "Advisory Contact",
      title: "Start with a short advisory brief.",
      description:
        "A concise brief helps us shape the sourcing or advisory conversation with more precision.",
    },
    form: {
      eyebrow: "Advisory Brief",
      title: "Speak to Hacoco Advisory",
      description:
        "For bespoke sourcing, collection building, and discreet advisory conversations.",
      submitLabel: "Book a Private Consultation",
      leadTag: "ADV-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        {
          name: "requirement",
          label: "Requirement",
          type: "select",
          required: true,
          options: ["Collection building", "Bespoke sourcing", "Private sale", "Need advisory guidance"],
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["Under INR 5L", "INR 5L to 15L", "INR 15L to 50L", "INR 50L+"],
        },
        {
          name: "preferredStyle",
          label: "Preferred style",
          type: "text",
          placeholder: "Abstract, figurative, sculptural, monochrome, etc.",
          fullWidth: true,
        },
        {
          name: "notes",
          label: "Notes",
          type: "textarea",
          placeholder: "Add timing, artist references, space context, or advisory priorities.",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Consultation Requested",
      title: "Your advisory request is in.",
      message:
        "A member of Hacoco Advisory will review your brief and respond with an appropriate next step shortly.",
    },
    footer: {
      copy: "Private art advisory for collection building, sourcing, and discreet acquisition support.",
      email: "shiv@hacocoadvisory.com",
      contactLabel: "Advisory desk",
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
