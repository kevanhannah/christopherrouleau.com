import Link from 'next/link';
import styles from './badge.module.css';

export default function Badge({ link, text }) {
	return (
		<Link className={styles.badge} href={`../${link}`}>{text}</Link>
	);
}