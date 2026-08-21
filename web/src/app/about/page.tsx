import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { Metadata } from 'next';
import { getAboutPage } from '@/lib/sanity/queries/about';
import { urlFor } from '@/lib/sanity/image';
import { sanityImageSrc } from '@/lib/sanity/imageSrc';
import { JsonLd } from '@/components/common/JsonLd';
import { baseUrl } from '@/utils/defaultMetadata';
import styles from './about.module.css';

export const revalidate = 3600;

const textComponents: PortableTextComponents = {
	block: {
		h3: ({ children }) => <h3 className={styles.heading}>{children}</h3>,
		h4: ({ children }) => <h4 className={styles.subheading}>{children}</h4>,
	},
};

export async function generateMetadata(): Promise<Metadata> {
	const about = await getAboutPage();

	return {
		title: 'About',
		description: about?.lead,
		openGraph: about?.image
			? {
					title: 'About',
					description: about.lead,
					images: [
						{
							url: urlFor(about.image.id)
								.width(1200)
								.height(627)
								.quality(75)
								.dpr(2)
								.auto('format')
								.url(),
							width: 1200,
							height: 627,
							alt: about.title,
						},
					],
				}
			: undefined,
	};
}

export default async function AboutPage() {
	const about = await getAboutPage();

	if (!about) {
		return null;
	}

	const { content, image, title, lead } = about;

	return (
		<div className={styles.about}>
			<JsonLd
				data={{
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: 'Christopher Rouleau',
					jobTitle: 'Graphic designer, letterer and visual artist',
					description: lead,
					url: baseUrl,
					image: urlFor(image.id).width(800).height(800).quality(80).auto('format').url(),
					address: {
						'@type': 'PostalAddress',
						addressLocality: 'Toronto',
						addressRegion: 'ON',
						addressCountry: 'CA',
					},
				}}
			/>
			<div className={styles.aboutPageImageWrapper}>
				<Image
					alt={image.alt}
					fill
					priority={true}
					quality={80}
					sizes="(max-width: 800px) 100vw, 50w"
					src={sanityImageSrc(image.id, 800, 800)}
					style={{
						boxShadow: '0.5em 0.5em 0 var(--primary-blue)',
						objectFit: 'cover',
						userSelect: 'none',
					}}
				/>
			</div>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.lead}>{lead}</p>
			<PortableText value={content} components={textComponents} />
		</div>
	);
}
