import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import styles from './home.module.css';

export default async function Home() {
	const home = await getHomePage();

	return (
		<main className={styles.homePage}>
			<Header />
			<div className={styles.homePageIntro}>
				<div className={styles.homePageTextWrapper}>
					<h1 style={{ fontWeight: '700' }}>{home.greeting}</h1>
					<PortableText value={home.introduction} />
					<Button internal link="/about" text="Say hi" type="primary" />
				</div>
				<div className={styles.homePageImageWrapper}>
					<Image
						alt={home.introImage.alt}
						fill
						priority={true}
						quality={100}
						src={urlFor(home.introImage).url()}
						style={{
							boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
							objectFit: 'cover',
							userSelect: 'none',
						}}
					/>
				</div>
			</div>
			<Hero content={home.hero} />
		</main>
	);
}

async function getHomePage() {
	const query = `*[_type == "home"][0] {
    greeting,
		hero,
    introduction,
    introImage {
      alt,
      asset
    }
  }`;

	const data = await client.fetch(query);

	return data;
}
