export function parseSanityLink(link) {
	const parsedLink = {
		text: link.linkText || link.text,
	};

	if (link._type === 'linkExternal' || link.type === 'externalLink') {
		parsedLink.url = `${link.url}`;
		parsedLink.type = 'external';
		return parsedLink;
	}

	parsedLink.url = `${link.reference.slug.current}`;
	parsedLink.type = 'internal';

	return parsedLink;
}
