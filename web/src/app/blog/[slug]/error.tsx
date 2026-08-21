'use client';

import { useEffect } from 'react';
import { StatusPage } from '@/components/common/StatusPage';

export default function BlogPostError({
	error,
}: {
	error: Error & { digest?: string };
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<StatusPage
			heading="This post couldn't load"
			message="There was a problem loading this post from Sanity. Please try again shortly."
		/>
	);
}
