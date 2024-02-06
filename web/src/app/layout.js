import './globals.css';
import localFont from 'next/font/local';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

const Basecoat = localFont({
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

export async function generateMetadata() {
	const query = `*[_type == "home"][0] {
		introImage
	}`;
	const { introImage: metaImage } = await client.fetch(query);

	return {
		title: {
			default: 'Christopher Rouleau',
			template: '%s - Christopher Rouleau',
		},
		description: 'Graphic designer, letterer and visual artist living in Toronto',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL('https://christopherrouleau.com/'),
		openGraph: {
			title: 'Christopher Rouleau',
			description: 'Graphic designer, letterer and visual artist living in Toronto',
			images: [
				{
					url: urlFor(metaImage).width(1200).height(1200).url(),
					width: 1200,
					height: 1200,
					alt: 'Christopher Rouleau',
				},
			],
			url: 'https://christopherrouleau.com/',
			siteName: 'Christopher Rouleau',
			locale: 'en_CA',
			type: 'website',
		},
	};
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={Basecoat.className}>
			<body>
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	);
}
