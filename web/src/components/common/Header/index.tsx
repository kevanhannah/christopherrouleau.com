import Link from 'next/link';
import { Wordmark } from '@/components/ui/Wordmark';
import { Nav } from './Nav';
import styles from './header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<Link href="/" aria-label="Link to homepage">
				<Wordmark />
			</Link>
			<Nav />
		</header>
	);
}
