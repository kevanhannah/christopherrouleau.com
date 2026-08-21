import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WorkPage } from '@/components/WorkPage';
import { defaultExcerpt } from '@/utils/defaultMetadata';
import { urlFor } from '@/lib/sanity/image';
import { getAllTopLevelWorkParams, getWork } from '@/lib/sanity/queries/work';

export const revalidate = 3600;

export async function generateStaticParams() {
	const params = await getAllTopLevelWorkParams();

	return params.map(({ category, work }) => ({ category, work }));
}

export async function generateMetadata(
	props: PageProps<'/[category]/[work]'>
): Promise<Metadata> {
	const { category, work: workSlug } = await props.params;
	const work = await getWork(workSlug, category);

	if (!work) {
		return {};
	}

	const title = `${work.name} by Christopher Rouleau`;
	const description = work.excerpt || defaultExcerpt;

	return {
		title: { absolute: title },
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: urlFor(work.metaImage.id)
						.width(1200)
						.height(627)
						.quality(75)
						.dpr(2)
						.auto('format')
						.url(),
					width: 1200,
					height: 627,
					alt: title,
				},
			],
		},
	};
}

export default async function Work(props: PageProps<'/[category]/[work]'>) {
	const { category, work: workSlug } = await props.params;
	const work = await getWork(workSlug, category);

	if (!work) {
		notFound();
	}

	return <WorkPage work={work} />;
}
