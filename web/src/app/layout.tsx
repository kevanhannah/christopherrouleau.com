import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getHomeMetaImage } from '@/lib/sanity/queries/home';
import { urlFor } from '@/lib/sanity/image';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';

const basecoat = localFont({
	src: [
		{
			path: '../assets/fonts/basecoat.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/basecoat-light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/basecoat-bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
});

export async function generateMetadata(): Promise<Metadata> {
	const home = await getHomeMetaImage();

	return {
		title: {
			default: 'Christopher Rouleau',
			template: '%s - Christopher Rouleau',
		},
		description:
			'Graphic designer, letterer and visual artist living in Toronto',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL('https://christopherrouleau.com/'),
		openGraph: {
			title: 'Christopher Rouleau',
			description:
				'Graphic designer, letterer and visual artist living in Toronto',
			images: home?.introImage
				? [
						{
							url: urlFor(home.introImage.id)
								.width(1200)
								.height(627)
								.quality(75)
								.dpr(2)
								.auto('format')
								.url(),
							width: 1200,
							height: 627,
							alt: 'Christopher Rouleau',
						},
					]
				: [],
			url: 'https://christopherrouleau.com/',
			siteName: 'Christopher Rouleau',
			locale: 'en_CA',
			type: 'website',
		},
	};
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={basecoat.className}>
			<body>
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	);
}
