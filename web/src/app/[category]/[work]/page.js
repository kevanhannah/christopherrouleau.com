import { WorkPage } from '@/components/WorkPage';
import { client } from '@/utils/sanityClient';

async function Work({ params }) {
	const work = await getWork(params.work);

	return <WorkPage work={work} />;
}

export async function getWork(slug) {
	const query = `*[_type == 'work' && slug.current == "${slug}"][0] {
		category-> {
			name,
			slug
		},
		description,
		excerpt,
		hasChildWorks,
		'id': _id,
		images,
		'metaImage': images[0],
		name,
		parentWork-> {
			excerpt,
			name,
			slug
		},
		"relatedWorks": select(
			hasChildWorks == true => *[_type == "work" && defined(parentWork) && (parentWork._ref == ^._id)] {
				_id,
				"image": images[0],
				name,
				slug
			},
			defined(parentWork) => *[_type == "work" && references(^.parentWork->_id) && (_id != ^._id)][0..3] {
				_id,
				"image": images[0],
				name,
				slug
			},
			!defined(parentWork) => *[_type == "work" && references(^.category->_id) && parentWork == null && (_id != ^._id)] | order(releaseDate desc)[0..3] {
				category-> {
						slug
				},
				_id,
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
