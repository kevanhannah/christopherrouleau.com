import styles from '@/components/common/StatusPage/statusPage.module.css';

export default function Loading() {
	return (
		<div className={styles.statusPage}>
			<p className={styles.message}>Loading…</p>
		</div>
	);
}
