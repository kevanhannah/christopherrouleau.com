import { client } from '../client';
import {
	imageFragmentWithPreview,
	imageFragment,
	internalReferencePathProjection,
} from '../groq-fragments';
import type { HomePageData } from '../types';

const homePageQuery = /* groq */ `*[_type == "home"][0] {
	greeting,
	hero {
		heading,
		tagline,
		"image": image ${imageFragmentWithPreview},
		link[] {
			_type,
			linkText,
			_type == "linkExternal" => {
				url,
				newWindow,
			},
			_type == "linkInternal" => {
				"resolvedPath": reference-> { "path": ${internalReferencePathProjection} }.path,
			},
		},
	},
	introduction,
	"introImage": introImage ${imageFragmentWithPreview},
	categories[]-> {
		"id": _id,
		name,
		slug,
		"works": *[_type == "work" && references(^._id) && !defined(parentWork)] | order(releaseDate desc)[0..3] {
			"id": _id,
			"image": images[0] ${imageFragment},
			name,
			slug,
		},
	},
}`;

export async function getHomePage(): Promise<HomePageData | null> {
	return client.fetch<HomePageData | null>(homePageQuery);
}

const homeMetaImageQuery = /* groq */ `*[_type == "home"][0] {
	"introImage": introImage ${imageFragment},
}`;

export async function getHomeMetaImage(): Promise<{
	introImage: HomePageData['introImage'];
} | null> {
	return client.fetch(homeMetaImageQuery);
}
