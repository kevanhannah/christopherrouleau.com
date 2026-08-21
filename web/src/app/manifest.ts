import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Christopher Rouleau',
		short_name: 'Christopher Rouleau',
		description: 'Graphic designer, letterer and visual artist living in Toronto',
		start_url: '/',
		display: 'standalone',
		background_color: '#FFFFFF',
		theme_color: '#F9D44D',
		icons: [
			{
				src: '/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
