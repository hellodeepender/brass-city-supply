import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';

export interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  dimensions: string;
  capacity: string;
  moq: string;
  stock: string;
  wholesale_note: string;
  image_url: string;
  status: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityProduct(doc: any): Product {
  return {
    id: doc.id || '',
    name: doc.name || '',
    category: doc.category || '',
    material: doc.material || '',
    dimensions: doc.dimensions || '',
    capacity: doc.capacity || '',
    moq: doc.moq || '',
    stock: doc.stock ? String(doc.stock) : '',
    wholesale_note: doc.wholesale_note || '',
    image_url: doc.image ? urlFor(doc.image).width(800).url() : '',
    status: doc.status || '',
    description: doc.description || '',
  };
}

const SEED_PRODUCTS: Product[] = [
  {
    id: 'ref001',
    name: 'Iron & Jute Fruit Basket (Natural)',
    category: 'Kitchen & Dining',
    material: 'Iron + Jute',
    dimensions: '25.4 x 20.32 x 10.16 cm',
    capacity: '',
    moq: '50 units',
    stock: '6000',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Durable and eco-friendly fruit basket combining sturdy iron frame with natural jute weaving. Perfect for kitchen countertops, retail display, or gifting. Packaging offered in single piece.',
  },
  {
    id: 'ref002',
    name: 'Iron & Jute Fruit Basket (Black)',
    category: 'Kitchen & Dining',
    material: 'Iron + Jute',
    dimensions: '25.4 x 20.32 x 10.16 cm',
    capacity: '',
    moq: '50 units',
    stock: '6000',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Same durable construction as our natural variant with a sleek black finish. Ideal for modern kitchen aesthetics and retail display.',
  },
  {
    id: 'ref003',
    name: 'Iron & Jute Fruit Basket (Copper Finish)',
    category: 'Kitchen & Dining',
    material: 'Iron + Jute',
    dimensions: '25.4 x 20.32 x 10.16 cm',
    capacity: '',
    moq: '50 units',
    stock: '6000',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Premium copper-finish iron frame with natural jute. Adds warmth and elegance to any kitchen or dining space.',
  },
  {
    id: 'ref004',
    name: 'Airtight Tea Storage Container \u2014 Wood Lid',
    category: 'Kitchen & Dining',
    material: 'Iron body + Mango wood lid + silicone seal',
    dimensions: 'Dia 11cm x H 11.5cm',
    capacity: '800ml',
    moq: '50 units',
    stock: '3690',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Beautifully crafted airtight container with a natural mango wood lid and food-grade silicone seal. Keeps tea, coffee, and spices fresh. The mango wood lid is a genuine differentiator from standard bamboo alternatives.',
  },
  {
    id: 'ref005',
    name: 'Airtight Sugar Storage Container \u2014 Wood Lid',
    category: 'Kitchen & Dining',
    material: 'Iron body + Mango wood lid + silicone seal',
    dimensions: 'Dia 11cm x H 11.5cm',
    capacity: '800ml',
    moq: '50 units',
    stock: '3690',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Matching sugar storage container with mango wood lid. Part of a coordinated kitchen storage collection. Airtight silicone seal keeps contents fresh and moisture-free.',
  },
  {
    id: 'ref006',
    name: 'Airtight Storage Container \u2014 Iron Lid (Small)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm x H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: '3610',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Sleek all-iron airtight storage container with silicone-sealed lid. Ideal for sugar, flour, spices, and dry goods. Clean industrial aesthetic suits modern and farmhouse kitchen styles.',
  },
  {
    id: 'ref007',
    name: 'Airtight Storage Container \u2014 Iron Lid (Medium)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm x H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: '3610',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Medium variant of our all-iron airtight storage collection. Consistent sizing makes these ideal for sets and retail bundling opportunities.',
  },
  {
    id: 'ref008',
    name: 'Airtight Storage Container \u2014 Iron Lid (Dark)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm x H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: '2800',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Dark finish variant of our iron storage container. The matte dark finish suits contemporary kitchen palettes. Strong demand in US specialty retail.',
  },
  {
    id: 'ref009',
    name: 'Airtight Storage Container \u2014 Iron Lid (Matte)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm x H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: '2800',
    wholesale_note: '',
    image_url: '',
    status: 'Active',
    description: 'Matte finish variant completing the iron storage collection. Ideal for retailers looking to stock a full coordinated set across finishes.',
  },
  {
    id: 'urn001',
    name: 'Brass Cremation Urn \u2014 Classic',
    category: 'Memorial & Urns',
    material: 'Brass with gold plating option',
    dimensions: 'Standard adult size',
    capacity: '',
    moq: '10 units',
    stock: '',
    wholesale_note: '',
    image_url: '',
    status: 'Coming Soon',
    description: 'Handcrafted solid brass cremation urn from Moradabad. Available with gold or silver plating finish. Custom engraving available. Contact us for samples and wholesale pricing.',
  },
  {
    id: 'cop001',
    name: 'Copper Moscow Mule Mug',
    category: 'Bar & Beverage',
    material: 'Pure copper',
    dimensions: '16oz standard',
    capacity: '',
    moq: '50 units',
    stock: '',
    wholesale_note: '',
    image_url: '',
    status: 'Coming Soon',
    description: 'Authentic pure copper Moscow Mule mugs handcrafted in Moradabad. Food-safe lining available. Ideal for bars, restaurants, hospitality groups, and gift retailers.',
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    const docs = await client.fetch(
      `*[_type == "product" && status in ["Active", "Coming Soon"]] | order(_createdAt asc)`
    );
    if (docs && docs.length > 0) {
      return docs.map(mapSanityProduct);
    }
  } catch {
    // Fall through to seed data
  }

  return SEED_PRODUCTS.filter(
    (p) => p.status === 'Active' || p.status === 'Coming Soon'
  );
}

export async function getProductById(id: string): Promise<Product | undefined> {
  try {
    const doc = await client.fetch(
      `*[_type == "product" && id == $id][0]`,
      { id }
    );
    if (doc) return mapSanityProduct(doc);
  } catch {
    // Fall through to seed data
  }

  return SEED_PRODUCTS.find((p) => p.id === id);
}
