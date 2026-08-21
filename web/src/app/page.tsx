import { getHomePage } from '@/lib/sanity/queries/home';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/HomePage/Hero';
import { IntroSection } from '@/components/HomePage/IntroSection';
import { CategoryList } from '@/components/HomePage/CategoryList';
import styles from './home.module.css';

export default async function Home() {
	const home = await getHomePage();

	if (!home) {
		return null;
	}

	const { categories, greeting, hero, introduction, introImage } = home;

	return (
		<main className={styles.homePage}>
			<Header />
			<IntroSection content={{ greeting, introduction, introImage }} />
			<Hero content={hero} />
			<CategoryList categories={categories} />
		</main>
	);
}
