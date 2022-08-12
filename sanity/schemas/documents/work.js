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
        source: 'name',
        maxLength: 140,
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
      type: 'description',
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
      type: 'excerpt',
    },
  ],
};
