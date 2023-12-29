'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/utils/sanityImage';
import styles from './gallery.module.css';

export default function Gallery({ images }) {
	const [index, setIndex] = useState(0);

	return (
		<div className={styles.galleryContainer}>
			<div className={styles.featureImageContainer}>
				<Image 
					alt={images[index].alt}
					fill={true}
					quality={100}
					src={urlFor(images[index]).url()}
					style={{ objectFit: 'cover' }}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.galleryRow}>
					{images.map((image, imgIndex) => (
						<div className={`${styles.imageWrapper} ${imgIndex === index ? styles.selected : ''}`} key={image._key} onClick={() => setIndex(imgIndex)}>
							<Image
								alt={image.alt}
								aria-label="Change feature picture"
								fill={true}
								quality={100}
								role="button"
								src={urlFor(image).url()}
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