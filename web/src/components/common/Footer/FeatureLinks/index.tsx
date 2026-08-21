import { getFooterData } from '@/lib/sanity/queries/footer';
import { renderFeatureItem } from '@/utils/renderFeatureItem';
import { LatestBlogPost } from './LatestBlogPost';
import styles from './featureLinks.module.css';

export async function FeatureLinks() {
	const { latestPost, featureLists } = await getFooterData();

	return (
		<div className={styles.featureLinks}>
			{latestPost && <LatestBlogPost post={latestPost} />}
			{featureLists.map((list) => (
				<div className={styles.featureLinkColumnContainer} key={list.id}>
					<h2 className={styles.featureLinkColumnHeader}>{list.title}</h2>
					<ul className={styles.featureLinkColumnList}>
						{list.items.map((item) => (
							<li className={styles.featureItem} key={item.id}>
								{renderFeatureItem(item)}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
