import Link from 'next/link';
import styles from './badge.module.css';

interface BadgeProps {
	link: string;
	text: string;
}

export function Badge({ link, text }: BadgeProps) {
	return (
		<Link className={styles.badge} href={link}>
			{text}
		</Link>
	);
}
