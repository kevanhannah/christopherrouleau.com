import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Badge } from '@/components/WorkPage/Badge';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Gallery } from '@/components/WorkPage/Gallery';
import { ItemCard } from '@/components/common/ItemCard';
import { ShareButton } from '@/components/common/ShareButton';
import { handleRelatedWorks } from '@/utils/handleRelatedWorks';
import { urlFor } from '@/lib/sanity/image';
import type { WorkDetail } from '@/lib/sanity/types';
import styles from './work.module.css';

interface WorkPageProps {
	work: WorkDetail;
}

export function WorkPage({ work }: WorkPageProps) {
	const year = new Date(work.releaseDate).getFullYear();
	const { relatedWorksHeading, relatedWorksLinkPath } =
		handleRelatedWorks(work);

	return (
		<div className={styles.workPage}>
			<div className={styles.workDetails}>
				<Badge link={`/${work.category.slug}`} text={work.category.name} />
				<div>
					<h2 className={styles.workTitle}>{work.name}</h2>
					<time className={styles.workYear} dateTime={String(year)}>
						({year})
					</time>
				</div>
				<PortableText value={work.description} />
				{work.parent && (
					<>
						<h3 className={styles.seriesTitle}>From {work.parent.name}</h3>
						<p>{work.parent.excerpt}</p>
						<Link href={relatedWorksLinkPath}>
							More about {work.parent.name}
						</Link>
					</>
				)}
			</div>
			<div className={styles.galleryWrapper}>
				<Gallery images={work.images} />
				<div className={styles.buttonRow}>
					{work.forSale && work.storeUrl && (
						<Button link={work.storeUrl} text="Buy in store" type="primary" />
					)}
					<ShareButton
						description={work.excerpt}
						image={urlFor(work.metaImage.id)
							.width(1200)
							.height(627)
							.quality(75)
							.dpr(2)
							.auto('format')
							.url()}
						path={`/${work.category.slug}/${work.slug.current}`}
					/>
				</div>
			</div>
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
