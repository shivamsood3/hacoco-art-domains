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

export type ShowcaseArtwork = {
  title: string;
  artist: string;
  medium: string;
  priceBand?: string;
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
      artworks: ShowcaseArtwork[];
    };
    whyHacoco?: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      aside?: string;
    };
    audience?: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    advisoryAreas?: {
      eyebrow: string;
      title: string;
      description?: string;
      items: ContentCard[];
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

const sharedArtworkImage =
  "https://hacoco.art/cdn/shop/files/3horses_AK_6b9a0313-1424-426d-93fe-9f1cdb910eb6.jpg?v=1769334548";

const logoArtworkImage =
  "https://hacoco.art/cdn/shop/files/hacoco_favicon_81adcae8-2262-4b16-ac35-0fb2035ccace.jpg?crop=center&height=512&v=1770054236&width=512";

const sharedTrustStrip = [
  {
    kicker: "Discretion",
    title: "Private deal flow over public noise",
    copy: "Every inquiry is handled with confidentiality, fit screening, and curated alignment.",
  },
  {
    kicker: "Curation",
    title: "Selection shaped by taste and strategy",
    copy: "We focus on contemporary art that can live with both cultural relevance and collecting intent.",
  },
  {
    kicker: "Execution",
    title: "A guided acquisition path",
    copy: "Shortlists, context, pricing guidance, and follow-through handled in one private process.",
  },
] as const;

export const siteConfigs: Record<string, SiteConfig> = {
  "hacococapital.com": {
    slug: "capital",
    primaryDomain: "hacococapital.com",
    hostAliases: ["www.hacococapital.com", "hacococapital.local"],
    brand: {
      name: "Hacoco Capital",
      eyebrow: "Private Art Capital",
    },
    seo: {
      title: "Hacoco Capital | Art as Capital, Curated for Long-Term Collectors",
      description:
        "Build a considered contemporary art collection with Hacoco Capital. Discreet access for HNIs, NRIs, and serious collectors seeking long-term art acquisition strategy.",
      ogImage: sharedArtworkImage,
    },
    navigation: [
      { label: "Why Collect", href: "#why-collect" },
      { label: "Themes", href: "#themes" },
      { label: "Process", href: "#process" },
      { label: "Request Access", href: "#lead-form" },
    ],
    navCtaLabel: "Private Access",
    hero: {
      eyebrow: "Collection-led capital allocation",
      title: "Art as capital, approached with patience, context, and long-term intent.",
      description:
        "Hacoco Capital helps discerning buyers build contemporary art collections that hold cultural credibility and acquisition discipline. This is not speculative flipping. It is thoughtful position-building in art.",
      ctas: [
        { label: "Request Private Access", href: "#lead-form", variant: "primary" },
        { label: "Build Your Collection", href: "#process", variant: "secondary" },
      ],
      metrics: [
        { value: "Private", label: "Invite-led access to acquisition opportunities" },
        { value: "Curated", label: "Selection across emerging and mid-career artists" },
        { value: "Guided", label: "Hands-on support from brief to acquisition" },
      ],
      image: {
        src: sharedArtworkImage,
        alt: "Curated artwork from Hacoco",
        captionTitle: "Collection building with conviction",
        captionText:
          "Selected imagery sourced from Hacoco’s art platforms for editorial presentation.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      collectWhy: {
        eyebrow: "Why Collect Art Now",
        title: "A serious collection can function as both cultural expression and disciplined capital deployment.",
        items: [
          {
            kicker: "Cultural scarcity",
            title: "Finite works, selective access",
            copy: "Strong contemporary works do not behave like mass inventory. Quality supply is constrained, and access often improves through relationship-led sourcing.",
          },
          {
            kicker: "Portfolio character",
            title: "A different asset behavior",
            copy: "For many collectors, art sits outside ordinary market correlation. The appeal is not just upside, but a richer ownership profile rooted in culture and stewardship.",
          },
          {
            kicker: "Legacy",
            title: "Assets you can live with",
            copy: "Unlike abstract financial exposure, a collection can be inhabited, discussed, inherited, and shaped over time with visible personal meaning.",
          },
        ],
      },
      themes: {
        eyebrow: "Collection Themes",
        title: "Three acquisition lanes, curated to your collecting horizon.",
        description:
          "Each lane is shaped around taste, conviction, and budget discipline rather than volume.",
        items: [
          {
            kicker: "Emerging",
            title: "Emerging voices",
            copy: "For collectors who want access to younger practices with strong visual language and room for long-term discovery.",
          },
          {
            kicker: "Mid-career",
            title: "Mid-career depth",
            copy: "For buyers seeking stronger market context, developed bodies of work, and more established artistic positioning.",
          },
          {
            kicker: "Curated",
            title: "Bespoke thematic curation",
            copy: "For those building around a narrative, region, medium, or spatial setting rather than isolated single-piece buying.",
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Hacoco",
        title: "A quieter, more deliberate acquisition experience.",
        paragraphs: [
          "We are intentionally selective in how opportunities are shown and matched. That protects both buyer quality and the integrity of the collection-building process.",
          "Our role is to help filter, contextualize, and sequence decisions so that each acquisition fits your collecting thesis, spatial reality, and budget discipline.",
        ],
        aside:
          "No inflated urgency. No borrowed prestige. Just considered art selection, credible guidance, and discreet execution.",
      },
      audience: {
        eyebrow: "Who This Is For",
        title: "Designed for buyers who want more than casual browsing.",
        items: [
          "HNIs and founders building a first serious art collection with advisory support.",
          "NRIs seeking guided access to contemporary Indian art with a trusted local partner.",
          "Seasoned collectors adding selectively rather than browsing broad marketplaces.",
          "Family offices or private principals looking for a culturally literate acquisition channel.",
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A private acquisition flow built for clarity.",
        steps: [
          {
            title: "Brief",
            copy: "We understand your location, collecting interest, budget range, and whether you are building around a theme or a first acquisition.",
          },
          {
            title: "Curation",
            copy: "A focused shortlist is prepared around your taste, confidence level, and collecting horizon.",
          },
          {
            title: "Selection",
            copy: "We discuss fit, context, and acquisition logic so decisions feel considered rather than rushed.",
          },
          {
            title: "Execution",
            copy: "Once aligned, we help move the work through to final acquisition and next-step collection planning.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Private Access",
      title: "Build a collection that carries both cultural presence and strategic patience.",
      description:
        "Share your brief and we will return only with relevant art acquisition options.",
      buttonLabel: "Request Private Access",
    },
    formSection: {
      eyebrow: "Request Access",
      title: "Tell us how you want to begin collecting.",
      description:
        "We use this brief to prepare a more relevant first conversation and curate suitable opportunities.",
    },
    form: {
      eyebrow: "Capital Brief",
      title: "Private collection request",
      description:
        "For HNIs, NRIs, collectors, and buyers approaching art with long-term intent.",
      submitLabel: "Request Private Access",
      leadTag: "CAP-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        { name: "location", label: "Location", type: "text", required: true, placeholder: "City, Country" },
        {
          name: "collectingInterest",
          label: "Collecting interest",
          type: "select",
          required: true,
          options: ["Emerging artists", "Mid-career artists", "Theme-led curation", "Need guidance"],
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["Under INR 5L", "INR 5L - 15L", "INR 15L - 50L", "INR 50L+"],
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          placeholder: "What kind of collection are you looking to build?",
          fullWidth: true,
        },
      ],
    },
    success: {
      eyebrow: "Access Requested",
      title: "Your request is now under private review.",
      message:
        "A Hacoco Capital advisor will review your collecting brief and reach out with a discreet next step.",
    },
    footer: {
      copy: "Private art acquisition for collectors who prefer cultural depth over noise.",
      email: "capital@hacococapital.com",
      contactLabel: "Private collection desk",
    },
  },
  "investwithhacoco.com": {
    slug: "investor",
    primaryDomain: "investwithhacoco.com",
    hostAliases: ["www.investwithhacoco.com", "investwithhacoco.local"],
    brand: {
      name: "Invest With Hacoco",
      eyebrow: "Curated Art Acquisition",
    },
    seo: {
      title: "Invest With Hacoco | Receive Curated Art Buying Opportunities",
      description:
        "Get direct access to curated art buying opportunities through Hacoco. Share your style, budget, and intended use to receive available works matched to your brief.",
      ogImage: sharedArtworkImage,
    },
    navigation: [
      { label: "Acquire", href: "#acquire" },
      { label: "Featured Works", href: "#featured-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Get Options", href: "#lead-form" },
    ],
    navCtaLabel: "Get Options",
    hero: {
      eyebrow: "The conversion-led acquisition page",
      title: "Tell us what you want to buy. We will return with curated art options.",
      description:
        "For buyers who already want relevant art opportunities, not endless browsing. Share your style preference, budget range, and intended use. We respond with selected available works.",
      formAboveFold: true,
      ctas: [
        { label: "Get Curated Art Options", href: "#lead-form", variant: "primary" },
        { label: "Receive Available Works", href: "#featured-works", variant: "secondary" },
      ],
      metrics: [
        { value: "Fast", label: "Above-the-fold inquiry flow for immediate conversion" },
        { value: "Matched", label: "Shortlists based on style, usage, and budget" },
        { value: "Relevant", label: "No generic catalogue overload" },
      ],
      image: {
        src: sharedArtworkImage,
        alt: "Selected Hacoco artwork",
        captionTitle: "Available works, curated to brief",
        captionText: "Visuals sourced from Hacoco’s art platforms.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      acquisitionFocus: {
        eyebrow: "What You Can Acquire",
        title: "A focused route into emerging and established contemporary works.",
        description:
          "This page is built for intent-rich buyers who want relevant options quickly.",
        items: [
          {
            kicker: "Emerging",
            title: "Early conviction opportunities",
            copy: "For buyers who want strong visual language and promising younger practices with room to grow.",
          },
          {
            kicker: "Established",
            title: "Recognizable market confidence",
            copy: "For clients who prefer artists with greater audience familiarity, stronger references, or deeper placement context.",
          },
          {
            kicker: "Use-led",
            title: "Home, office, or collection fit",
            copy: "We can shape options around atmosphere, scale, client-facing presentation, or collector-grade intent.",
          },
        ],
      },
      showcase: {
        eyebrow: "Featured Artworks",
        title: "A preview of the editorial tone and acquisition range we curate.",
        description:
          "Representative artwork imagery sourced from Hacoco to signal style, mood, and acquisition fit.",
        artworks: [
          {
            title: "Curated Contemporary Selection",
            artist: "Hacoco",
            medium: "Editorial preview",
            priceBand: "Request",
            image: sharedArtworkImage,
          },
          {
            title: "Private Collector Match",
            artist: "Hacoco",
            medium: "Selected works",
            priceBand: "Available",
            image: logoArtworkImage,
          },
          {
            title: "Style-Led Shortlists",
            artist: "Bespoke",
            medium: "Acquisition curation",
            priceBand: "Matched",
          },
          {
            title: "Spatial Acquisitions",
            artist: "Private sourcing",
            medium: "Home and office fit",
            priceBand: "Discreet",
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Hacoco",
        title: "We reduce the distance between intent and acquisition.",
        paragraphs: [
          "Most buyers do not need a giant art marketplace. They need a credible filter that understands style, budget, and use-case, then returns options worth considering.",
          "That is the role of this page. You tell us what you want to acquire, and we respond with a narrower, more actionable set of opportunities.",
        ],
      },
      process: {
        eyebrow: "Simple Process",
        title: "A short path from brief to available works.",
        steps: [
          {
            title: "Share",
            copy: "Submit your style preference, intended use, and budget range through the inquiry form.",
          },
          {
            title: "Match",
            copy: "We filter available works against your brief and prepare a relevant set of options.",
          },
          {
            title: "Review",
            copy: "You review the shortlist with context on fit, pricing, and artistic direction.",
          },
          {
            title: "Acquire",
            copy: "Once aligned, we move toward private follow-through and purchase completion.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions buyers usually ask before the shortlist arrives.",
        items: [
          {
            question: "Do I need to know specific artists already?",
            answer:
              "No. You can describe your preferred style, mood, medium, or interior context instead. We can work from taste, not just named artists.",
          },
          {
            question: "Can I request art for a home or office project?",
            answer:
              "Yes. This form is built to support home, office, and collection-led buying briefs.",
          },
          {
            question: "Will I receive every available work?",
            answer:
              "No. We curate rather than flood. The aim is to send a focused set that is more likely to convert into an actual acquisition.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Acquisition Request",
      title: "Ready to receive available works matched to your brief?",
      description:
        "Share a few details and we will respond with curated options rather than generic browsing noise.",
      buttonLabel: "Get Curated Art Options",
    },
    formSection: {
      eyebrow: "Receive Available Works",
      title: "Tell us what you want to acquire.",
      description:
        "This brief is designed to increase relevance and shorten the path from intent to purchase.",
    },
    form: {
      eyebrow: "Buying Brief",
      title: "Receive curated art options",
      description:
        "For direct buyers seeking matched art opportunities with minimal friction.",
      submitLabel: "Get Curated Art Options",
      leadTag: "INV-LEAD",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "name@example.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 / +1 / +44" },
        {
          name: "interest",
          label: "Interest (artist/style)",
          type: "text",
          required: true,
          placeholder: "Abstract, figurative, earthy palettes, etc.",
          fullWidth: true,
        },
        {
          name: "budgetRange",
          label: "Budget range",
          type: "select",
          required: true,
          options: ["Under INR 2L", "INR 2L - 5L", "INR 5L - 15L", "INR 15L+"],
        },
        {
          name: "usage",
          label: "Usage",
          type: "select",
          required: true,
          options: ["Home", "Office", "Collection"],
        },
      ],
    },
    success: {
      eyebrow: "Request Received",
      title: "Your acquisition brief is in the queue.",
      message:
        "We will review your preferences and return with available works that fit your brief.",
    },
    footer: {
      copy: "Curated art buying opportunities for clients who want relevance, trust, and speed.",
      email: "hello@investwithhacoco.com",
      contactLabel: "Buyer inquiries",
    },
  },
  "hacoco-advisory.com": {
    slug: "advisory",
    primaryDomain: "hacoco-advisory.com",
    hostAliases: ["www.hacoco-advisory.com", "hacoco-advisory.local"],
    brand: {
      name: "Hacoco Advisory",
      eyebrow: "Private Art Advisory",
    },
    seo: {
      title: "Hacoco Advisory | Bespoke Art Advisory and Private Sourcing",
      description:
        "Private art advisory for collection building, bespoke sourcing, and private sales. Book a consultation with Hacoco Advisory for discreet, high-context guidance.",
      ogImage: sharedArtworkImage,
    },
    navigation: [
      { label: "Advisory Areas", href: "#advisory-areas" },
      { label: "Who We Work With", href: "#who-we-work-with" },
      { label: "Process", href: "#process" },
      { label: "Consultation", href: "#lead-form" },
    ],
    navCtaLabel: "Book Consultation",
    hero: {
      eyebrow: "Bespoke sourcing and private guidance",
      title: "Private art advisory for collectors who prefer discretion, judgment, and tailored sourcing.",
      description:
        "Hacoco Advisory works with individuals, family offices, collectors, and design-conscious buyers seeking private art guidance beyond transactional browsing.",
      ctas: [
        { label: "Book a Private Consultation", href: "#lead-form", variant: "primary" },
        { label: "Speak to Hacoco Advisory", href: "#lead-form", variant: "secondary" },
      ],
      metrics: [
        { value: "Bespoke", label: "Advisory shaped to your collection or sourcing need" },
        { value: "Private", label: "Discreet, relationship-led communication and access" },
        { value: "Structured", label: "Clear process from brief to sourcing and decision" },
      ],
      image: {
        src: sharedArtworkImage,
        alt: "Private art advisory visual",
        captionTitle: "Context-rich sourcing",
        captionText:
          "A calmer route for buyers who need judgment, not generic listings.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      advisoryAreas: {
        eyebrow: "Advisory Areas",
        title: "Support across collection building, sourcing, and private opportunities.",
        description:
          "This page is designed for clients who need an advisor, not just inventory.",
        items: [
          {
            kicker: "Collection building",
            title: "Shape a more coherent collection",
            copy: "For buyers who want to build with narrative, taste, and long-term consistency rather than isolated purchases.",
          },
          {
            kicker: "Sourcing",
            title: "Bespoke sourcing for specific briefs",
            copy: "For clients seeking artists, palettes, mediums, or spatial fits that are not easily found through open browsing.",
          },
          {
            kicker: "Private sales",
            title: "Discreet private market guidance",
            copy: "For conversations where confidentiality, fit, and trusted handling matter as much as the work itself.",
          },
        ],
      },
      audience: {
        eyebrow: "Who We Work With",
        title: "Advisory is best suited to clients with a defined intention.",
        items: [
          "Collectors refining an existing collection and wanting stronger coherence.",
          "Buyers seeking an advisor to source around a style, artist, or thesis.",
          "Private clients and principals who value discretion and context-rich decision support.",
          "Design-led home or office buyers who want art selected with aesthetic intelligence.",
        ],
      },
      whyHacoco: {
        eyebrow: "Why Advisory Matters",
        title: "Good art decisions are rarely just about availability.",
        paragraphs: [
          "The real work sits in framing the brief properly: what belongs in the collection, what does not, what deserves patience, and where private sourcing can add value.",
          "Advisory helps separate taste from impulse, and opportunity from mere visibility. That distinction becomes more important as budgets rise and collections mature.",
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A discreet consultation-first workflow.",
        steps: [
          {
            title: "Consult",
            copy: "We begin with your requirement, budget comfort, aesthetic preferences, and timeline.",
          },
          {
            title: "Frame",
            copy: "We define the brief properly, whether that means sourcing, collection shaping, or a private sale conversation.",
          },
          {
            title: "Source",
            copy: "We assemble relevant options, context, and decision support tailored to your advisory need.",
          },
          {
            title: "Proceed",
            copy: "Once aligned, we help advance the next step with clarity and discretion.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Private Consultation",
      title: "If you need judgment, discretion, and bespoke sourcing, begin with a private advisory brief.",
      description:
        "Share the contours of your requirement and we will shape the next conversation accordingly.",
      buttonLabel: "Book a Private Consultation",
    },
    formSection: {
      eyebrow: "Advisory Contact",
      title: "Start with a private consultation request.",
      description:
        "The more context you share, the better we can shape the sourcing or advisory conversation.",
    },
    form: {
      eyebrow: "Advisory Brief",
      title: "Speak to Hacoco Advisory",
      description:
        "For bespoke sourcing, collection building, and private advisory conversations.",
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
          options: ["Under INR 5L", "INR 5L - 15L", "INR 15L - 50L", "INR 50L+"],
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
      title: "Your advisory request has been received.",
      message:
        "A member of Hacoco Advisory will review your brief and reach out to arrange the next step.",
    },
    calendly: {
      url: "https://calendly.com/",
    },
    footer: {
      copy: "Private art advisory for collection building, sourcing, and discreet acquisition support.",
      email: "advisory@hacoco-advisory.com",
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
