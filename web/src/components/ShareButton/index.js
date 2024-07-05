import { baseUrl, defaultExcerpt } from '@/utils/defaultMetadata';
import { objectToGetParams } from '@/utils/objectToGetParams';
import styles from './shareButton.module.css';
import { Pinterest } from './Icons';

function createPinterestLink({ url, media, description }) {
	return `https://pinterest.com/pin/create/button/${objectToGetParams({
		url,
		media,
		description,
	})}`;
}

export default function ShareButton({ description, image, path }) {
	const shareContent = {
		description: description || defaultExcerpt,
		media: image,
		url: `${baseUrl}${path || ''}`,
	};
	const pinterestLink = createPinterestLink(shareContent);

	return (
		<a className={styles.shareButton}
			href={pinterestLink}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Save to Pinterest"
		>
			<div className={styles.buttonContent}>
				<Pinterest />
				<span>Save</span>
			</div>
		</a>
	);
}