import { CardGrid } from '@/components/ui/CardGrid';
import { ItemCard } from '@/components/common/ItemCard';
import { getBlogPosts } from '@/lib/sanity/queries/blog';
import styles from './blogList.module.css';

export const revalidate = 3600;

export default async function BlogList() {
	const posts = await getBlogPosts();

	return (
		<div className={styles.blogList}>
			<h1 className={styles.title}>Blog</h1>
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
		</div>
	);
}
