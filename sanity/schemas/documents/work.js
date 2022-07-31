import sanityClient from 'part:@sanity/base/client';

async function asyncSlugifier(input) {
  const client = sanityClient.withConfig({
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2022-06-30',
  });
  const seriesQuery = '*[_id == $id][0]';
  const seriesQueryParams = {
    id: input.doc.series?._ref || '',
  };
  const series = await client.fetch(seriesQuery, seriesQueryParams);
  const seriesSlug = series?.slug?.current ? `${series.slug.current}/` : '';
  const workSlug = input.doc.name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\s+/g, '-')
    .slice(0, 200);
  return `${seriesSlug}${workSlug}`;
}

export default {
  name: 'work',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the work',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc, options) => ({ doc, options }),
        slugify: asyncSlugifier,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      options: { layout: 'grid' },
      of: [
        {
          name: 'itemImage',
          title: 'Item image',
          type: 'itemImage',
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
          ],
          lists: [
            { title: 'Numbered', value: 'number' },
            {
              title: 'Bullet',
              value: 'bullet',
            },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Description of the work',
    },
    {
      name: 'forSale',
      title: 'Available in the store',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'storeUrl',
      title: 'Link to item in store',
      type: 'url',
      hidden: ({ document }) => !document?.forSale,
    },
    {
      name: 'inSeries',
      title: 'Part of a series',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      description:
        'If this work is part of a series, you can associate it here.',
      to: [{ type: 'series' }],
      hidden: ({ document }) => !document?.inSeries,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      hidden: ({ document }) => document?.inSeries,
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      description: 'Initial date the work was published or released',
      hidden: ({ document }) => document?.inSeries,
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
      hidden: ({ document }) => document?.inSeries,
    },
  ],
};
