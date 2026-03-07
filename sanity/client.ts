import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'el95sr1j',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
