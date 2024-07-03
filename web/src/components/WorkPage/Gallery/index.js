'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/utils/sanityImage';
import styles from './gallery.module.css';

// Maybe remove - to fix: show placeholder on image swap for feature
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F6F6F6" offset="10%" />
      <stop stop-color="#ddd" offset="50%" />
      <stop stop-color="#F6F6F6" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#F6F6F6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);

export default function Gallery({ images }) {
	const [index, setIndex] = useState(0);

	return (
		<div className={styles.galleryContainer}>
			<div className={styles.featureImageContainer}>
				<Image 
					alt={images[index].alt}
					fill={true}
					quality={100}
					// placeholder="blur"
					priority={true}
					placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 700))}`}
					// blurDataURL={images[index].preview}
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
								placeholder="blur"
								blurDataURL={images[index].preview}
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