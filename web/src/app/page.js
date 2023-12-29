import { client } from '@/utils/sanityClient';
import Header from '@/components/Header';
import Hero from '@/components/HomePage/Hero';
import IntroSection from '@/components/HomePage/IntroSection';
import styles from './home.module.css';
import CategoryList from '@/components/HomePage/CategoryList';

export default async function Home() {
	const { categories, greeting, hero, introduction, introImage } =
		await getHomePage();

	return (
		<main className={styles.homePage}>
			<Header />
			<IntroSection content={{ greeting, introduction, introImage }} />
			<Hero content={hero} />
			<CategoryList categories={categories} />
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
    },
		categories[]-> {
			'id': _id,
			name,
			slug,
			'works': *[_type == 'work' && references(^._id) && parentWork == null] | order(releaseDate desc)[0..3] {
				'id': _id,
				'image': images[0],
				name,
				slug
			}
		}
  }`;

	const data = await client.fetch(query);

	return data;
}
