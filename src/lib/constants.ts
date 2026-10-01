export interface BrandInfo {
  id: string;
  name: string;
  wordmark: string;
  descriptor: string;
  description: string;
  websiteUrl: string;
  isExternal: boolean;
  accentColor: string;
  accentGradient: string;
  borderHover: string;
  badgeBg: string;
  badgeText: string;
  logo: string;
  logoLight: string;
  image: string;
  capabilities: string[];
  keyStats: { label: string; value: string }[];
}

export const BRANDS: BrandInfo[] = [
  {
    id: "vector",
    name: "VECTOR",
    wordmark: "Vector Food Equipments",
    descriptor: "Complete Commercial Kitchen Solutions",
    description:
      "Vector provides commercial kitchen equipment and solutions across cooking, bakery and pantry, refrigeration, dishwashing, processing, storage, preparation, steam systems, fabrication and kitchen infrastructure.",
    websiteUrl: "https://vector-food-equipments.example/",
    isExternal: true,
    accentColor: "#DC2626",
    accentGradient: "from-rose-600 to-red-600",
    borderHover: "hover:border-red-500/60",
    badgeBg: "bg-red-500/10 text-red-400 border-red-500/20",
    badgeText: "Complete Commercial Kitchen Solutions",
    logo: "/brands/vector-logo.png",
    logoLight: "/brands/vector-logo.png",
    image: "/images/vector_kitchen_equipment.jpg",
    capabilities: [
      "Custom Stainless Steel Fabrication",
      "Commercial Cooking Suites & Ranges",
      "Refrigeration & Cold Chain Solutions",
      "Dishwashing & Sanitary Steam Systems",
      "Bakery, Pantry & Preparation Counters",
      "Complete Kitchen Infrastructure Planning",
    ],
    keyStats: [
      { label: "Focus", value: "Turnkey Kitchens" },
      { label: "Engineering", value: "Modular Stainless Steel" },
    ],
  },
  {
    id: "maxwell-induction",
    name: "MAXWELL INDUCTION",
    wordmark: "Maxwell Induction",
    descriptor: "Commercial Induction Technology",
    description:
      "Maxwell Induction focuses on professional induction solutions for commercial kitchens, with products spanning tabletop induction equipment, commercial induction systems and specialized induction cooking equipment.",
    websiteUrl: "https://www.maxwellinduction.com/",
    isExternal: true,
    accentColor: "#0284C7",
    accentGradient: "from-sky-500 to-blue-600",
    borderHover: "hover:border-sky-500/60",
    badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    badgeText: "Commercial Induction Technology",
    logo: "/brands/maxwell-induction.png",
    logoLight: "/brands/maxwell-induction.png",
    image: "/images/maxwell-hero-induction.jpg",
    capabilities: [
      "Commercial Induction Cooktops & Ranges",
      "High-Volume Boiling Pans & Bratt Pans",
      "Specialized Induction Woks & Chinese Ranges",
      "Induction Khoya Machines & Steam Boilers",
      "Energy-Efficient Flameless Kitchen Systems",
      "Pan-India Service & Genuine Spares",
    ],
    keyStats: [
      { label: "Efficiency", value: "~90% Direct Heat" },
      { label: "Operating Cost", value: "Up to 60%* vs LPG" },
    ],
  },
  {
    id: "sk-powercook",
    name: "SK POWER COOK MACHINERY",
    wordmark: "SK Power Cook Machinery",
    descriptor: "Engineered Solutions for Commercial Food Processing",
    description:
      "Specialized machinery solutions for commercial food-processing applications.",
    websiteUrl: "https://sk-powercook.example/",
    isExternal: true,
    accentColor: "#EA580C",
    accentGradient: "from-amber-500 to-orange-600",
    borderHover: "hover:border-orange-500/60",
    badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    badgeText: "Engineered Solutions for Commercial Food Processing",
    logo: "/brands/sk-powercook-logo.png",
    logoLight: "/brands/sk-powercook-logo.png",

    image: "/images/sk_power_cook_machinery.jpg",
    capabilities: [
      "Heavy-Duty Commercial Electric Kadhais",
      "Motorized Tilting Boiling Kettles",
      "Commercial Food Processing Mixers",
      "Industrial Bulk Cooking Machinery",
      "Custom Commercial Kitchen Machinery",
      "High-Capacity Thermal Processing",
    ],
    keyStats: [
      { label: "Specialization", value: "Food Processing" },
      { label: "Build Standard", value: "Industrial Heavy-Duty" },
    ],
  },
];

