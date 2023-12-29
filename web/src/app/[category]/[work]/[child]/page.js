import { WorkPage } from '@/components/WorkPage';
import { client } from '@/utils/sanityClient';
import { getWork } from '../page';

async function Child({ params }) {
	const work = await getWork(params.child);

	return <WorkPage work={work} />;
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
