'use client';

import { useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { StatusPage } from '@/components/common/StatusPage';
import styles from '@/components/common/StatusPage/statusPage.module.css';

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<>
			<Header />
			<main id="main-content">
				<StatusPage
					heading="Something went wrong"
					message="We couldn't load this page. Please try again."
					action={
						<button className={styles.link} type="button" onClick={reset}>
							Try again
						</button>
					}
				/>
			</main>
		</>
	);
}
