import { cache } from 'react';
import { client } from '../client';
import { imageFragment } from '../groq-fragments';
import type {
	ChildWorkStaticParam,
	WorkDetail,
	WorkStaticParam,
} from '../types';

const relatedWorksProjection = /* groq */ `select(
		hasChildWorks == true => *[_type == "work" && defined(parentWork) && parentWork._ref == ^._id] {
			"id": _id,
			"image": images[0] ${imageFragment},
			name,
			slug,
		},
		defined(parentWork) => *[_type == "work" && references(^.parentWork->_id) && _id != ^._id] {
			"id": _id,
			"image": images[0] ${imageFragment},
			name,
			slug,
		},
		*[_type == "work" && references(^.category->_id) && !defined(parentWork) && _id != ^._id] | order(releaseDate desc)[0..3] {
			"id": _id,
			"image": images[0] ${imageFragment},
			name,
			slug,
		}
	)`;

const workDetailFields = /* groq */ `
	category-> {
		name,
		"slug": slug.current,
	},
	description,
	excerpt,
	forSale,
	hasChildWorks,
	"id": _id,
	images[] ${imageFragment},
	"metaImage": images[0] ${imageFragment},
	name,
	parentWork-> { slug },
	"parent": parentWork-> { excerpt, name, slug },
	"relatedWorks": ${relatedWorksProjection},
	releaseDate,
	slug,
	storeUrl,
`;

const workQuery = /* groq */ `*[_type == "work" && slug.current == $slug && category->slug.current == $categorySlug][0] {
	${workDetailFields}
}`;

export const getWork = cache(
	async (slug: string, categorySlug: string): Promise<WorkDetail | null> => {
		return client.fetch<WorkDetail | null>(workQuery, { slug, categorySlug });
	}
);

const childQuery = /* groq */ `*[_type == "work" && slug.current == $slug && parentWork->slug.current == $parentSlug][0] {
	${workDetailFields}
}`;

export const getChild = cache(
	async (slug: string, parentSlug: string): Promise<WorkDetail | null> => {
		return client.fetch<WorkDetail | null>(childQuery, { slug, parentSlug });
	}
);

const allTopLevelWorkParamsQuery = /* groq */ `*[_type == "work" && !defined(parentWork)] {
	"category": category->slug.current,
	"work": slug.current,
}`;

export async function getAllTopLevelWorkParams(): Promise<WorkStaticParam[]> {
	return client.fetch<WorkStaticParam[]>(allTopLevelWorkParamsQuery);
}

const allChildWorkParamsQuery = /* groq */ `*[_type == "work" && defined(parentWork)] {
	"category": category->slug.current,
	"work": parentWork->slug.current,
	"child": slug.current,
}`;

export async function getAllChildWorkParams(): Promise<ChildWorkStaticParam[]> {
	return client.fetch<ChildWorkStaticParam[]>(allChildWorkParamsQuery);
}
