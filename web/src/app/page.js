import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import Button from '@/components/Button';
import styles from './home.module.css';

export default async function Home() {
	const home = await getHomePage();

	return (
		<div className={styles.homePageIntro}>
			<div>
				<h1 style={{ fontWeight: '700' }}>{home.greeting}</h1>
				<PortableText value={home.introduction} />
				<Button internal link="/about" text="Say hi" type="primary" />
			</div>
			<Image
				alt={home.introImage.alt}
				height={376}
				priority={true}
				quality={100}
				src={urlFor(home.introImage).url()}
				style={{
					boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
					userSelect: 'none',
				}}
				width={376}
			/>
		</div>
	);
}

async function getHomePage() {
	const query = `*[_type == "home"][0] {
    greeting,
    introduction,
    introImage {
      alt,
      asset
    }
  }`;

	const data = await client.fetch(query);

	return data;
}
