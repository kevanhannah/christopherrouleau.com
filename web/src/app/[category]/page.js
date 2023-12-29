import { client } from '@/utils/sanityClient';
import { CategoryPage } from '@/components/CategoryPage';

async function Category({ params }) {
	const category = await getCategory(params.category);

	return <CategoryPage category={category} />;
}

async function getCategory(slug) {
	const query = `*[_type == "category" && slug.current == "${slug}"][0] {
		name,
		slug,
		'works': *[_type == "work" && references(^._id) && parentWork == null] | order(releaseDate desc) {
			'id': _id,
			'image': images[0],
			name,
			slug
		}
	}`;

	const data = await client.fetch(query);

	return data;
}

export default Category;
