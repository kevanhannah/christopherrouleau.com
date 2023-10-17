import Button from '@/components/Button';
import styles from './subfooter.module.css';
import { Instagram, Newsletter, X } from './Icons';

export default function Subfooter() {
	const copyrightYear = new Date().getFullYear();

	return (
		<div>
			<div className={styles.subfooter}>
				<div>
					<Button
						ariaLabel="Shop wholesale"
						link="https://christopherrouleau.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_5luuqz5njm"
						text="Shop wholesale"
						type="tertiary"
					/>
					<Button
						ariaLabel="Shop T-shirts"
						link="https://swishembassy.ca/collections/christopher-rouleau"
						text="Shop T-shirts"
						type="tertiary"
					/>
				</div>
				<div>
					<ul className={styles.linkList}>
						<li className={styles.link}>
							<a
								href="http://christopherrouleau.us11.list-manage2.com/subscribe?u=b1b927bb82834df5ac175e16b&id=32a2f3432e"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Newsletter">
								<Newsletter />
							Newsletter
							</a>
						</li>
						<li className={styles.link}>
							<a
								href="http://instagram.com/chris_rouleau/"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Instagram">
								<Instagram />
							Instagram
							</a>
						</li>
						<li className={styles.link}>
							<a
								href="http://x.com/Chris_Rouleau"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="X (formerly Twitter)">
								<X />
							X (Twitter)
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					© {copyrightYear} Christopher Rouleau. All rights reserved. (Please
					don&apos;t steal my stuff.)
				</p>
				<p>
					Website:{' '}
					<a
						href="https://www.twitter.com/kevanh"
						target="_blank"
						rel="noopener noreferrer">
						Kevan Hannah
					</a>
					. Portrait photography:{' '}
					<a
						href="https://brennansarich.com/"
						target="_blank"
						rel="noopener noreferrer">
						Brennan Sarich
					</a>
					. Typeface:{' '}
					<a
						href="https://jonathanballdesign.com/work/basecoat/index.php/"
						target="_blank"
						rel="noopener noreferrer">
						Basecoat
					</a>{' '}
					by Jonathan Ball.
				</p>
			</div>
		</div>
	);
}
