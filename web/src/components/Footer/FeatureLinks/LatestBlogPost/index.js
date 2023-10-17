import Link from 'next/link';
import featureLinkStyles from '../featureLinks.module.css';
import styles from './latestBlogPost.module.css';

export default function LatestBlogPost({ post }) {
	const { excerpt, title, publishedAt, slug } = post;
	const postYear = new Date(publishedAt).getFullYear();

	return (
		<div className={styles.latestBlogPost}>
			<h2 className={featureLinkStyles.featureLinkColumnHeader}>
				Latest Blog Post
			</h2>
			<h3>
				<Link href={`/blog/${postYear}/${slug.current}`}>{title}</Link>
			</h3>
			<p>{excerpt}</p>
			<p>
				<Link href={`/blog/${postYear}/${slug.current}`}>Read this post</Link>
			</p>
		</div>
	);
}
