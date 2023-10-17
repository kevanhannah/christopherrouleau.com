import Link from 'next/link';

export function TextLink({ ariaLabel, children, internal, link, rel }) {
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
