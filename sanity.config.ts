import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  projectId: 'el95sr1j',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'product',
        type: 'document',
        title: 'Product',
        fields: [
          { name: 'id', type: 'string', title: 'Product ID' },
          { name: 'name', type: 'string', title: 'Product Name' },
          { name: 'category', type: 'string', title: 'Category' },
          { name: 'material', type: 'string', title: 'Material' },
          { name: 'dimensions', type: 'string', title: 'Dimensions' },
          { name: 'capacity', type: 'string', title: 'Capacity' },
          { name: 'moq', type: 'string', title: 'Minimum Order Quantity' },
          { name: 'stock', type: 'number', title: 'Stock' },
          { name: 'wholesale_note', type: 'string', title: 'Wholesale Note' },
          { name: 'image', type: 'image', title: 'Product Image', options: { hotspot: true } },
          { name: 'status', type: 'string', title: 'Status', options: { list: ['Active', 'Coming Soon', 'Discontinued'] } },
          { name: 'description', type: 'text', title: 'Description' },
        ],
      },
    ],
  },
});
