import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { urlFor } from '@/lib/sanity/image';
import { createShimmer, toBase64 } from '@/utils/createShimmer';
import type { SanityImage } from '@/lib/sanity/types';
import styles from './itemCard.module.css';

interface ItemCardProps {
	date?: string;
	image: SanityImage;
	link: string;
	name: string;
	priority?: boolean;
}

export function ItemCard({
	date,
	image,
	link,
	name,
	priority = false,
}: ItemCardProps) {
	const formattedDate = date && format(parseISO(date), 'MMMM d, yyyy');

	return (
		<li className={styles.itemCard}>
			<Link href={link}>
				<div className={styles.itemCardImageWrapper}>
					<Image
						alt={image.alt}
						fill
						unoptimized
						priority={priority}
						placeholder={`data:image/svg+xml;base64,${toBase64(createShimmer(400, 400))}`}
						sizes="(max-width: 300px) 180px, (max-width: 800px) 380px, 240px"
						src={urlFor(image.id)
							.width(400)
							.height(400)
							.quality(80)
							.dpr(2)
							.auto('format')
							.url()}
						style={{ objectFit: 'cover' }}
					/>
				</div>
				{date && (
					<time className={styles.dateDisplay} dateTime={date}>
						{formattedDate}
					</time>
				)}
				<span>{name}</span>
			</Link>
		</li>
	);
}
