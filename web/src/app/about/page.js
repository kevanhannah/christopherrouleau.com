import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import styles from './about.module.css';

export default async function AboutPage() {
	const { content, image, title, lead } = await getAboutContent();

	return (
		<main className={styles.about}>
			<div className={styles.aboutPageImageWrapper}>
				<Image
					alt={image.alt}
					fill
					priority={true}
					quality={100}
					sizes="(max-width: 800px) 100vw, 50w"
					src={urlFor(image).url()}
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

const textComponents = {
	block: {
		h3: ({ children }) => <h3 className={styles.heading}>{children}</h3>,
		h4: ({ children }) => <h4 className={styles.subheading}>{children}</h4>,
	},
};

async function getAboutContent() {
	const query = `*[_type == "about"][0] {
		"content": pageContent,
		"image": introImage,
		"lead": pageLead,
		"title": pageHeading
	}`;

	const data = await client.fetch(query);

	return data;
}
