import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/utils/sanityImage';
import Button from '@/components/Button';
import styles from './introSection.module.css';

export default function IntroSection({
	content: { greeting, introduction, introImage },
}) {
	return (
		<div className={styles.homePageIntro}>
			<div className={styles.homePageTextWrapper}>
				<h1 style={{ fontWeight: '700' }}>{greeting}</h1>
				<PortableText value={introduction} />
				<Button internal link="/about" text="Say hi" type="primary" />
			</div>
			<div className={styles.homePageImageWrapper}>
				<Image
					alt={introImage.alt}
					fill
					priority={true}
					quality={100}
					src={urlFor(introImage).url()}
					style={{
						boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
						objectFit: 'cover',
						userSelect: 'none',
					}}
				/>
			</div>
		</div>
	);
}
