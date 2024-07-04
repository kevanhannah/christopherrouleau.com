'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/utils/sanityImage';
import styles from './gallery.module.css';
import { createShimmer, toBase64 } from '@/utils/createShimmer';

export default function Gallery({ images }) {
	const [index, setIndex] = useState(0);

	return (
		<div className={styles.galleryContainer}>
			<div className={styles.featureImageContainer}>
				<Image 
					alt={images[index].alt}
					fill={true}
					key={images[index].id}
					quality={100}
					priority={true}
					placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(700, 700))}`}
					sizes="(max-width: 800px) 770px, 450px"
					src={urlFor(images[index].id).width(780).height(780).quality(100).dpr(2).auto('format').url()}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.galleryRow}>
					{images.map((image, imgIndex) => (
						<div className={`${styles.imageWrapper} ${imgIndex === index ? styles.selected : ''}`} key={image.id} onClick={() => setIndex(imgIndex)}>
							<Image
								alt={image.alt}
								aria-label="Change feature picture"
								fill
								quality={100}
								placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(180, 180))}`}
								role="button"
								sizes="(max-width: 800px) 180px, (max-width: 970px) 100px, 64px"
								src={urlFor(image.id).width(180).height(180).quality(60).dpr(2).auto('format').url()}
								style={{ objectFit: 'cover' }}
								tabIndex="0"
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}