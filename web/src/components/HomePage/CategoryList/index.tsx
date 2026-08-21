import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { ItemCard } from '@/components/common/ItemCard';
import type { CategorySummary } from '@/lib/sanity/types';
import styles from './categoryList.module.css';

interface CategoryListProps {
	categories: CategorySummary[];
}

export function CategoryList({ categories }: CategoryListProps) {
	return (
		<div className={styles.categoryList}>
			{categories.map((category) => (
				<div className={styles.categoryContainer} key={category.id}>
					<h2>{category.name}</h2>
					<CardGrid>
						{category.works.map((work) => (
							<ItemCard
								image={work.image}
								key={work.id}
								link={`/${category.slug.current}/${work.slug.current}`}
								name={work.name}
							/>
						))}
					</CardGrid>
					<Button
						internal
						link={`/${category.slug.current}`}
						text={`All ${category.name}`}
						type="primary"
					/>
				</div>
			))}
		</div>
	);
}
