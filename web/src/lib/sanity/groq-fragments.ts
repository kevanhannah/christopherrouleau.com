/**
 * Shared GROQ projection fragments, interpolated into the query strings in
 * `queries/`. Kept as plain strings (not `defineQuery`) since this project
 * hand-writes its Sanity types rather than running the typegen toolchain.
 */

export const imageFragment = /* groq */ `{
	alt,
	"id": asset._ref,
}`;

export const imageFragmentWithPreview = /* groq */ `{
	alt,
	"id": asset._ref,
	"preview": asset->metadata.lqip,
}`;

/**
 * Resolves an absolute site path for a `category | post | work` reference,
 * matching the app's route tree: `/[category]`, `/blog/[slug]`,
 * `/[category]/[work]`, and `/[category]/[work]/[child]` for series children.
 */
export const internalReferencePathProjection = /* groq */ `select(
		_type == "category" => "/" + slug.current,
		_type == "post" => "/blog/" + slug.current,
		_type == "work" && !defined(parentWork) => "/" + category->slug.current + "/" + slug.current,
		_type == "work" && defined(parentWork) => "/" + category->slug.current + "/" + parentWork->slug.current + "/" + slug.current
	)`;
