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
  "https://hacoco.art/cdn/shop/files/3horses_AK.jpg?v=1769326096&width=1066";

const logoArtworkImage =
  "https://hacoco.art/cdn/shop/files/TailofTails_NH.jpg?v=1776419622&width=1066";

const paintingGallery = [
  "https://hacoco.art/cdn/shop/files/TailofTails_NH.jpg?v=1776419622&width=1066",
  "https://hacoco.art/cdn/shop/files/ashish_K_1.jpg?v=1769535307&width=1066",
  "https://hacoco.art/cdn/shop/files/YellowMosaicScape_OilonCanvas_Ceramicmosaiconwood_30inchdiameter.jpg?v=1770200049&width=1066",
  "https://hacoco.art/cdn/shop/files/OrangeMosaicScape_OilonCanvas_Ceramicmosaiconwood_36inchdiameter.jpg?v=1770200022&width=1066",
  "https://hacoco.art/cdn/shop/files/Interior_Mosaic_by_Rhea_Maheshwari.jpg?v=1770199791&width=1066",
  "https://hacoco.art/cdn/shop/files/Divine_Guidance2024_Rhea_Maheshwari_bb439e27-12de-43eb-a79c-98d6195d4848.jpg?v=1770199600&width=1066",
] as const;

const sharedTrustStrip = [
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
      { label: "Works", href: "#featured-works" },
      { label: "Approach", href: "#focus" },
      { label: "Process", href: "#process" },
      { label: "Request Access", href: "#lead-form" },
    ],
    navCtaLabel: "Private Access",
    hero: {
      eyebrow: "Art acquisition for serious collectors",
      title: "Build a culturally resonant art collection with disciplined private access.",
      description:
        "For collectors, HNIs, and NRIs who want stronger judgment, sharper curation, and fewer but better acquisition opportunities.",
      ctas: [
        { label: "Request Private Access", href: "#lead-form", variant: "primary" },
        { label: "See The Approach", href: "#focus", variant: "secondary" },
      ],
      metrics: [
        { value: "Private", label: "For qualified collector conversations" },
        { value: "Curated", label: "Emerging and mid-career works" },
        { value: "Focused", label: "Shortlists built around fit" },
      ],
      image: {
        src: paintingGallery[0],
        alt: "Painting from the Hacoco collection",
        captionTitle: "Collection building with more clarity",
        captionText:
          "Artwork imagery selected from the Hacoco paintings collection.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      showcase: {
        eyebrow: "Selected Works",
        title: "A curated preview from the Hacoco paintings collection.",
        description: "Selected to signal tone, range, and collecting quality.",
        artworks: [
          {
            title: "Tale of Tails",
            artist: "Nazish Hassan",
            medium: "Painting",
            priceBand: "Request",
            image: paintingGallery[0],
          },
          {
            title: "Horses Under Tree",
            artist: "Ashish Kushwaha",
            medium: "Painting",
            priceBand: "Available",
            image: sharedArtworkImage,
          },
          {
            title: "Interior Mosaic",
            artist: "Rhea Maheshwari",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[4],
          },
          {
            title: "Divine Guidance",
            artist: "Rhea Maheshwari",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[5],
          },
        ],
      },
      collectWhy: {
        eyebrow: "Why Hacoco Capital",
        title: "Built to improve quality of decision, not just quantity of options.",
        items: [
          {
            kicker: "Selection",
            title: "A tighter field",
            copy: "You see a narrower set of works with a stronger case for fit.",
          },
          {
            kicker: "Fit",
            title: "Collection-first thinking",
            copy: "Recommendations are shaped around taste, intent, and collecting horizon.",
          },
          {
            kicker: "Support",
            title: "Calm execution",
            copy: "From first brief to acquisition, the process stays clear and discreet.",
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
        title: "Art buying improves when the process becomes more selective.",
        paragraphs: [
          "We do not believe serious collectors benefit from seeing everything. They benefit from seeing the right works, with enough context to decide well.",
          "Our role is to filter, frame, and sequence decisions so each acquisition strengthens the collection rather than simply adding to it.",
        ],
        aside:
          "No catalogue fatigue. No borrowed prestige. Just considered selection, credible context, and discreet execution.",
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
        title: "How it works.",
        steps: [
          {
            title: "Brief",
            copy: "Tell us what you want to collect and your working budget.",
          },
          {
            title: "Curation",
            copy: "We prepare a tighter shortlist aligned to your brief.",
          },
          {
            title: "Selection",
            copy: "You review, refine, and move ahead with the right work.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Private Access",
      title: "If you are building with long-term intent, begin with a private brief.",
      description:
        "Share your preferences, budget, and collecting direction. We will return only with relevant next steps.",
      buttonLabel: "Request Private Access",
    },
    formSection: {
      eyebrow: "Request Access",
      title: "Share your collecting brief.",
      description:
        "A concise brief helps us return with a more intelligent first conversation.",
    },
    form: {
      eyebrow: "Capital Brief",
      title: "Request private access",
      description:
        "For buyers seeking private, better-qualified art opportunities.",
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
      title: "Your brief is in review.",
      message:
        "A Hacoco Capital advisor will review your brief and come back with the most appropriate next step.",
    },
    footer: {
      copy: "Private art acquisition for collectors who prefer clarity over noise.",
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
      { label: "Works", href: "#featured-works" },
      { label: "Featured Works", href: "#featured-works" },
      { label: "Why Us", href: "#focus" },
      { label: "Get Options", href: "#lead-form" },
    ],
    navCtaLabel: "Get Options",
    hero: {
      eyebrow: "Curated works, delivered faster",
      title: "Tell us what you want to buy. We will send a tighter shortlist of works worth seeing.",
      description:
        "Built for buyers who want relevance, speed, and a clear path from interest to acquisition.",
      formAboveFold: true,
      ctas: [
        { label: "Get Curated Art Options", href: "#lead-form", variant: "primary" },
        { label: "Receive Available Works", href: "#featured-works", variant: "secondary" },
      ],
      metrics: [
        { value: "Fast", label: "A short form above the fold" },
        { value: "Matched", label: "By style, budget, and use" },
        { value: "Curated", label: "No catalogue overload" },
      ],
      image: {
        src: paintingGallery[1],
        alt: "Selected painting from Hacoco",
        captionTitle: "Available works, curated to brief",
        captionText: "Artwork imagery selected from the Hacoco paintings collection.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      acquisitionFocus: {
        eyebrow: "What You Can Acquire",
        title: "A faster route to more relevant works.",
        description:
          "Built for buyers who care more about fit than volume.",
        items: [
          {
            kicker: "Emerging",
            title: "Emerging works",
            copy: "For buyers looking for younger practices with distinctive visual language.",
          },
          {
            kicker: "Established",
            title: "Established names",
            copy: "For buyers who want stronger familiarity, confidence, and placement context.",
          },
          {
            kicker: "Use-led",
            title: "Home, office, or collection",
            copy: "Shortlists can be shaped around space, use-case, and collecting intent.",
          },
        ],
      },
      showcase: {
        eyebrow: "Selected Works",
        title: "A preview from the Hacoco paintings collection.",
        description:
          "Representative works to signal style, mood, and acquisition range.",
        artworks: [
          {
            title: "Tale of Tails",
            artist: "Nazish Hassan",
            medium: "Painting",
            priceBand: "Request",
            image: paintingGallery[0],
          },
          {
            title: "The Midnight Passage",
            artist: "Ashish Kushwaha",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[1],
          },
          {
            title: "Yellow Mosaic Scape",
            artist: "Nupur Kundu",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[2],
          },
          {
            title: "Orange Mosaic Scape",
            artist: "Nupur Kundu",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[3],
          },
        ],
      },
      whyHacoco: {
        eyebrow: "Why Hacoco",
        title: "Less browsing. Better conversion from interest to purchase.",
        paragraphs: [
          "You share the brief. We return with a tighter selection that is more likely to suit your taste, budget, and context.",
          "That means less noise, fewer dead ends, and a much cleaner route to an actual decision.",
        ],
      },
      process: {
        eyebrow: "Simple Process",
        title: "Three quick steps.",
        steps: [
          {
            title: "Share",
            copy: "Tell us your style, budget, and intended use.",
          },
          {
            title: "Match",
            copy: "We curate available works against your brief.",
          },
          {
            title: "Review",
            copy: "You review the shortlist and move ahead with the right work.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions buyers usually ask before requesting options.",
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
              "No. We curate rather than flood. The objective is to send a smaller set with a stronger likelihood of fit.",
          },
        ],
      },
    },
    ctaBand: {
      eyebrow: "Acquisition Request",
      title: "Ready for curated options instead of endless browsing?",
      description:
        "Share a few details and we will return with available works matched to your taste, budget, and use-case.",
      buttonLabel: "Get Curated Art Options",
    },
    formSection: {
      eyebrow: "Receive Available Works",
      title: "Tell us what you want to buy.",
      description:
        "A short buying brief helps us respond with better options, faster.",
    },
    form: {
      eyebrow: "Buying Brief",
      title: "Receive curated art options",
      description:
        "For direct buyers who want available works matched to brief.",
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
      title: "Your request is in.",
      message:
        "We will review your preferences and return with the most relevant available works.",
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
      { label: "Works", href: "#featured-works" },
      { label: "Advisory", href: "#focus" },
      { label: "Process", href: "#process" },
      { label: "Consultation", href: "#lead-form" },
    ],
    navCtaLabel: "Book Consultation",
    hero: {
      eyebrow: "Bespoke sourcing and private guidance",
      title: "Private art advisory for buyers who want stronger judgment, tailored sourcing, and discretion.",
      description:
        "For collectors and buyers who need context, conviction, and a more bespoke acquisition process.",
      ctas: [
        { label: "Book a Private Consultation", href: "#lead-form", variant: "primary" },
        { label: "Speak to Hacoco Advisory", href: "#lead-form", variant: "secondary" },
      ],
      metrics: [
        { value: "Bespoke", label: "Collection or sourcing-led support" },
        { value: "Private", label: "Discreet handling and access" },
        { value: "Clear", label: "A simple advisory workflow" },
      ],
      image: {
        src: paintingGallery[4],
        alt: "Painting from the Hacoco collection",
        captionTitle: "Context-rich sourcing",
        captionText:
          "Artwork imagery selected from the Hacoco paintings collection.",
      },
    },
    trustStrip: [...sharedTrustStrip],
    sections: {
      showcase: {
        eyebrow: "Selected Works",
        title: "A visual reference from the Hacoco paintings collection.",
        description: "Used here to frame taste, direction, and sourcing quality.",
        artworks: [
          {
            title: "Interior Mosaic",
            artist: "Rhea Maheshwari",
            medium: "Painting",
            priceBand: "Request",
            image: paintingGallery[4],
          },
          {
            title: "Divine Guidance",
            artist: "Rhea Maheshwari",
            medium: "Painting",
            priceBand: "Request",
            image: paintingGallery[5],
          },
          {
            title: "Yellow Mosaic Scape",
            artist: "Nupur Kundu",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[2],
          },
          {
            title: "Orange Mosaic Scape",
            artist: "Nupur Kundu",
            medium: "Painting",
            priceBand: "Available",
            image: paintingGallery[3],
          },
        ],
      },
      advisoryAreas: {
        eyebrow: "Advisory Areas",
        title: "Where private advisory creates real value.",
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
        title: "The best art decisions are rarely driven by availability alone.",
        paragraphs: [
          "Real value sits in framing the brief properly: what belongs in the collection, what deserves patience, and where bespoke sourcing can add an edge.",
          "Advisory separates taste from impulse and opportunity from visibility. That distinction matters more as budgets rise and collections become more intentional.",
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A consultation-first workflow.",
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
      title: "Your advisory request is in.",
      message:
        "A member of Hacoco Advisory will review your brief and respond with an appropriate next step shortly.",
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
