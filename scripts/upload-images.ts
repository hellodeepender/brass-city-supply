import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';

const SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN || 'YOUR_TOKEN_HERE';

const client = createClient({
  projectId: 'el95sr1j',
  dataset: 'production',
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const IMAGE_DIR = path.join(__dirname, '..', 'product_images');

const imageMap: { file: string; productId: string }[] = [
  { file: 'ref001-fruit-basket-natural.png', productId: 'ref001' },
  { file: 'ref002-fruit-basket-black.png', productId: 'ref002' },
  { file: 'ref003-fruit-basket-copper.png', productId: 'ref003' },
  { file: 'ref004-container-wood-lid-tea.png', productId: 'ref004' },
  { file: 'ref005-container-wood-lid-sugar.png', productId: 'ref005' },
  { file: 'ref006-container-iron-lid-small.png', productId: 'ref006' },
  { file: 'ref007-container-iron-lid-medium.png', productId: 'ref007' },
];

async function uploadImages() {
  let success = 0;

  for (const { file, productId } of imageMap) {
    const filePath = path.join(IMAGE_DIR, file);
    console.log(`Uploading ${file}...`);

    try {
      // Upload image asset
      const asset = await client.assets.upload('image', createReadStream(filePath), {
        filename: file,
      });
      console.log(`  Uploaded asset: ${asset._id}`);

      // Find the product document by id field
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "product" && id == $productId][0]{ _id }`,
        { productId }
      );

      if (!doc) {
        console.error(`  Product not found for id: ${productId}`);
        continue;
      }

      // Patch the product with the image reference
      await client
        .patch(doc._id)
        .set({
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          },
        })
        .commit();

      console.log(`  Attached to product ${productId} (${doc._id})`);
      success++;
    } catch (err: any) {
      console.error(`  Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\nDone. ${success}/${imageMap.length} images uploaded and attached.`);
}

uploadImages().catch(console.error);
