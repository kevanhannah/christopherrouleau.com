import { TextLink } from '@/components/ui/TextLink';
import type { FeatureItemData } from '@/lib/sanity/types';

function buildDateRangeLabel(
	startDate: number | null,
	endDate: number | null
): string {
	const dateRange: string[] = [];

	if (startDate) {
		dateRange.push(startDate.toString().substring(0, 4));
	}
	if (endDate) {
		dateRange.push(`-${endDate.toString().substring(2, 4)}`);
	}

	return dateRange.length ? ` (${dateRange.join('')})` : '';
}

export function renderFeatureItem(item: FeatureItemData) {
	const dateRangeLabel = buildDateRangeLabel(item.startDate, item.endDate);

	if (item.type === 'text') {
		return (
			<>
				{item.text}
				{dateRangeLabel && (
					<span style={{ fontWeight: '300' }}>{dateRangeLabel}</span>
				)}
			</>
		);
	}

	const href =
		item.type === 'externalLink' ? item.url : item.reference?.resolvedPath;

	if (!href) {
		return (
			<>
				{item.text}
				{dateRangeLabel}
			</>
		);
	}

	return (
		<>
			<TextLink internal={item.type === 'internalLink'} link={href}>
				{item.text}
			</TextLink>
			{dateRangeLabel}
		</>
	);
}
