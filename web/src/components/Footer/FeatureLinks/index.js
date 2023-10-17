import { client } from '@/utils/sanityClient';
import { renderFeatureItem } from '@/utils/renderFeatureItem';
import LatestBlogPost from './LatestBlogPost';
import styles from './featureLinks.module.css';

export default async function FeatureLinks() {
	const { latestPost, featureLists } = await getFeatureLinkData();

	return (
		<div className={styles.featureLinks}>
			<LatestBlogPost post={latestPost} />
			{featureLists.map((list) => (
				<div className={styles.featureLinkColumnContainer} key={list.id}>
					<h2 className={styles.featureLinkColumnHeader}>{list.title}</h2>
					<ul className={styles.featureLinkColumnList}>
						{list.items.map((item) => {
							const renderedItem = renderFeatureItem(item);
							return (
								<li className={styles.featureItem} key={item.id}>
									{renderedItem}
								</li>
							);
						})}
					</ul>
				</div>
			))}
		</div>
	);
}

async function getFeatureLinkData() {
	const query = `
		{
			'latestPost': *[_type == 'post'] | order(publishedAt desc)[0] {
				excerpt,
				publishedAt,
				slug {
					current
				},
				title
			},
			'featureLists': *[_type == 'featureList'] | order(orderRank asc) {
				'id': _id,
				title,
					'items': *[_type == 'featureItem' && references(^._id)] | order(orderRank asc) {
					endDate,
					'id': _id,
					reference-> {
						'id': _id,
						name,
						slug {
							current
						}
					},
					startDate,
					type,
					text,
					url
				}
			}
		}
	`;

	const data = await client.fetch(query);

	return data;
}
