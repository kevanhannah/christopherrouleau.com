import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import { resolveLink } from '@/lib/sanity/resolveLink';
import { Button } from '@/components/ui/Button';
import type { HeroData } from '@/lib/sanity/types';
import styles from './hero.module.css';

interface HeroProps {
	content: HeroData;
}

export function Hero({ content }: HeroProps) {
	const { heading, image, link, tagline } = content;
	const rawLink = link[0];
	const resolvedLink = rawLink ? resolveLink(rawLink) : null;

	return (
		<div className={styles.heroOuter}>
			<div className={styles.heroInner}>
				<div className={styles.heroImageWrapper}>
					<Image
						alt={image.alt}
						fill
						placeholder="blur"
						priority={true}
						blurDataURL={image.preview}
						unoptimized
						sizes="(max-width: 700px) 670px, 470px"
						src={urlFor(image.id)
							.width(680)
							.height(382)
							.quality(80)
							.dpr(2)
							.auto('format')
							.url()}
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
					{resolvedLink && (
						<Button
							internal={resolvedLink.internal}
							link={resolvedLink.url}
							text={resolvedLink.text}
							type="secondary"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
