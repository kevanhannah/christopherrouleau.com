/**
 * Renders a JSON-LD <script> tag per Next's recommended pattern:
 * https://nextjs.org/docs/app/guides/json-ld
 *
 * `data` should be a plain, JSON-serializable schema.org object — content
 * ultimately comes from Sanity CMS text fields, so `<` is escaped as a
 * defense-in-depth measure against XSS, matching the documented approach,
 * even though this isn't untrusted user input.
 */
interface JsonLdProps {
	data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data).replace(/</g, '\\u003c'),
			}}
		/>
	);
}
