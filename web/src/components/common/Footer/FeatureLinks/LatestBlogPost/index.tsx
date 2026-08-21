import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/sanity/types';
import featureLinkStyles from '../featureLinks.module.css';
import styles from './latestBlogPost.module.css';

interface LatestBlogPostProps {
	post: BlogPostSummary;
}

export function LatestBlogPost({ post }: LatestBlogPostProps) {
	const href = `/blog/${post.slug.current}`;

	return (
		<div className={styles.latestBlogPost}>
			<h2 className={featureLinkStyles.featureLinkColumnHeader}>
				Latest Blog Post
			</h2>
			<h3>
				<Link href={href}>{post.title}</Link>
			</h3>
			<p>{post.excerpt}</p>
			<p>
				<Link href={href}>Read this post</Link>
			</p>
		</div>
	);
}
