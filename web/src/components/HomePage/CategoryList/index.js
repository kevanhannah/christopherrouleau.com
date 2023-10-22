import Button from '@/components/Button';
import CardGrid from '@/components/CardGrid';
import ItemCard from '@/components/ItemCard';
import styles from './categoryList.module.css';

export default function CategoryList({ categories }) {
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
								link={work.slug.current}
								name={work.name}
							/>
						))}
					</CardGrid>
					{category.linkToMore && (
						<Button
							internal
							link={category.slug.current}
							text={`All ${category.name}`}
							type="primary"
						/>
					)}
				</div>
			))}
		</div>
	);
}
