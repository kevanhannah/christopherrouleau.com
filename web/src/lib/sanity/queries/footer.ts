import { client } from '../client';
import { internalReferencePathProjection } from '../groq-fragments';
import type { FooterData } from '../types';

const footerQuery = /* groq */ `{
	"latestPost": *[_type == "post"] | order(publishedAt desc)[0] {
		"id": _id,
		excerpt,
		"image": heroImage { alt, "id": asset._ref },
		publishedAt,
		slug,
		title,
	},
	"featureLists": *[_type == "featureList"] | order(orderRank asc) {
		"id": _id,
		title,
		"items": *[_type == "featureItem" && references(^._id)] | order(orderRank asc) {
			endDate,
			"id": _id,
			"reference": reference-> {
				"id": _id,
				name,
				"resolvedPath": ${internalReferencePathProjection},
			},
			startDate,
			type,
			text,
			url,
		},
	},
}`;

export async function getFooterData(): Promise<FooterData> {
	return client.fetch<FooterData>(footerQuery);
}
