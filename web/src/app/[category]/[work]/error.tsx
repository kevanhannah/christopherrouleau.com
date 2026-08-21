'use client';

import { useEffect } from 'react';
import { StatusPage } from '@/components/common/StatusPage';

export default function WorkError({
	error,
}: {
	error: Error & { digest?: string };
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<StatusPage
			heading="This piece couldn't load"
			message="There was a problem loading this work from Sanity. Please try again shortly."
		/>
	);
}
