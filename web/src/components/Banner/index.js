import { client } from '@/utils/sanityClient';
import styles from './banner.module.css';

export default async function Banner() {
	const { bannerActive, bannerLink, bannerText } = await getBannerData();

	return (
		<>
			{bannerActive && (
				<aside className={styles.banner} role="banner">
					<a href={bannerLink}>{bannerText}</a>
				</aside>
			)}
		</>
	);
}
async function getBannerData() {
	const query = `*[_type == "settings"][0] {
		bannerActive,
		bannerLink,
		bannerText
	}`;

	const data = await client.fetch(query);

	return data;
}