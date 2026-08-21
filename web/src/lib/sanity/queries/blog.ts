import { cache } from 'react';
import { client } from '../client';
import {
	imageFragment,
	internalReferencePathProjection,
} from '../groq-fragments';
import type { BlogPostDetail, BlogPostSummary } from '../types';

const blogPostsQuery = /* groq */ `*[_type == "post"] | order(publishedAt desc) {
	"id": _id,
	"image": heroImage ${imageFragment},
	publishedAt,
	slug,
	title,
}`;

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
	return client.fetch<BlogPostSummary[]>(blogPostsQuery);
}

const blogPostQuery = /* groq */ `*[_type == "post" && slug.current == $slug][0] {
	body[] {
		...,
		markDefs[] {
			...,
			_type == "annotationLinkInternal" => {
				...,
				"resolvedPath": reference-> { "path": ${internalReferencePathProjection} }.path,
			},
		},
	},
	excerpt,
	"heroImage": heroImage ${imageFragment},
	publishedAt,
	slug,
	title,
}`;

export const getBlogPost = cache(
	async (slug: string): Promise<BlogPostDetail | null> => {
		return client.fetch<BlogPostDetail | null>(blogPostQuery, { slug });
	}
);

const allBlogSlugsQuery = /* groq */ `*[_type == "post"].slug.current`;

export async function getAllBlogSlugs(): Promise<string[]> {
	return client.fetch<string[]>(allBlogSlugsQuery);
}
