import type { ReactNode } from 'react';
import styles from './cardGrid.module.css';

interface CardGridProps {
	children: ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
	return <ul className={styles.cardGrid}>{children}</ul>;
}
