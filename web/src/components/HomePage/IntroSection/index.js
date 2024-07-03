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
					placeholder="blur"
					priority={true}
					blurDataURL={introImage.preview}
					quality={100}
					sizes="(max-width: 700px) 670px, (max-width: 800px) 360px, 380px"
					src={urlFor(introImage.id).width(680).height(680).quality(80).dpr(2).auto('format').url()}
					style={{
						boxShadow: '0.5em 0.5em 0 var(--primary-blue)',
						objectFit: 'cover',
						userSelect: 'none',
					}}
				/>
			</div>
		</div>
	);
}
