import { urlFor } from "@/utils/sanityImage";
import Image from "next/image";
import Link from "next/link";
import styles from './itemCard.module.css';

export default function ItemCard({ date, image, link, name }) {
	const formattedDate = date && format(parseISO(date), 'MMMM d, yyyy');

	return (
		<li className={styles.itemCard}>
			<Link href={link}>
				<div className={styles.itemCardImageWrapper}>
					<Image
						alt={image.alt}
						fill={true}
						quality={100}
						role="presentation"
						src={urlFor(image).url()}
						style={{ objectFit: 'cover' }}
					/>
				</div>
				{date && (
					<time className={styles.dateDisplay} dateTime={date}>{formattedDate}</time>
				)}
				<span>{name}</span>
			</Link>
		</li>
	);
}