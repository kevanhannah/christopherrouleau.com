import type { WorkDetail } from '@/lib/sanity/types';

interface RelatedWorksInfo {
	relatedWorksHeading: string;
	relatedWorksLinkPath: string;
}

export function handleRelatedWorks(work: WorkDetail): RelatedWorksInfo {
	if (work.hasChildWorks) {
		return {
			relatedWorksHeading: 'Works in this series',
			relatedWorksLinkPath: `/${work.category.slug}/${work.slug.current}`,
		};
	}

	if (work.parentWork) {
		return {
			relatedWorksHeading: 'More in this series',
			relatedWorksLinkPath: `/${work.category.slug}/${work.parentWork.slug.current}`,
		};
	}

	return {
		relatedWorksHeading: `More ${work.category.name}`,
		relatedWorksLinkPath: `/${work.category.slug}`,
	};
}
