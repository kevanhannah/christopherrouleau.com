import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './statusPage.module.css';

interface StatusPageProps {
	heading: string;
	message: ReactNode;
	action?: ReactNode;
}

export function StatusPage({ heading, message, action }: StatusPageProps) {
	return (
		<div className={styles.statusPage}>
			<h1 className={styles.heading}>{heading}</h1>
			<p className={styles.message}>{message}</p>
			{action ?? (
				<Link className={styles.link} href="/">
					Back to home
				</Link>
			)}
		</div>
	);
}
