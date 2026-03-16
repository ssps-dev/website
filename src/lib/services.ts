export type IconName = "Drill" | "Cog" | "Wrench" | "Zap" | "ConstructionIcon";

export interface ServiceInfo {
  id: string;
  slug: string;
  number: string;
  iconName: IconName;
  title: string;
  titleLine1: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  stats: { value: string; label: string }[];
}

export const services: ServiceInfo[] = [
  {
    id: "drilling",
    slug: "drilling",
    number: "01",
    iconName: "Drill",
    title: "Drilling & Upstream Well Services",
    titleLine1: "Drilling & Upstream",
    titleAccent: "Well Services",
    subtitle: "Upstream Operations",
    description:
      "End-to-end well lifecycle management — from initial ground penetration to complex interventions, testing, and handover. A versatile rig fleet operating across diverse geological environments.",
    shortDescription:
      "Oil, water & mining well drilling, rig fleet services, well interventions, and testing across diverse geological environments.",
    capabilities: [
      "Oil, Water & Mining Well Drilling",
      "1000HP – 2000HP Rig Services",
      "550HP – 750HP Workover Rigs",
      "Well Testing & Commissioning",
      "Slick Line, Wire Line & Coiled Tubing",
    ],
    image:
      "https://placehold.co/720x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0ADrilling+rig+operation%0Ain+Oman+desert%0Awith+crew+%26+equipment%0A(warm+charcoal+pencil+sketch)",
    imageAlt: "Drilling rig operations in desert",
    stats: [
      { value: "500+", label: "Wells Drilled" },
      { value: "100–2000", label: "HP Fleet Range" },
      { value: "24/7", label: "Field Operations" },
      { value: "25+", label: "Years Experience" },
    ],
  },
  {
    id: "equipment",
    slug: "equipment-trading",
    number: "02",
    iconName: "Cog",
    title: "Rig Components & Equipment Trading",
    titleLine1: "Rig Components &",
    titleAccent: "Equipment Trading",
    subtitle: "Heavy Machinery Supply",
    description:
      "Global sourcing and supply of high-quality drilling rig components and heavy machinery — a dedicated procurement division ensuring your operations never experience unnecessary downtime.",
    shortDescription:
      "Rig component trading, mud pumps & fluid systems, and specialized drilling accessories from global OEM and aftermarket suppliers.",
    capabilities: [
      "Rig Component Trading & Supply",
      "Mud Pumps & Fluid Circulation",
      "Drilling Accessories & Parts",
    ],
    image:
      "https://placehold.co/720x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0ADrilling+equipment+yard%0AMud+pumps+%26+rig+components%0Ain+organized+warehouse%0A(technical+pencil+sketch)",
    imageAlt: "Drilling equipment warehouse",
    stats: [
      { value: "40+", label: "OEM & Aftermarket Suppliers" },
      { value: "6", label: "Continents Sourced" },
      { value: "API", label: "Certified & Traceable" },
      { value: "72h", label: "Avg. Dispatch Time" },
    ],
  },
  {
    id: "maintenance",
    slug: "rig-maintenance",
    number: "03",
    iconName: "Wrench",
    title: "Rig & Component Maintenance",
    titleLine1: "Rig & Component",
    titleAccent: "Maintenance",
    subtitle: "Rig Servicing",
    description:
      "Expert maintenance, repair, and overhaul services for drilling rigs and associated mechanical components — minimizing downtime, maximizing safety, and extending asset lifespan.",
    shortDescription:
      "Full-scale rig maintenance, component overhaul & repair, and preventative maintenance programs for heavy drilling machinery.",
    capabilities: [
      "Full-Scale Rig Maintenance",
      "Component Overhaul & Repair",
      "Preventative Maintenance Programs",
    ],
    image:
      "https://placehold.co/720x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0ATechnicians+servicing%0Adrilling+rig+components%0Awith+tools+%26+parts%0A(detailed+pencil+sketch)",
    imageAlt: "Rig maintenance technicians",
    stats: [
      { value: "24/7", label: "On-Site Crews" },
      { value: "< 2h", label: "Response Time" },
      { value: "100%", label: "Logged & Tracked" },
      { value: "365", label: "Days Coverage" },
    ],
  },
  {
    id: "electrical",
    slug: "electrical",
    number: "04",
    iconName: "Zap",
    title: "Electrical & Instrumentation",
    titleLine1: "Electrical &",
    titleAccent: "Instrumentation",
    subtitle: "E&I Infrastructure",
    description:
      "Construction, installation, and management of high-voltage electrical infrastructure and control systems — tailored to the massive power demands of heavy industrial and energy sectors.",
    shortDescription:
      "11kVA to 132kVA power infrastructure, overhead line construction, substation builds, and complete E&I commissioning.",
    capabilities: [
      "High-Voltage Infrastructure (11–132 kVA)",
      "Overhead Line Construction",
      "Substation Construction & Integration",
    ],
    image:
      "https://placehold.co/720x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0AHigh+voltage+substation%0Awith+overhead+power+lines%0A%26+transformer+yard%0A(architectural+pencil+sketch)",
    imageAlt: "High-voltage substation construction",
    stats: [
      { value: "132", label: "kVA Max Rating" },
      { value: "3", label: "Voltage Tiers" },
      { value: "E2E", label: "Survey to Energization" },
      { value: "IEC", label: "Standard Compliance" },
    ],
  },
  {
    id: "pipeline",
    slug: "pipeline-construction",
    number: "05",
    iconName: "ConstructionIcon",
    title: "Pipeline Construction",
    titleLine1: "Pipeline",
    titleAccent: "Construction",
    subtitle: "Infrastructure Development",
    description:
      "End-to-end construction and laying of robust pipeline networks for the safe, efficient transport of extracted resources across challenging terrains.",
    shortDescription:
      "Pipeline routing, welding, NDT, cathodic protection, hydrostatic testing, and full commissioning for oil, gas, and water lines.",
    capabilities: [
      "Pipeline Routing & Construction",
      "Integrity Testing & Commissioning",
      "Cathodic Protection Systems",
    ],
    image:
      "https://placehold.co/720x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0APipeline+construction%0Acrew+laying+pipe%0Ain+desert+terrain%0A(panoramic+pencil+sketch)",
    imageAlt: "Pipeline construction crew in desert",
    stats: [
      { value: "4\"–48\"", label: "Diameter Range" },
      { value: "API", label: "5L / 1104 Standard" },
      { value: "8", label: "Construction Phases" },
      { value: "100%", label: "Weld Inspection" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(currentId: string) {
  return services.filter((s) => s.id !== currentId);
}
