import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WorkPage } from '@/components/WorkPage';
import { urlFor } from '@/lib/sanity/image';
import { getAllChildWorkParams, getChild } from '@/lib/sanity/queries/work';

export const revalidate = 3600;

export async function generateStaticParams() {
	const params = await getAllChildWorkParams();

	return params.map(({ category, work, child }) => ({ category, work, child }));
}

export async function generateMetadata(
	props: PageProps<'/[category]/[work]/[child]'>
): Promise<Metadata> {
	const { work: parentSlug, child } = await props.params;
	const work = await getChild(child, parentSlug);

	if (!work || !work.parent) {
		return {};
	}

	const title = `${work.name} by Christopher Rouleau`;
	const description = `Part of ${work.parent.name}. ${work.parent.excerpt}`;

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

export default async function Child(
	props: PageProps<'/[category]/[work]/[child]'>
) {
	const { work: parentSlug, child } = await props.params;
	const work = await getChild(child, parentSlug);

	if (!work) {
		notFound();
	}

	return <WorkPage work={work} />;
}
