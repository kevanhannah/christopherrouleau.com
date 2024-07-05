import { WorkPage } from '@/components/WorkPage';
import { defaultExcerpt } from '@/utils/defaultMetadata';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';

async function Work({ params }) {
	const work = await getWork(params.work, params.category);

	return <WorkPage work={work} />;
}

export async function generateMetadata({ params }) {
	const metadataQuery = `*[_type == 'work' && slug.current == "${params.work}"][0] {
		"image": images[0] {
    	"id": asset._ref
  	},
		name,
		excerpt,
	}`;

	const { excerpt = defaultExcerpt, image, name } = await client.fetch(metadataQuery);

	return {
		title: {
			absolute: `${name} by Christopher Rouleau`,
		},
		description: excerpt,
		openGraph: {
			title: `${name} by Christopher Rouleau`,
			description: excerpt,
			images: [
				{
					url: urlFor(image.id).width(1200).height(627).quality(75).dpr(2).format('auto').url(),
					width: 1200,
					height: 627,
					alt: `${name} by Christopher Rouleau`,
				},
			],
		},
	};
}

export async function getWork(slug, categorySlug) {
	const query = `*[_type == 'work' && slug.current == "${slug}" && category->slug.current == "${categorySlug}"][0] {
		category-> {
			name,
			"slug": slug.current
		},
		description,
		excerpt,
		forSale,
		hasChildWorks,
		'id': _id,
		images[] {
			alt,
			"id": asset._ref,
		},
		'metaImage': images[0],
		name,
		"relatedWorks": select(
			hasChildWorks == true => *[_type == "work" && defined(parentWork) && (parentWork._ref == ^._id)] {
				'id': _id,
				"image": images[0] {
					alt,
					"id": asset._ref,
				},
				name,
				slug
			},
			!defined(parentWork) => *[_type == "work" && references(^.category->_id) && parentWork == null && (_id != ^._id)] | order(releaseDate desc)[0..3] {
				category-> {
					slug
				},
				'id': _id,
				"image": images[0] {
					alt,
					"id": asset._ref,
				},
				name,
				slug
			}
		),
		releaseDate,
		slug,
		storeUrl
	}`;

	const data = await client.fetch(query);

	return data;
}

export default Work;
