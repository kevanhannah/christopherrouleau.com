import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Layout } from '@/components/common/Layout';

export const metadata: Metadata = {
	title: 'Blog',
};

export default function BlogListLayout({ children }: { children: ReactNode }) {
	return <Layout>{children}</Layout>;
}
