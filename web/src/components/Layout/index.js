import Header from '../Header';
import styles from './layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{children}</main>
		</div>
	);
}
