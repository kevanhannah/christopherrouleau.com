import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { TextLink } from '@/components/ui/TextLink';
import { getAllBlogSlugs, getBlogPost } from '@/lib/sanity/queries/blog';
import { urlFor } from '@/lib/sanity/image';
import { sanityImageSrc } from '@/lib/sanity/imageSrc';
import { defaultExcerpt } from '@/utils/defaultMetadata';
import styles from './blogPost.module.css';

export const revalidate = 3600;

export async function generateStaticParams() {
	const slugs = await getAllBlogSlugs();

	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
	props: PageProps<'/blog/[slug]'>
): Promise<Metadata> {
	const { slug } = await props.params;
	const post = await getBlogPost(slug);

	if (!post) {
		return {};
	}

	return {
		title: { absolute: `${post.title} - Christopher Rouleau` },
		description: post.excerpt || defaultExcerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt || defaultExcerpt,
			images: [
				{
					url: urlFor(post.heroImage.id)
						.width(1200)
						.height(627)
						.quality(75)
						.dpr(2)
						.auto('format')
						.url(),
					width: 1200,
					height: 627,
					alt: post.title,
				},
			],
		},
	};
}

const textComponents: PortableTextComponents = {
	block: {
		h2: ({ children }) => <h2 className={styles.heading}>{children}</h2>,
	},
	types: {
		blockImage: ({ value }) => (
			<div className={styles.bodyImageWrapper}>
				<Image
					alt={value.alt}
					fill
					quality={80}
					sizes="(max-width: 970px) 100vw, 800px"
					src={sanityImageSrc(value.image.asset._ref, 800, 800)}
					style={{ objectFit: 'cover' }}
				/>
			</div>
		),
	},
	marks: {
		annotationLinkExternal: ({ children, value }) => {
			const rel = value?.newWindow ? 'noreferrer noopener' : undefined;

			return (
				<TextLink link={value?.url ?? '#'} rel={rel}>
					{children}
				</TextLink>
			);
		},
		annotationLinkInternal: ({ children, value }) => (
			<TextLink internal link={value?.resolvedPath ?? '#'}>
				{children}
			</TextLink>
		),
	},
};

export default async function BlogPost(props: PageProps<'/blog/[slug]'>) {
	const { slug } = await props.params;
	const post = await getBlogPost(slug);

	if (!post) {
		return null;
	}

	const { body, heroImage, publishedAt, title } = post;

	return (
		<div className={styles.blogPost}>
			<div className={styles.blogPostImageWrapper}>
				<Image
					alt={heroImage.alt}
					fill={true}
					priority={true}
					quality={80}
					sizes="(max-width: 970px) 100vw, 800px"
					src={sanityImageSrc(heroImage.id, 800, 800)}
					style={{
						userSelect: 'none',
						boxShadow: '0.5em 0.5em 0 var(--primary-blue)',
					}}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<time className={styles.date}>
						{format(parseISO(publishedAt), 'MMMM d, yyyy')}
					</time>
					<h1 className={styles.title}>{title}</h1>
					<PortableText value={body} components={textComponents} />
				</div>
			</div>
		</div>
	);
}
