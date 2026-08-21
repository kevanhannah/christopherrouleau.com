'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { sanityImageSrc } from '@/lib/sanity/imageSrc';
import { createShimmer, toBase64 } from '@/utils/createShimmer';
import type { SanityImage } from '@/lib/sanity/types';
import styles from './gallery.module.css';

interface GalleryProps {
	images: SanityImage[];
}

export function Gallery({ images }: GalleryProps) {
	const [index, setIndex] = useState(0);
	const featured = images[index];
	const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

	if (!featured) {
		return null;
	}

	function selectThumbnail(nextIndex: number, focus: boolean) {
		setIndex(nextIndex);
		if (focus) {
			thumbnailRefs.current[nextIndex]?.focus();
		}
	}

	function handleArrowKey(event: React.KeyboardEvent, imgIndex: number) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			selectThumbnail((imgIndex + 1) % images.length, true);
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			selectThumbnail((imgIndex - 1 + images.length) % images.length, true);
		}
	}

	return (
		<div className={styles.galleryContainer}>
			<div className={styles.featureImageContainer}>
				<Image
					alt={featured.alt}
					fill={true}
					key={featured.id}
					priority={true}
					quality={100}
					placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(700, 700))}`}
					sizes="(max-width: 800px) 770px, 450px"
					src={sanityImageSrc(featured.id, 780, 780)}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.galleryRow} role="group" aria-label="Select image">
					{images.map((image, imgIndex) => (
						<button
							className={`${styles.imageWrapper} ${imgIndex === index ? styles.selected : ''}`}
							key={image.id}
							ref={(el) => {
								thumbnailRefs.current[imgIndex] = el;
							}}
							type="button"
							aria-current={imgIndex === index}
							aria-label={`Show image ${imgIndex + 1} of ${images.length}`}
							onClick={() => selectThumbnail(imgIndex, false)}
							onKeyDown={(event) => handleArrowKey(event, imgIndex)}>
							<Image
								alt=""
								fill
								quality={60}
								placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(180, 180))}`}
								sizes="(max-width: 800px) 180px, (max-width: 970px) 100px, 64px"
								src={sanityImageSrc(image.id, 180, 180)}
								style={{ objectFit: 'cover' }}
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
