import Layout from '@/components/Layout';

export default function BlogListLayout({ children }) {
	return <Layout>{children}</Layout>;
}

export const metadata = {
	title: 'Blog',
};