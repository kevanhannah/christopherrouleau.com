import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
	throw new Error(
		'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET environment variables.'
	);
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion: '2024-01-01',
	// This app only ever fetches server-side during SSG/ISR; the CDN's
	// eventual-consistency window and rate limiting under build-time
	// concurrency make it the wrong choice here.
	useCdn: false,
});
