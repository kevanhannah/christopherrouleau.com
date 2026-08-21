import { CardGrid } from '@/components/ui/CardGrid';
import { ItemCard } from '@/components/common/ItemCard';
import type { CategoryPageData } from '@/lib/sanity/types';
import styles from './category.module.css';

interface CategoryPageProps {
	category: CategoryPageData;
}

export function CategoryPage({ category }: CategoryPageProps) {
	const { name, slug, works } = category;

	return (
		<div className={styles.categoryPage}>
			<h2 className={styles.categoryName}>{name}</h2>
			<CardGrid>
				{works.map((work, index) => (
					<ItemCard
						image={work.image}
						key={work.id}
						link={`/${slug.current}/${work.slug.current}`}
						name={work.name}
						priority={index < 12}
					/>
				))}
			</CardGrid>
		</div>
	);
}
