import vessel from "@/assets/product-vessel-chair.jpg";
import monolith from "@/assets/product-monolith-table.jpg";
import aura from "@/assets/product-aura-lamp.jpg";
import cloud from "@/assets/product-cloud-sofa.jpg";
import path from "@/assets/product-path-stool.jpg";
import horizon from "@/assets/product-horizon-shelf.jpg";
import pedestal from "@/assets/product-pedestal-table.jpg";

export type ProductCategory = "Seating" | "Tables" | "Lighting" | "Storage";

export interface Product {
  slug: string;
  name: string;
  number: string;
  category: ProductCategory;
  material: string;
  price: number;
  image: string;
  description: string;
  dimensions: string;
  origin: string;
  leadTime: string;
}

export const products: Product[] = [
  {
    slug: "vessel-seating-01",
    name: "Vessel Seating 01",
    number: "AC-001",
    category: "Seating",
    material: "Ash / Natural Oil",
    price: 2850,
    image: vessel,
    description:
      "A study in negative space. The Vessel chair frames the body in a single bent silhouette of solid ash, finished by hand with natural oil that deepens with age.",
    dimensions: "H 78 × W 62 × D 60 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "6–8 weeks",
  },
  {
    slug: "monolith-low-table",
    name: "Monolith Low Table",
    number: "AC-002",
    category: "Tables",
    material: "Solid Smoked Oak",
    price: 4100,
    image: monolith,
    description:
      "A single mass of smoked oak resting on a recessed plinth. The Monolith reads as a quiet architectural gesture in the room.",
    dimensions: "H 32 × W 120 × D 78 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "8–10 weeks",
  },
  {
    slug: "aura-stem-light",
    name: "Aura Stem Light",
    number: "AC-003",
    category: "Lighting",
    material: "Brushed Brass / Stone",
    price: 1450,
    image: aura,
    description:
      "A slender brushed brass stem anchored in a hand-cut travertine base. Diffused linen shade casts an even, warm pool of light.",
    dimensions: "H 162 × Ø 38 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "4–6 weeks",
  },
  {
    slug: "cloud-module-sofa",
    name: "Cloud Module Sofa",
    number: "AC-004",
    category: "Seating",
    material: "Bouclé / Wool",
    price: 8900,
    image: cloud,
    description:
      "Two organic modules drift into one another to form a soft, sculptural perimeter. Upholstered in dense Italian bouclé.",
    dimensions: "H 76 × W 260 × D 140 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "10–12 weeks",
  },
  {
    slug: "path-counter-stool",
    name: "Path Counter Stool",
    number: "AC-005",
    category: "Seating",
    material: "Black Ebonized Ash",
    price: 850,
    image: path,
    description:
      "Ebonized ash worked into a four-legged architecture. The seat is gently scooped to receive the body without ornament.",
    dimensions: "H 76 × W 38 × D 36 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "4–6 weeks",
  },
  {
    slug: "horizon-wall-unit",
    name: "Horizon Wall Unit",
    number: "AC-006",
    category: "Storage",
    material: "Extruded Aluminum",
    price: 2200,
    image: horizon,
    description:
      "Three flat planes suspended in space. The Horizon unit reads as a horizon line — an unbroken architectural shelf for everyday objects.",
    dimensions: "H 90 × W 140 × D 26 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "6–8 weeks",
  },
  {
    slug: "pedestal-table-no-4",
    name: "Pedestal Table No. 4",
    number: "AC-007",
    category: "Tables",
    material: "Walnut / Natural Oil",
    price: 5200,
    image: pedestal,
    description:
      "A solid walnut dining surface lifted by two sculpted pedestals. Seats six in quiet, gathered geometry.",
    dimensions: "H 74 × W 220 × D 96 cm",
    origin: "Crafted in Copenhagen",
    leadTime: "10–12 weeks",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const categories: ProductCategory[] = ["Seating", "Tables", "Lighting", "Storage"];
