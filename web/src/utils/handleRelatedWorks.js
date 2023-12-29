export function handleRelatedWorks(work) {
	// Check if it has children
	if (work.hasChildWorks) {
		return {
			relatedWorksHeading: 'Works in this series',
			relatedWorksLinkPath: `./${work.slug.current}`,
		};
	}
	// Check if it has siblings
	if (!work.hasChildWorks && work.parentWork) {
		return {
			relatedWorksHeading: 'More in this series',
			relatedWorksLinkPath: `./${work.parentWork.slug.current}`,
		};
	}

	// If no children and no siblings, return defaults
	return {
		relatedWorksHeading: `More ${work.category.name}`,
		relatedWorksLinkPath: '.'
	};
}