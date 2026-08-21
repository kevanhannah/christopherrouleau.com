import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { sanityImageSrc } from '@/lib/sanity/imageSrc';
import { Button } from '@/components/ui/Button';
import type { SanityImage, PortableTextBlock } from '@/lib/sanity/types';
import styles from './introSection.module.css';

interface IntroSectionProps {
	content: {
		greeting: string;
		introduction: PortableTextBlock[];
		introImage: SanityImage;
	};
}

export function IntroSection({
	content: { greeting, introduction, introImage },
}: IntroSectionProps) {
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
					quality={80}
					sizes="(max-width: 700px) 670px, (max-width: 800px) 360px, 380px"
					src={sanityImageSrc(introImage.id, 680, 680)}
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
