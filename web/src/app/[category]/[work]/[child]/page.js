import { WorkPage } from '@/components/WorkPage';
import { client } from '@/utils/sanityClient';
import { urlFor } from '@/utils/sanityImage';
import { getWork } from '../page';

async function Child({ params }) {
	const work = await getChild(params.child, params.work);

	return <WorkPage work={work} />;
}

export async function generateMetadata({ params }) {
	const metadataQuery = `*[_type == 'work' && slug.current == "${params.child}" && parentWork->slug.current == "${params.work}"][0] {
		"image": images[0],
		name,
		"parent": parentWork-> {
			excerpt,
			name,
			"slug": slug.current
		}
	}`;

	const { image, name, parent } = await client.fetch(metadataQuery);

	return {
		title: {
			absolute: `${name} by Christopher Rouleau`,
		},
		description: `Part of ${parent.name}. ${parent.excerpt}`,
		openGraph: {
			title: `${name} by Christopher Rouleau`,
			description: `Part of ${parent.name}. ${parent.excerpt}`,
			images: [
				{
					url: urlFor(image).width(1200).height(1200).url(),
					width: 1200,
					height: 1200,
					alt: `${name} by Christopher Rouleau`,
				},
			],
		},
	};
}

export async function getChild(slug, parentSlug) {
	const query = `*[_type == 'work' && slug.current == "${slug}" && parentWork->slug.current == "${parentSlug}"][0] {
		category-> {
      name,
      "slug": slug.current
		},
		description,
		'id': _id,
		images,
		'metaImage': images[0],
		name,
		"parent": parentWork-> {
			excerpt,
			name,
		},
		"relatedWorks": *[_type == "work" && references(^.parentWork->_id) && (_id != ^._id)][0..3] {
			"id": _id,
			"image": images[0],
			name,
			slug
		},
		releaseDate,
		slug
	}`;

	const data = await client.fetch(query);

	return data;
}

export async function generateStaticParams() {
	const query = `*[_type == "work"] {
		category-> {
			slug
		},
		parentWork-> {
			slug
		},
		slug
	}`;

	const works = await client.fetch(query);

	return works.map((work) => ({
		category: work.category.slug.current,
		child: work.parentWork ? work.slug.current : '',
		work: work.parentWork ? work.parentWork.slug.current : work.slug.current,
	}));
}

export default Child;
