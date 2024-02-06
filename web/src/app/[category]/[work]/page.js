import { WorkPage } from '@/components/WorkPage';
import { client } from '@/utils/sanityClient';

async function Work({ params }) {
	const work = await getWork(params.work, params.category);

	return <WorkPage work={work} />;
}

export async function getWork(slug, categorySlug) {
	const query = `*[_type == 'work' && slug.current == "${slug}" && category->slug.current == "${categorySlug}"][0] {
		category-> {
			name,
			"slug": slug.current
		},
		description,
		excerpt,
		hasChildWorks,
		'id': _id,
		images,
		'metaImage': images[0],
		name,
		"relatedWorks": select(
			hasChildWorks == true => *[_type == "work" && defined(parentWork) && (parentWork._ref == ^._id)] {
				'id': _id,
				"image": images[0],
				name,
				slug
			},
			!defined(parentWork) => *[_type == "work" && references(^.category->_id) && parentWork == null && (_id != ^._id)] | order(releaseDate desc)[0..3] {
				category-> {
					slug
				},
				'id': _id,
				"image": images[0],
				name,
				slug
			}
		),
		releaseDate,
		slug
	}`;

	const data = await client.fetch(query);

	return data;
}

export default Work;
