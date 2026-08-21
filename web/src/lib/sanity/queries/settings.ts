import { client } from '../client';
import type { SettingsData } from '../types';

const settingsQuery = /* groq */ `*[_type == "settings"][0] {
	bannerActive,
	bannerLink,
	bannerText,
}`;

export async function getSettings(): Promise<SettingsData | null> {
	return client.fetch<SettingsData | null>(settingsQuery);
}
