import { CardGrid } from '@/components/ui/CardGrid';
import { ItemCard } from '@/components/common/ItemCard';
import { getBlogPosts } from '@/lib/sanity/queries/blog';
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
						image={post.image}
						key={post.id}
						link={`/blog/${post.slug.current}`}
						name={post.title}
					/>
				))}
			</CardGrid>
		</main>
	);
}
