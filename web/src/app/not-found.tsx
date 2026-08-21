import { Header } from '@/components/common/Header';
import { StatusPage } from '@/components/common/StatusPage';

export default function NotFound() {
	return (
		<>
			<Header />
			<main id="main-content">
				<StatusPage
					heading="Page not found"
					message="The page you're looking for doesn't exist or may have moved."
				/>
			</main>
		</>
	);
}
