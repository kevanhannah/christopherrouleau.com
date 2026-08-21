import { baseUrl, defaultExcerpt } from '@/utils/defaultMetadata';
import { objectToGetParams } from '@/utils/objectToGetParams';
import styles from './shareButton.module.css';
import { Pinterest } from './Icons';

interface ShareButtonProps {
	description?: string;
	image: string;
	path: string;
}

function createPinterestLink({
	url,
	media,
	description,
}: {
	url: string;
	media: string;
	description: string;
}): string {
	return `https://pinterest.com/pin/create/button/${objectToGetParams({ url, media, description })}`;
}

export function ShareButton({ description, image, path }: ShareButtonProps) {
	const pinterestLink = createPinterestLink({
		description: description || defaultExcerpt,
		media: image,
		url: `${baseUrl}${path}`,
	});

	return (
		<a
			className={styles.shareButton}
			href={pinterestLink}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Save to Pinterest">
			<div className={styles.buttonContent}>
				<Pinterest />
				<span>Save</span>
			</div>
		</a>
	);
}