export const WHY_MAXWELL = [
  {
    number: "01",
    title: "SPECIALIZED EXPERTISE",
    description:
      "Each brand focuses on a distinct area of commercial kitchen and food-service technology.",
  },
  {
    number: "02",
    title: "ENGINEERING FOCUS",
    description:
      "Solutions are built around practical professional kitchen and food-processing requirements.",
  },
  {
    number: "03",
    title: "QUALITY-DRIVEN APPROACH",
    description:
      "Product and solution development is focused on professional operating environments.",
  },
  {
    number: "04",
    title: "LONG-TERM SUPPORT",
    description:
      "Technical assistance and service can support customers beyond equipment selection.",
  },
];

export const INDUSTRIES = [
  {
    id: "hotels-restaurants",
    title: "Hotels & Restaurants",
    image: "/images/ind_hotel_restaurant.jpg",
    description:
      "High-performance cooking suites and reliable equipment built for fast-paced culinary service.",
    brandsInvolved: ["Vector", "Maxwell Induction"],
  },
  {
    id: "catering-banquets",
    title: "Catering & Banquet Halls",
    image: "/images/ind_catering_banquet.jpg",
    description:
      "High-volume batch preparation systems engineered for mass dining events and banquets.",
    brandsInvolved: ["Vector", "SK Power Cook", "Maxwell Induction"],
  },
  {
    id: "institutions",
    title: "Institutions & Universities",
    image: "/images/ind_institutions_hospitals.jpg",
    description:
      "Hygienic, high-capacity commercial kitchen infrastructure for colleges and corporate facilities.",
    brandsInvolved: ["Vector", "Maxwell Induction"],
  },
  {
    id: "industrial-central",
    title: "Industrial Kitchens & Central Production",
    image: "/images/ind_industrial_central.jpg",
    description:
      "Continuous-duty cooking equipment and machinery designed for large-scale central production commissaries.",
    brandsInvolved: ["Vector", "SK Power Cook"],
  },
  {
    id: "hospitals-healthcare",
    title: "Hospitals & Healthcare",
    image: "/images/ind_institutions_hospitals.jpg",
    description:
      "Strictly sanitary, temperature-controlled culinary installations tailored for hospital patient dietary needs.",
    brandsInvolved: ["Vector", "Maxwell Induction"],
  },
  {
    id: "qsr-foodcourts",
    title: "Food Courts & QSR Chains",
    image: "/images/ind_qsr_foodcourts.jpg",
    description:
      "Fast-recovery induction and stainless steel line stations built for rapid customer turnaround.",
    brandsInvolved: ["Maxwell Induction", "Vector"],
  },
  {
    id: "flight-marine",
    title: "Flight Kitchens & Marine",
    image: "/images/maxwell-commercial-kitchen.jpg",
    description:
      "Specialized flame-free, low-ambient-heat induction solutions designed for safety in flight catering and offshore environments.",
    specialNote: "Specialized induction technology powered by Maxwell Induction",
    brandsInvolved: ["Maxwell Induction"],
  },
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "COMMERCIAL KITCHEN EQUIPMENT",
    leadBrand: "Vector Food Equipments",
    tag: "Vector",
    accent: "red",
    description:
      "Turnkey range of frontline cooking, refrigeration, bakery, storage, and dishwashing equipment designed for heavy-duty commercial kitchen demands.",
  },
  {
    number: "02",
    title: "KITCHEN DESIGN & ENGINEERING",
    leadBrand: "Vector Food Equipments",
    tag: "Vector",
    accent: "red",
    description:
      "Custom stainless steel fabrication, workflow ergonomics, kitchen layout planning, and extraction infrastructure engineering.",
  },
  {
    number: "03",
    title: "INDUCTION TECHNOLOGY",
    leadBrand: "Maxwell Induction",
    tag: "Maxwell Induction",
    accent: "blue",
    description:
      "Commercial induction cooking appliances delivering ~90% energy efficiency, precise instant heat, flame-free safety, and significantly reduced operating costs.",
  },
  {
    number: "04",
    title: "FOOD PROCESSING MACHINERY",
    leadBrand: "SK Power Cook Machinery",
    tag: "SK Power Cook",
    accent: "orange",
    description:
      "Engineered motorized kettles, electric kadhais, planetary mixers, and heavy-duty machinery for commercial food-processing operations.",
  },
  {
    number: "05",
    title: "TECHNICAL & SERVICE SUPPORT",
    leadBrand: "Group Support Network",
    tag: "Maxwell Group",
    accent: "slate",
    description:
      "Dedicated installation, spare parts availability, preventive maintenance assistance, and after-sales customer support across our brand ecosystem.",
  },
];

export const CONTACT_DETAILS = {
  officeTitle: "Maxwell Group Corporate Operations",
  address: "PKM Industrial Complex, Mel Ayanambakkam, Chennai – 600 095, Tamil Nadu, India",
  phone: "+91 89258 57821 / +91 89258 57824",
  email: "contact@maxwellgroup.example",
  inductionEmail: "sales@maxwellinduction.com",
  workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
};
