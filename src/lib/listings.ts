export type InvestorListing = {
  slug: string;
  title: string;
  location: string;
  price: string;
  category: string;
  badge: string;
  size?: string;
  bedrooms?: string;
  bathrooms?: string;
  summary: string;
  image: string;
};

export const investorListings: InvestorListing[] = [
  {
    slug: "safdarjung-enclave-bungalow",
    title: "Bungalow in Safdarjung Enclave",
    location: "Safdarjung Enclave, New Delhi",
    price: "INR 39 Cr",
    category: "Prime Delhi",
    badge: "Hacoco Exclusive",
    summary:
      "A rare South Delhi bungalow opportunity for buyers seeking address value, privacy, redevelopment optionality and long-term family use.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "janpath-connaught-place-commercial-building",
    title: "Commercial building in Janpath",
    location: "Connaught Place, New Delhi",
    price: "Price on request",
    category: "Commercial",
    badge: "Signature Listing",
    summary:
      "A central Delhi commercial asset for capital seeking scarcity, visibility, tenant depth and institutional location quality.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "siolim-goa-luxury-villa",
    title: "Luxury 3BHK villa in Siolim",
    location: "Siolim, North Goa",
    price: "INR 6.5 Cr",
    category: "Goa",
    badge: "Premium Villa",
    bedrooms: "3 Br",
    bathrooms: "4 Ba",
    size: "2,181 SqFt",
    summary:
      "A private North Goa villa with pool and garden positioning for lifestyle use, managed rental potential and selective second-home demand.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "anjuna-goa-3bhk-villa",
    title: "3BHK villa in Anjuna",
    location: "Anjuna, Goa",
    price: "INR 3.25 Cr",
    category: "Goa",
    badge: "For Sale",
    bedrooms: "3 Br",
    bathrooms: "3 Ba",
    size: "1,722 SqFt",
    summary:
      "A compact villa close to the Anjuna lifestyle circuit, suited to buyers reviewing usable second homes with rental-oriented demand.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "jor-bagh-villa",
    title: "Villa in Jor Bagh",
    location: "Jor Bagh, New Delhi",
    price: "INR 70 Cr",
    category: "Lutyens Delhi",
    badge: "Ultra Prime",
    summary:
      "A rare villa opportunity in one of Delhi's most prestigious low-density addresses, suitable for privacy-led family capital.",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "sunder-nagar-villa",
    title: "Villa in Sunder Nagar",
    location: "Sunder Nagar, New Delhi",
    price: "Price on request",
    category: "Prime Delhi",
    badge: "Hot Offer",
    summary:
      "A green, central Delhi villa address with heritage character, strong neighbourhood identity and limited available supply.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "delhi-alwar-road-land-parcel",
    title: "43 acre land parcel along Delhi Alwar Road",
    location: "Near Sohna Road, NCR Corridor",
    price: "Price on request",
    category: "Land",
    badge: "Off Market",
    size: "43 acres",
    summary:
      "A large contiguous land parcel with highway-led visibility, suited to commercial, mixed-use or strategic land aggregation review.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "haridwar-dehradun-expressway-land",
    title: "125 bigha land on Haridwar Dehradun Expressway",
    location: "Haridwar Dehradun Expressway",
    price: "Price on request",
    category: "Land",
    badge: "Highway Frontage",
    size: "125 bigha",
    summary:
      "A highway-linked land mandate with potential for residential, institutional, logistics, hospitality or mixed-use planning review.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "neemrana-rajasthan-land",
    title: "24 acre land in Neemrana",
    location: "Neemrana, Rajasthan",
    price: "INR 60 Cr",
    category: "Industrial Corridor",
    badge: "Growth Corridor",
    size: "24 acres",
    summary:
      "A land opportunity in the Neemrana belt for investors studying industrial, warehousing and highway-linked development potential.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "jaipur-rajasthan-67-acre-land",
    title: "67 acre land in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "INR 100 Cr",
    category: "Land",
    badge: "Large Parcel",
    size: "67 acres",
    summary:
      "A large land parcel in Jaipur's growth corridor for plotted, institutional or mixed-use development review.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "madhapur-hyderabad-plot",
    title: "600 sq yd plot in Madhapur",
    location: "HITEC City, Hyderabad",
    price: "Price on request",
    category: "Plot",
    badge: "Road Facing",
    size: "5,400 SqFt",
    summary:
      "A road-facing plot in an established Hyderabad commercial corridor for buyers evaluating development or joint venture potential.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "dubai-marina-duplex-apartment",
    title: "4BHK duplex apartment in Dubai Marina",
    location: "Dubai Marina, UAE",
    price: "Price on request",
    category: "Dubai",
    badge: "Global",
    bedrooms: "4 Br",
    summary:
      "A Dubai Marina apartment opportunity for buyers reviewing global lifestyle property, rental depth and UAE market access.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
];
