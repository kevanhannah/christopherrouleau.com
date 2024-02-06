import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Badge from '@/components/WorkPage/Badge';
import CardGrid from '@/components/CardGrid';
import Gallery from '@/components/WorkPage/Gallery';
import ItemCard from '@/components/ItemCard';
import { handleRelatedWorks } from '@/utils/handleRelatedWorks';
import styles from './work.module.css';

export function WorkPage({ work }) {
	const year = new Date(work.releaseDate).getFullYear();
	const { relatedWorksHeading, relatedWorksLinkPath } =
		handleRelatedWorks(work);

	return (
		<div className={styles.workPage}>
			<div className={styles.workDetails}>
				<Badge link={`/${work.category.slug}`} text={work.category.name} />
				<div>
					<h2 className={styles.workTitle}>{work.name}</h2>
					<time className={styles.workYear} dateTime={year}>
						({year})
					</time>
				</div>
				<PortableText value={work.description} />
				{work.parentWork && (
					<>
						<h3 className={styles.seriesTitle}>From {work.parentWork.name}</h3>
						<p>{work.parentWork.excerpt}</p>
						<Link href="./">More about {work.parentWork.name}</Link>
					</>
				)}
			</div>
			<Gallery images={work.images} />
			<div className={styles.relatedWorks}>
				<h3>{relatedWorksHeading}</h3>
				<CardGrid>
					{work.relatedWorks.map((relatedWork) => (
						<ItemCard
							image={relatedWork.image}
							key={relatedWork.id}
							link={`${relatedWorksLinkPath}/${relatedWork.slug.current}`}
							name={relatedWork.name}
						/>
					))}
				</CardGrid>
			</div>
		</div>
	);
}
