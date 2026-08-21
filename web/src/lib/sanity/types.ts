/**
 * Hand-written types mirroring the Sanity schema in `sanity/schemas/`.
 * Field shapes match the exact GROQ projections used in `queries/`, not the
 * raw document shape in Sanity (e.g. references are already resolved).
 */

export interface SanityImage {
	alt: string;
	id: string;
	preview?: string;
}

export interface SlugRef {
	current: string;
}

export interface CategoryRef {
	name: string;
	slug: string;
}

export interface ItemCardData {
	id: string;
	image: SanityImage;
	name: string;
	slug: SlugRef;
}

export interface CategorySummary {
	id: string;
	name: string;
	slug: SlugRef;
	works: ItemCardData[];
}

export interface CategoryPageData {
	name: string;
	slug: SlugRef;
	works: ItemCardData[];
}

export type InternalLinkTargetType = 'category' | 'post' | 'work';

export interface ResolvedLink {
	text: string;
	url: string;
	internal: boolean;
}

export interface RawLinkExternal {
	_type: 'linkExternal';
	linkText: string;
	url: string;
	newWindow?: boolean;
}

export interface RawLinkInternal {
	_type: 'linkInternal';
	linkText: string;
	resolvedPath: string;
}

export type RawLink = RawLinkExternal | RawLinkInternal;

export interface HeroData {
	heading: string;
	tagline: string;
	image: SanityImage;
	link: RawLink[];
}

export interface HomePageData {
	greeting: string;
	introduction: PortableTextBlock[];
	introImage: SanityImage;
	hero: HeroData;
	categories: CategorySummary[];
}

export interface AboutPageData {
	title: string;
	lead: string;
	image: SanityImage;
	content: PortableTextBlock[];
}

export interface SettingsData {
	bannerActive: boolean;
	bannerText: string | null;
	bannerLink: string | null;
}

export interface WorkSummary {
	id: string;
	image: SanityImage;
	name: string;
	slug: SlugRef;
}

export interface WorkDetail {
	id: string;
	name: string;
	slug: SlugRef;
	category: CategoryRef;
	description: PortableTextBlock[];
	excerpt: string;
	forSale: boolean;
	hasChildWorks: boolean;
	images: SanityImage[];
	metaImage: SanityImage;
	parent: { excerpt: string; name: string; slug: SlugRef } | null;
	parentWork: { slug: SlugRef } | null;
	relatedWorks: WorkSummary[];
	releaseDate: string;
	storeUrl: string | null;
}

export interface WorkStaticParam {
	category: string;
	work: string;
}

export interface ChildWorkStaticParam {
	category: string;
	work: string;
	child: string;
}

export interface BlogPostSummary {
	id: string;
	excerpt?: string;
	image: SanityImage;
	publishedAt: string;
	slug: SlugRef;
	title: string;
}

export interface BlogPostDetail {
	body: PortableTextBlock[];
	excerpt: string;
	heroImage: SanityImage;
	publishedAt: string;
	slug: SlugRef;
	title: string;
}

export interface FeatureItemData {
	id: string;
	type: 'text' | 'externalLink' | 'internalLink';
	text: string;
	url: string | null;
	startDate: number | null;
	endDate: number | null;
	reference: { id: string; name: string; resolvedPath: string } | null;
}

export interface FeatureListData {
	id: string;
	title: string;
	items: FeatureItemData[];
}

export interface FooterData {
	latestPost: BlogPostSummary | null;
	featureLists: FeatureListData[];
}

/**
 * Minimal Portable Text block/span typing — sufficient for the three block
 * schemas in use (home.introduction, about.pageContent, work.description,
 * post.body) without pulling in `@portabletext/types`.
 */
export interface PortableTextSpan {
	_type: 'span';
	_key: string;
	text: string;
	marks?: string[];
}

export interface AnnotationLinkExternal {
	_type: 'annotationLinkExternal';
	_key: string;
	url: string;
	newWindow?: boolean;
}

export interface AnnotationLinkInternal {
	_type: 'annotationLinkInternal';
	_key: string;
	resolvedPath: string;
}

export type PortableTextMarkDef =
	AnnotationLinkExternal | AnnotationLinkInternal;

export interface PortableTextTextBlock {
	_type: 'block';
	_key: string;
	style?: string;
	listItem?: string;
	level?: number;
	children: PortableTextSpan[];
	markDefs?: PortableTextMarkDef[];
}

export interface PortableTextImageBlock {
	_type: 'blockImage';
	_key: string;
	alt: string;
	image: { asset: { _ref: string } };
}

export type PortableTextBlock = PortableTextTextBlock | PortableTextImageBlock;
