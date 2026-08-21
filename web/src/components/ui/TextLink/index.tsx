import Link from 'next/link';
import type { ReactNode } from 'react';

interface TextLinkProps {
	ariaLabel?: string;
	children: ReactNode;
	internal?: boolean;
	link: string;
	rel?: string;
}

export function TextLink({
	ariaLabel,
	children,
	internal,
	link,
	rel,
}: TextLinkProps) {
	if (!internal) {
		return (
			<a
				aria-label={ariaLabel}
				href={link}
				rel={rel || 'noreferrer noopener'}
				target="_blank">
				{children}
			</a>
		);
	}

	return (
		<Link aria-label={ariaLabel} href={link}>
			{children}
		</Link>
	);
}
