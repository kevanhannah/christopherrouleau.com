export function createShimmer(w, h) {
	return `
		<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<linearGradient id="g">
					<stop stop-color="#F6F6F6" offset="10%" />
					<stop stop-color="#ddd" offset="50%" />
					<stop stop-color="#F6F6F6" offset="80%" />
				</linearGradient>
			</defs>
			<rect width="${w}" height="${h}" fill="#F6F6F6" />
			<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
			<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
		</svg>`;
};

export function toBase64(str) {
	return typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
}