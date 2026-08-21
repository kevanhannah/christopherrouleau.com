import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryPage } from '@/components/CategoryPage';
import {
	getAllCategorySlugs,
	getCategory,
} from '@/lib/sanity/queries/category';

export const revalidate = 3600;

export async function generateStaticParams() {
	const slugs = await getAllCategorySlugs();

	return slugs.map((category) => ({ category }));
}

export async function generateMetadata(
	props: PageProps<'/[category]'>
): Promise<Metadata> {
	const { category: categorySlug } = await props.params;
	const category = await getCategory(categorySlug);

	if (!category) {
		return {};
	}

	return {
		title: category.name,
	};
}

export default async function Category(props: PageProps<'/[category]'>) {
	const { category: categorySlug } = await props.params;
	const category = await getCategory(categorySlug);

	if (!category) {
		notFound();
	}

	return <CategoryPage category={category} />;
}
