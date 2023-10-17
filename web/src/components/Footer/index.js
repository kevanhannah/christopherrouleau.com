import FeatureLinks from './FeatureLinks';
import Subfooter from './Subfooter';
import styles from './footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<FeatureLinks />
			<div className={styles.emailFeature}>
				<a href="mailto:hello@christopherrouleau.com">
					hello@christopherrouleau.com
				</a>
			</div>
			<Subfooter />
		</footer>
	);
}
