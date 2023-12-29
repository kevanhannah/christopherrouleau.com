import CardGrid from '@/components/CardGrid';
import ItemCard from '@/components/ItemCard';
import styles from './category.module.css';

export function CategoryPage({ category }) {
	const { name, slug, works } = category;

	return (
		<div className={styles.categoryPage}>
			<h2 className={styles.categoryName}>{name}</h2>
			<CardGrid>
				{works.map((work) => (
					<ItemCard
						image={work.image}
						key={work.id}
						link={`${slug.current}/${work.slug.current}`}
						name={work.name}
					/>
				))}
			</CardGrid>
		</div>
	);
}
