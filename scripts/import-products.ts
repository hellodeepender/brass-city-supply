import { createClient } from '@sanity/client';

// Replace with your actual write token from:
// https://www.sanity.io/manage/project/el95sr1j/api → Tokens → Add API token
const SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN || 'YOUR_TOKEN_HERE';

const client = createClient({
  projectId: 'el95sr1j',
  dataset: 'production',
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const products = [
  {
    _type: 'product',
    id: 'ref002',
    name: 'Iron & Jute Fruit Basket (Black)',
    category: 'Kitchen & Dining',
    material: 'Iron + Jute',
    dimensions: '25.4 \u00d7 20.32 \u00d7 10.16 cm',
    moq: '50 units',
    stock: 6000,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Same durable construction as our natural variant with a sleek black finish. Ideal for modern kitchen aesthetics and retail display.',
  },
  {
    _type: 'product',
    id: 'ref003',
    name: 'Iron & Jute Fruit Basket (Copper Finish)',
    category: 'Kitchen & Dining',
    material: 'Iron + Jute',
    dimensions: '25.4 \u00d7 20.32 \u00d7 10.16 cm',
    moq: '50 units',
    stock: 6000,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Premium copper-finish iron frame with natural jute. Adds warmth and elegance to any kitchen or dining space.',
  },
  {
    _type: 'product',
    id: 'ref004',
    name: 'Airtight Tea Storage Container \u2014 Wood Lid',
    category: 'Kitchen & Dining',
    material: 'Iron body + Mango wood lid + silicone seal',
    dimensions: 'Dia 11cm \u00d7 H 11.5cm',
    capacity: '800ml',
    moq: '50 units',
    stock: 3690,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Beautifully crafted airtight container with a natural mango wood lid and food-grade silicone seal. Keeps tea, coffee, and spices fresh.',
  },
  {
    _type: 'product',
    id: 'ref005',
    name: 'Airtight Sugar Storage Container \u2014 Wood Lid',
    category: 'Kitchen & Dining',
    material: 'Iron body + Mango wood lid + silicone seal',
    dimensions: 'Dia 11cm \u00d7 H 11.5cm',
    capacity: '800ml',
    moq: '50 units',
    stock: 3690,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Matching sugar storage container with mango wood lid. Part of a coordinated kitchen storage collection.',
  },
  {
    _type: 'product',
    id: 'ref006',
    name: 'Airtight Storage Container \u2014 Iron Lid (Small)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm \u00d7 H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: 3610,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Sleek all-iron airtight storage container with silicone-sealed lid. Ideal for sugar, flour, spices, and dry goods.',
  },
  {
    _type: 'product',
    id: 'ref007',
    name: 'Airtight Storage Container \u2014 Iron Lid (Medium)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm \u00d7 H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: 3610,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Medium variant of our all-iron airtight storage collection. Consistent sizing makes these ideal for sets and retail bundling.',
  },
  {
    _type: 'product',
    id: 'ref008',
    name: 'Airtight Storage Container \u2014 Iron Lid (Dark)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm \u00d7 H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: 2800,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Dark finish variant of our iron storage container. The matte dark finish suits contemporary kitchen palettes.',
  },
  {
    _type: 'product',
    id: 'ref009',
    name: 'Airtight Storage Container \u2014 Iron Lid (Matte)',
    category: 'Kitchen & Dining',
    material: 'Iron body + Iron lid + silicone seal',
    dimensions: 'Dia 10cm \u00d7 H 14cm',
    capacity: '900ml',
    moq: '50 units',
    stock: 2800,
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Active',
    description: 'Matte finish variant completing the iron storage collection. Ideal for retailers stocking a full coordinated set.',
  },
  {
    _type: 'product',
    id: 'urn001',
    name: 'Brass Cremation Urn \u2014 Classic',
    category: 'Memorial & Urns',
    material: 'Brass with gold plating option',
    dimensions: 'Standard adult size',
    moq: '10 units',
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Coming Soon',
    description: 'Handcrafted solid brass cremation urn from Moradabad. Available with gold or silver plating. Custom engraving available.',
  },
  {
    _type: 'product',
    id: 'cop001',
    name: 'Copper Moscow Mule Mug',
    category: 'Bar & Beverage',
    material: 'Pure copper',
    dimensions: '16oz standard',
    moq: '50 units',
    wholesale_note: 'Contact for wholesale pricing',
    status: 'Coming Soon',
    description: 'Authentic pure copper Moscow Mule mugs handcrafted in Moradabad. Food-safe lining available. Ideal for bars, restaurants, and gift retailers.',
  },
];

async function importProducts() {
  // Check which products already exist
  const existing = await client.fetch<string[]>(
    `*[_type == "product"].id`
  );
  console.log(`Found ${existing.length} existing product(s):`, existing);

  const toCreate = products.filter((p) => !existing.includes(p.id));
  console.log(`Creating ${toCreate.length} new product(s)...`);

  let created = 0;
  for (const product of toCreate) {
    try {
      const doc = await client.create(product);
      console.log(`  Created: ${product.id} — ${product.name} (${doc._id})`);
      created++;
    } catch (err: any) {
      console.error(`  Failed: ${product.id} — ${err.message}`);
    }
  }

  console.log(`\nDone. ${created} product(s) created, ${existing.length} already existed.`);
}

importProducts().catch(console.error);
