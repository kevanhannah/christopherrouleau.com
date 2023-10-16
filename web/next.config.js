/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io'],
		imageSizes: [320, 400, 654, 768, 1024, 1326],
	},
};

module.exports = nextConfig;
