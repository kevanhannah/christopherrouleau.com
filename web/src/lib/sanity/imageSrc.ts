/**
 * Encodes a target width/height (used for a hotspot-aware crop to a specific
 * aspect ratio) into the opaque `src` string passed to `next/image`, for the
 * custom loader in `imageLoader.ts` to decode. See that file for why.
 *
 * Kept in a plain (non `'use client'`) module so it can be called from
 * Server Components — `imageLoader.ts` itself is client-only.
 */
export function sanityImageSrc(assetRef: string, width: number, height: number): string {
	return `${assetRef}#${width}x${height}`;
}
