import Link from 'next/link';
import styles from './button.module.css';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
	ariaLabel?: string;
	internal?: boolean;
	link: string;
	text: string;
	type?: ButtonType;
}

function getButtonStyle(type: ButtonType): string {
	switch (type) {
		case 'secondary':
			return styles.secondary ?? '';
		case 'tertiary':
			return styles.tertiary ?? '';
		case 'primary':
		default:
			return styles.primary ?? '';
	}
}

export function Button({
	ariaLabel,
	internal,
	link,
	text,
	type = 'primary',
}: ButtonProps) {
	const buttonStyle = getButtonStyle(type);

	if (internal) {
		return (
			<Link
				aria-label={ariaLabel}
				className={[styles.button, buttonStyle].join(' ')}
				href={link}>
				{text}
			</Link>
		);
	}

	return (
		<a
			aria-label={ariaLabel}
			className={[styles.button, buttonStyle].join(' ')}
			href={link}>
			{text}
		</a>
	);
}
