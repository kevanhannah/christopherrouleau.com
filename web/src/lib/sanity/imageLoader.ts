'use client';

import { urlFor } from './image';

/**
 * Custom next/image loader for Sanity-hosted images.
 *
 * Next calls this once per breakpoint width it needs for a `srcset`, so the
 * responsive delivery Sanity's CDN already supports comes through as a real
 * `srcset` instead of one fixed-size URL — without routing through Vercel's
 * Image Optimization API (this loader talks to Sanity's CDN directly).
 *
 * Next's loader signature only gives us `{ src, width, quality }` — no
 * height — but several call sites rely on a hotspot-aware crop to a specific
 * aspect ratio (e.g. square thumbnails), which Sanity's image API only
 * applies when both width and height are requested. To preserve that crop
 * across every generated breakpoint, callers encode the target aspect ratio
 * into `src` as `${assetRef}#${width}x${height}` via `sanityImageSrc`
 * (in `imageSrc.ts` — kept out of this file since `'use client'` here would
 * otherwise make that plain helper uncallable from Server Components).
 */
interface SanityLoaderParams {
	src: string;
	width: number;
	quality?: number;
}

export default function sanityImageLoader({ src, width, quality }: SanityLoaderParams): string {
	const [assetRef = src, dimensions = '1x1'] = src.split('#');
	const [targetWidth = 1, targetHeight = 1] = dimensions.split('x').map(Number);
	const height = Math.round(width / (targetWidth / targetHeight));

	return urlFor(assetRef)
		.width(width)
		.height(height)
		.quality(quality ?? 75)
		.auto('format')
		.url();
}
