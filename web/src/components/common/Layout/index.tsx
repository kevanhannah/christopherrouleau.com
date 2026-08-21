import type { ReactNode } from 'react';
import { Header } from '@/components/common/Header';
import styles from './layout.module.css';

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{children}</main>
		</div>
	);
}
