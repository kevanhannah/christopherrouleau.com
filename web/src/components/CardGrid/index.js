import styles from './cardGrid.module.css';

export default function CardGrid({ children }) {
	return (
		<ul className={styles.cardGrid}>
			{children}
		</ul>
	);
}