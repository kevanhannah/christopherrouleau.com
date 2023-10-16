import Image from 'next/image';
import { urlFor } from '@/utils/sanityImage';
import styles from './hero.module.css';

export default function Hero() {
	return (
		<div className={styles.heroOuter}>
			<div className={styles.heroInner}>
				<Image
					src={urlFor(home.introImage).url()}
				/>
			</div>
		</div>
	);
}
