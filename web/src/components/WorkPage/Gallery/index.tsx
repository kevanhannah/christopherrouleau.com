'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import { createShimmer, toBase64 } from '@/utils/createShimmer';
import type { SanityImage } from '@/lib/sanity/types';
import styles from './gallery.module.css';

interface GalleryProps {
	images: SanityImage[];
}

export function Gallery({ images }: GalleryProps) {
	const [index, setIndex] = useState(0);
	const featured = images[index];

	if (!featured) {
		return null;
	}

	return (
		<div className={styles.galleryContainer}>
			<div className={styles.featureImageContainer}>
				<Image
					alt={featured.alt}
					fill={true}
					key={featured.id}
					unoptimized
					priority={true}
					placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(700, 700))}`}
					sizes="(max-width: 800px) 770px, 450px"
					src={urlFor(featured.id)
						.width(780)
						.height(780)
						.quality(100)
						.dpr(2)
						.auto('format')
						.url()}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.galleryRow}>
					{images.map((image, imgIndex) => (
						<div
							className={`${styles.imageWrapper} ${imgIndex === index ? styles.selected : ''}`}
							key={image.id}
							onClick={() => setIndex(imgIndex)}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === ' ') {
									setIndex(imgIndex);
								}
							}}
							role="button"
							tabIndex={0}>
							<Image
								alt={image.alt}
								aria-label="Change feature picture"
								fill
								unoptimized
								placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(180, 180))}`}
								sizes="(max-width: 800px) 180px, (max-width: 970px) 100px, 64px"
								src={urlFor(image.id)
									.width(180)
									.height(180)
									.quality(60)
									.dpr(2)
									.auto('format')
									.url()}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
