import Link from "next/link";
import styles from './button.module.css';

export default function Button({ ariaLabel, internal, link, text, type }) {
	let buttonStyle;
	switch (type) {
		case 'primary':
			buttonStyle = styles.primary;
			break;
		case 'secondary':
			buttonStyle = styles.secondary;
			break;
		case 'tertiary':
			buttonStyle = styles.tertiary;
			break;
		default:
			buttonStyle = styles.primary;
	}

	if (internal) {
		return (
			<Link aria-label={ariaLabel} className={[styles.button, buttonStyle].join(' ')} href={link}>
				{text}
			</Link>
		);
	}

	return (
		<a aria-label={ariaLabel} className={[styles.button, buttonStyle].join(' ')} href={link}>
			{text}
		</a>
	);
}