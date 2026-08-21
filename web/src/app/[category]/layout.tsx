import type { ReactNode } from 'react';
import { Layout } from '@/components/common/Layout';

export default function CategoryLayout({ children }: { children: ReactNode }) {
	return <Layout>{children}</Layout>;
}
