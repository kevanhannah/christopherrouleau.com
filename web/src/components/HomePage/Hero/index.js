import Image from 'next/image';
import { urlFor } from '@/utils/sanityImage';
import Button from '../../Button';
import styles from './hero.module.css';
import { parseSanityLink } from '@/utils/parseSanityLink';

export default function Hero({ content }) {
	const { heading, image, link, tagline } = content;
	const parsedLink = parseSanityLink(link[0]);

	return (
		<div className={styles.heroOuter}>
			<div className={styles.heroInner}>
				<div className={styles.heroImageWrapper}>
					<Image
						alt={image.alt}
						fill={true}
						quality={100}
						src={urlFor(image).url()}
						style={{
							boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
							objectFit: 'cover',
							userSelect: 'none',
						}}
					/>
				</div>
				<div className={styles.heroTextWrapper}>
					<h2>{heading}</h2>
					<p>{tagline}</p>
					<Button
						internal={parsedLink === 'internal'}
						link={parsedLink.url}
						text={parsedLink.text}
						type="secondary"
					/>
				</div>
			</div>
		</div>
	);
}
