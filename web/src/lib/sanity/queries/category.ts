import { cache } from 'react';
import { client } from '../client';
import { imageFragment } from '../groq-fragments';
import type { CategoryPageData } from '../types';

const categoryQuery = /* groq */ `*[_type == "category" && slug.current == $slug][0] {
	name,
	slug,
	"works": *[_type == "work" && references(^._id) && !defined(parentWork)] | order(releaseDate desc) {
		"id": _id,
		"image": images[0] ${imageFragment},
		name,
		slug,
	},
}`;

export const getCategory = cache(
	async (slug: string): Promise<CategoryPageData | null> => {
		return client.fetch<CategoryPageData | null>(categoryQuery, { slug });
	}
);

const allCategorySlugsQuery = /* groq */ `*[_type == "category"].slug.current`;

export async function getAllCategorySlugs(): Promise<string[]> {
	return client.fetch<string[]>(allCategorySlugsQuery);
}
