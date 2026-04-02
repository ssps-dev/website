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
    title: "Drilling Services",
    titleLine1: "Drilling",
    titleAccent: "Services",
    subtitle: "Upstream Operations",
    description:
      "We provide end-to-end drilling solutions for oil, gas, and industrial applications, ensuring safe, efficient, and cost-effective operations. Our expertise covers site preparation, execution, and completion with strict adherence to industry standards.",
    shortDescription:
      "End-to-end drilling solutions for oil, gas, and industrial applications with wireline, slickline, nitrogen pumping, coil tubing, and more.",
    capabilities: [
      "Wireline & Slickline Unit Services",
      "Nitrogen Pumping & Coil Tubing",
      "Hydraulic Workover Units (HWU)",
      "Cementing & Well Testing",
      "Mud Logging & Solids Control",
    ],
    image:
      "/img/drilling.webp",
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
      "/img/equipments.webp",
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
      "Our Operations & Maintenance (O&M) services ensure optimal performance and longevity of drilling and workover rigs. We focus on minimizing downtime, improving efficiency, and maintaining the highest safety standards.",
    shortDescription:
      "O&M services for drilling and workover rigs — minimizing downtime, improving efficiency, and maintaining the highest safety standards.",
    capabilities: [
      "Full-Scale Rig Maintenance",
      "Component Overhaul & Repair",
      "Preventative Maintenance Programs",
    ],
    image:
      "/img/maintenance.webp",
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
      "Construction, installation, and management of high-voltage electrical infrastructure and control systems — tailored to the demanding power requirements of heavy industrial and energy sectors.",
    shortDescription:
      "11kV to 132kV power infrastructure, overhead line construction, substation builds, and complete E&I commissioning.",
    capabilities: [
      "High-Voltage Infrastructure (11–132 kV)",
      "Overhead Line Construction",
      "Substation Construction & Integration",
    ],
    image:
      "/img/electric.webp",
    imageAlt: "High-voltage substation construction",
    stats: [
      { value: "132kV", label: "Max Voltage Rating" },
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
      "/img/pipeline.webp",
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
