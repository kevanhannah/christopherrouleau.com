import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: '2023-10-15',
	useCdn: true,
});
