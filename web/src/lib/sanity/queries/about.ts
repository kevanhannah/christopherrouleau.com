import { cache } from 'react';
import { client } from '../client';
import { imageFragment } from '../groq-fragments';
import type { AboutPageData } from '../types';

const aboutPageQuery = /* groq */ `*[_type == "about"][0] {
	"content": pageContent,
	"image": introImage ${imageFragment},
	"lead": pageLead,
	"title": pageHeading,
}`;

export const getAboutPage = cache(async (): Promise<AboutPageData | null> => {
	return client.fetch<AboutPageData | null>(aboutPageQuery);
});
