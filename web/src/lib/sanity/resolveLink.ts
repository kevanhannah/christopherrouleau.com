import type { RawLink, ResolvedLink } from './types';

export function resolveLink(link: RawLink): ResolvedLink {
	if (link._type === 'linkExternal') {
		return { text: link.linkText, url: link.url, internal: false };
	}

	return { text: link.linkText, url: link.resolvedPath, internal: true };
}
