import { getSettings } from '@/lib/sanity/queries/settings';
import styles from './banner.module.css';

export async function Banner() {
	const settings = await getSettings();

	if (!settings?.bannerActive) {
		return null;
	}

	return (
		<aside className={styles.banner} role="banner">
			<a href={settings.bannerLink ?? undefined}>{settings.bannerText}</a>
		</aside>
	);
}
