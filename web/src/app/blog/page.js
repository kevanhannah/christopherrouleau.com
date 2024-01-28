import CardGrid from '@/components/CardGrid';
import ItemCard from '@/components/ItemCard';
import { client } from '@/utils/sanityClient';
import styles from './blogList.module.css';

export default async function BlogList() {
	const posts = await getBlogPosts();

	return (
		<main className={styles.blogList}>
			<h2 className={styles.title}>Blog</h2>
			<CardGrid>
				{posts.map((post) => (
					<ItemCard
						date={post.publishedAt}
						image={post.heroImage}
						key={post._id}
						link={`blog/${post.slug.current}`}
						name={post.title}
					/>
				))}
			</CardGrid>
		</main>
	);
}

async function getBlogPosts() {
	const query = `*[_type == "post"] | order(publishedAt desc) {
		_id,
		heroImage,
		publishedAt,
		slug {
			current
		},
		title,
	}`;

	const data = await client.fetch(query);

	return data;
}