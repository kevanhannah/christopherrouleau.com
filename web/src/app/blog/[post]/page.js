import { format, parseISO } from 'date-fns';
import { client } from '@/utils/sanityClient';
import styles from './blogPost.module.css';

export default async function BlogPost({ params }) {
	const post = await getBlogPost(params.post);
	const postDate = format(parseISO(post.publishedAt), 'MMMM d, yyyy');

	return (
		<main className={styles.blogPost}>
			<div className={styles.content}>
				<div className={styles.header}>
					<time className={styles.date}>{postDate}</time>
					<h2 className={styles.title}>{post.title}</h2>
				</div>
			</div>
		</main>
	);
}

async function getBlogPost(slug) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0] {
		body,
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