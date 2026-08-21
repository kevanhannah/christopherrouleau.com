import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { Metadata } from 'next';
import { getAboutPage } from '@/lib/sanity/queries/about';
import { urlFor } from '@/lib/sanity/image';
import styles from './about.module.css';

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
		<main className={styles.about}>
			<div className={styles.aboutPageImageWrapper}>
				<Image
					alt={image.alt}
					fill
					priority={true}
					unoptimized
					sizes="(max-width: 800px) 100vw, 50w"
					src={urlFor(image.id)
						.width(800)
						.height(800)
						.quality(80)
						.dpr(2)
						.auto('format')
						.url()}
					style={{
						boxShadow: '0.5em 0.5em 0 var(--primary-blue)',
						objectFit: 'cover',
						userSelect: 'none',
					}}
				/>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.lead}>{lead}</p>
			<PortableText value={content} components={textComponents} />
		</main>
	);
}
