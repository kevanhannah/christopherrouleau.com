import type { ReactNode } from 'react';
import { Layout } from '@/components/common/Layout';

export default function AboutLayout({ children }: { children: ReactNode }) {
	return <Layout>{children}</Layout>;
}
