import Link from 'next/link';
import Wordmark from '../Wordmark';
import Nav from './Nav';
import styles from './header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/" aria-label="Link to homepage">
				<Wordmark />
			</Link>
			<Nav />
		</header>
	);
}
