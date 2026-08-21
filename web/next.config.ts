import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		cpus: 1,
	},
	reactCompiler: true,
	images: {
		loader: 'custom',
		loaderFile: './src/lib/sanity/imageLoader.ts',
		// Tuned to this site's actual display widths (thumbnails through the
		// ~970px content column) rather than Next's generic defaults, so the
		// custom loader isn't asked to generate breakpoints nothing uses.
		imageSizes: [180, 240, 320, 400],
		deviceSizes: [400, 680, 780, 800, 970, 1200, 1940],
		qualities: [60, 80, 100],
	},
};

export default nextConfig;
