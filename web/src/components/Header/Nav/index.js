import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
	return (
		<nav role="navigation" style={{ display: 'flex' }}>
			<ul className={styles.navList}>
				<li className={styles.menuItem}>
					<Link href="/about">About</Link>
				</li>
				<li className={styles.menuItem}>
					<Link href="/blog">Blog</Link>
				</li>
				<li className={styles.menuItem}>
					<a
						href="http://instagram.com/chris_rouleau/"
						target="_blank"
						rel="noopener noreferrer">
						Instagram
					</a>
				</li>
				<li className={[styles.menuItem, styles.highlight].join(' ')}>
					<a
						href="http://shop.christopherrouleau.com/"
						target="_blank"
						rel="noopener noreferrer">
						Shop
					</a>
				</li>
			</ul>
		</nav>
	);
}
