import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { format, parseISO } from 'date-fns';
import { TextLink } from '@/components/TextLink';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import styles from './blogPost.module.css';

export default async function BlogPost({ params }) {
	const { body, heroImage, publishedAt, slug, title } = await getBlogPost(params.post);

	return (
		<main className={styles.blogPost}>
			<div className={styles.blogPostImageWrapper}>
				<Image 
					alt={heroImage.alt}
					fill={true}
					quality={100}
					src={urlFor(heroImage).url()}
					style={{
						userSelect: 'none',
						boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
					}}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<time className={styles.date}>{format(parseISO(publishedAt), 'MMMM d, yyyy')}</time>
					<h2 className={styles.title}>{title}</h2>
					<PortableText value={body} components={textComponents} />
				</div>
			</div>
		</main>
	);
}

const textComponents = {
	block: {
		h3: ({ children }) => <h3 className={styles.heading}>{children}</h3>,
		h4: ({ children }) => <h4 className={styles.subheading}>{children}</h4>,
	},
	marks: {
		annotationLinkExternal: ({ children, value }) => {
			const rel = value.newWindow ? 'noreferrer noopener' : undefined;

			return (
				<TextLink link={value.url} rel={rel}>
					{children}
				</TextLink>
			);
		},
		annotationLinkInternal: ({ children, value }) => {
			console.log(value);
			const { type } = value;
			const linkValue = type === 'post' ? `blog/${value.slug}` : `${value.slug}`;

			return (
				<TextLink internal link={`/${linkValue}`}>
					{children}
				</TextLink>
			);
		},
	}
};

async function getBlogPost(slug) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0] {
		body[] {
			...,
			markDefs[] {
				...,
				_type == "annotationLinkInternal" => {
					"type": reference->_type,
					"slug": reference->slug.current,
				},
			},
		},
		excerpt,
		heroImage,
		metaImage,
		publishedAt,
		slug,
		title,
	}`;

	const data = await client.fetch(query);

	return data;
}