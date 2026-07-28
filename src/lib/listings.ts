export type InvestorListing = {
  slug: string;
  title: string;
  location: string;
  price: string;
  category: string;
  badge: string;
  status: string;
  size?: string;
  bedrooms?: string;
  bathrooms?: string;
  summary: string;
  image: string;
  imageAlt: string;
  considerations: string[];
};

export const investorListings: InvestorListing[] = [
  {
    slug: "safdarjung-enclave-bungalow",
    title: "Bungalow in Safdarjung Enclave",
    location: "Safdarjung Enclave, New Delhi",
    price: "INR 39 Cr",
    category: "Prime Delhi",
    badge: "Hacoco Exclusive",
    status: "For sale",
    summary:
      "A rare South Delhi bungalow opportunity for buyers seeking address value, privacy, redevelopment optionality and long-term family use.",
    image: "/images/investor/safdarjung.jpeg",
    imageAlt: "Existing bungalow in Safdarjung Enclave, New Delhi",
    considerations: [
      "Established South Delhi residential address",
      "Existing bungalow with redevelopment potential",
      "Direct diligence required on title, plot and buildability",
    ],
  },
  {
    slug: "janpath-connaught-place-commercial-building",
    title: "Commercial building in Janpath",
    location: "Connaught Place, New Delhi",
    price: "Price on request",
    category: "Commercial",
    badge: "Signature Listing",
    status: "Off market",
    summary:
      "A central Delhi commercial asset for capital seeking scarcity, visibility, tenant depth and institutional location quality.",
    image: "/images/investor/janpath.jpeg",
    imageAlt: "Commercial building in Janpath, Connaught Place",
    considerations: [
      "Scarce central Delhi commercial location",
      "Income and tenancy information available on enquiry",
      "Commercial, title and lease diligence required",
    ],
  },
  {
    slug: "siolim-goa-luxury-villa",
    title: "Luxury 3BHK villa in Siolim",
    location: "Siolim, North Goa",
    price: "INR 6.5 Cr",
    category: "Goa",
    badge: "Premium Villa",
    status: "Availability on request",
    bedrooms: "3 Br",
    bathrooms: "4 Ba",
    size: "2,181 SqFt",
    summary:
      "A private North Goa villa with pool and garden positioning for lifestyle use, managed rental potential and selective second-home demand.",
    image: "/images/investor/goa.jpg",
    imageAlt: "Goa coastal landscape near Hacoco villa opportunities",
    considerations: [
      "North Goa lifestyle and rental demand",
      "Private pool and garden positioning",
      "Title, permissions and rental operations require review",
    ],
  },
  {
    slug: "anjuna-goa-3bhk-villa",
    title: "3BHK villa in Anjuna",
    location: "Anjuna, Goa",
    price: "INR 3.25 Cr",
    category: "Goa",
    badge: "For Sale",
    status: "Availability on request",
    bedrooms: "3 Br",
    bathrooms: "3 Ba",
    size: "1,722 SqFt",
    summary:
      "A compact villa close to the Anjuna lifestyle circuit, suited to buyers reviewing usable second homes with rental-oriented demand.",
    image: "/images/investor/goa.jpg",
    imageAlt: "Goa coastal landscape near Hacoco villa opportunities",
    considerations: [
      "Close to the Anjuna lifestyle circuit",
      "Compact second-home format",
      "Operating costs and rental assumptions require review",
    ],
  },
  {
    slug: "jor-bagh-villa",
    title: "Villa in Jor Bagh",
    location: "Jor Bagh, New Delhi",
    price: "INR 70 Cr",
    category: "Lutyens Delhi",
    badge: "Ultra Prime",
    status: "For sale",
    summary:
      "A rare villa opportunity in one of Delhi's most prestigious low-density addresses, suitable for privacy-led family capital.",
    image: "/images/investor/jor-bagh.jpeg",
    imageAlt: "Villa in Jor Bagh, New Delhi",
    considerations: [
      "Low-density central Delhi address",
      "Limited publicly available supply",
      "Property and documentation details available privately",
    ],
  },
  {
    slug: "sunder-nagar-villa",
    title: "Villa in Sunder Nagar",
    location: "Sunder Nagar, New Delhi",
    price: "Price on request",
    category: "Prime Delhi",
    badge: "Reference",
    status: "Sold",
    summary:
      "A green, central Delhi villa address with heritage character, strong neighbourhood identity and limited available supply.",
    image: "/images/investor/sunder-nagar.jpg",
    imageAlt: "Villa in Sunder Nagar, New Delhi",
    considerations: [
      "Central Delhi residential address",
      "Low-density neighbourhood character",
      "Shown as evidence of Hacoco market activity",
    ],
  },
  {
    slug: "delhi-alwar-road-land-parcel",
    title: "43 acre land parcel along Delhi Alwar Road",
    location: "Near Sohna Road, NCR Corridor",
    price: "Price on request",
    category: "Land",
    badge: "Off Market",
    status: "Availability on request",
    size: "43 acres",
    summary:
      "A large contiguous land parcel with highway-led visibility, suited to commercial, mixed-use or strategic land aggregation review.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Open land representing the Delhi Alwar Road parcel",
    considerations: [
      "Large contiguous parcel",
      "Highway-linked location",
      "Land use, access and development potential require diligence",
    ],
  },
  {
    slug: "haridwar-dehradun-expressway-land",
    title: "125 bigha land on Haridwar Dehradun Expressway",
    location: "Haridwar Dehradun Expressway",
    price: "Price on request",
    category: "Land",
    badge: "Highway Frontage",
    status: "For sale",
    size: "125 bigha",
    summary:
      "A highway-linked land mandate with potential for residential, institutional, logistics, hospitality or mixed-use planning review.",
    image: "/images/investor/haridwar-land.jpg",
    imageAlt: "Hacoco land opportunity on the Haridwar Dehradun corridor",
    considerations: [
      "Expressway-linked land mandate",
      "Large parcel suited to institutional review",
      "Title, land use, access and planning require diligence",
    ],
  },
  {
    slug: "neemrana-rajasthan-land",
    title: "24 acre land in Neemrana",
    location: "Neemrana, Rajasthan",
    price: "INR 60 Cr",
    category: "Industrial Corridor",
    badge: "Growth Corridor",
    status: "For sale",
    size: "24 acres",
    summary:
      "A land opportunity in the Neemrana belt for investors studying industrial, warehousing and highway-linked development potential.",
    image: "/images/investor/neemrana-land.jpg",
    imageAlt: "Hacoco land opportunity in Neemrana, Rajasthan",
    considerations: [
      "Position within the Neemrana industrial belt",
      "Highway and employment-corridor relevance",
      "Permitted use and development route require diligence",
    ],
  },
  {
    slug: "jaipur-rajasthan-67-acre-land",
    title: "67 acre land in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "INR 100 Cr",
    category: "Land",
    badge: "Large Parcel",
    status: "For sale",
    size: "67 acres",
    summary:
      "A large land parcel in Jaipur's growth corridor for plotted, institutional or mixed-use development review.",
    image: "/images/investor/jaipur-land.jpg",
    imageAlt: "Hacoco land opportunity in Jaipur, Rajasthan",
    considerations: [
      "Large contiguous landholding",
      "Potential plotted, institutional or mixed-use review",
      "Exact planning and infrastructure context requires diligence",
    ],
  },
  {
    slug: "madhapur-hyderabad-plot",
    title: "600 sq yd plot in Madhapur",
    location: "HITEC City, Hyderabad",
    price: "Price on request",
    category: "Plot",
    badge: "Road Facing",
    status: "For sale",
    size: "5,400 SqFt",
    summary:
      "A road-facing plot in an established Hyderabad commercial corridor for buyers evaluating development or joint venture potential.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Commercial district representing the Madhapur plot",
    considerations: [
      "Established HITEC City catchment",
      "Road-facing development plot",
      "Development controls and title require professional review",
    ],
  },
  {
    slug: "dubai-marina-duplex-apartment",
    title: "4BHK duplex apartment in Dubai Marina",
    location: "Dubai Marina, UAE",
    price: "Price on request",
    category: "Dubai",
    badge: "Global",
    status: "For sale",
    bedrooms: "4 Br",
    summary:
      "A Dubai Marina apartment opportunity for buyers reviewing global lifestyle property, rental depth and UAE market access.",
    image: "/images/investor/dubai-marina.jpg",
    imageAlt: "Dubai Marina view from a Hacoco property opportunity",
    considerations: [
      "Established waterfront district",
      "Large duplex format",
      "Service charges, condition and rental case require review",
    ],
  },
];

export function getInvestorListing(slug: string) {
  return investorListings.find((listing) => listing.slug === slug);
}
