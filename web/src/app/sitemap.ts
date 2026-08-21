import type { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/sanity/queries/blog';
import { getAllCategorySlugs } from '@/lib/sanity/queries/category';
import {
	getAllChildWorkParams,
	getAllTopLevelWorkParams,
} from '@/lib/sanity/queries/work';
import { baseUrl } from '@/utils/defaultMetadata';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [categorySlugs, topLevelWorkParams, childWorkParams, blogSlugs] =
		await Promise.all([
			getAllCategorySlugs(),
			getAllTopLevelWorkParams(),
			getAllChildWorkParams(),
			getAllBlogSlugs(),
		]);

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: baseUrl },
		{ url: `${baseUrl}/about` },
		{ url: `${baseUrl}/blog` },
	];

	const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map(
		(category) => ({
			url: `${baseUrl}/${category}`,
		})
	);

	const workRoutes: MetadataRoute.Sitemap = topLevelWorkParams.map(
		({ category, work }) => ({
			url: `${baseUrl}/${category}/${work}`,
		})
	);

	const childWorkRoutes: MetadataRoute.Sitemap = childWorkParams.map(
		({ category, work, child }) => ({
			url: `${baseUrl}/${category}/${work}/${child}`,
		})
	);

	const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
		url: `${baseUrl}/blog/${slug}`,
	}));

	return [
		...staticRoutes,
		...categoryRoutes,
		...workRoutes,
		...childWorkRoutes,
		...blogRoutes,
	];
}
