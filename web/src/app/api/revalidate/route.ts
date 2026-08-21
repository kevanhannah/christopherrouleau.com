import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * Sanity webhook target. Configure in the Sanity project's webhook settings
 * to POST here on document publish, with a `sanity-webhook-signature`-style
 * shared secret and a projection of at least `{ _type, slug }`.
 *
 * This uses `revalidatePath`, not `revalidateTag`: the Sanity GROQ client
 * (`@sanity/client`) makes its requests through its own HTTP transport, not
 * the global `fetch`, so nothing here ever enters Next's tag-based fetch
 * cache for `revalidateTag` to invalidate.
 */

interface SanityWebhookPayload {
	_type: string;
	slug?: { current?: string };
}

export async function POST(request: Request) {
	try {
		const secret = request.headers.get('x-revalidate-secret');

		if (
			!process.env.SANITY_REVALIDATE_SECRET ||
			secret !== process.env.SANITY_REVALIDATE_SECRET
		) {
			return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
		}

		const payload = (await request.json()) as SanityWebhookPayload;

		switch (payload._type) {
			case 'home':
				revalidatePath('/');
				break;
			case 'about':
				revalidatePath('/about');
				break;
			case 'settings':
				// The banner renders in the root layout, on every route.
				revalidatePath('/', 'layout');
				break;
			case 'post':
				revalidatePath('/blog');
				if (payload.slug?.current) {
					revalidatePath(`/blog/${payload.slug.current}`);
				}
				break;
			case 'category':
			case 'work':
			case 'featureList':
			case 'featureItem':
				// Category/work changes can affect nested paths under multiple
				// categories (series, related-work listings); revalidating the
				// whole tree is simpler and safer than tracing every affected
				// route for a low-traffic site.
				revalidatePath('/', 'layout');
				break;
			default:
				break;
		}

		return NextResponse.json({ revalidated: true, now: Date.now() });
	} catch (error) {
		console.error('Revalidation failed', error);
		return NextResponse.json(
			{ message: 'Revalidation failed' },
			{ status: 500 }
		);
	}
}
