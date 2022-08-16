import { IoImageOutline } from 'react-icons/io5';

export default {
  name: 'work',
  title: 'Works',
  type: 'document',
  icon: IoImageOutline,
  groups: [
    {
      default: true,
      name: 'information',
      title: 'Information',
    },
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Name
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'information',
      description: 'Name of the work',
      validation: (Rule) => Rule.required(),
    },
    // In series
    {
      name: 'inSeries',
      title: 'Part of a series',
      type: 'boolean',
      group: 'information',
      initialValue: false,
    },
    // Series
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      group: 'information',
      description:
        'If this work is part of a series, you can associate it here.',
      to: [{ type: 'series' }],
      hidden: ({ document }) => !document?.inSeries,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document.inSeries && field === undefined
            ? 'This field must not be empty.'
            : true
        ),
    },
    // Category
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'information',
      to: [{ type: 'category' }],
      hidden: ({ document }) => document?.inSeries,
      // validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context.document.inSeries && field === undefined
            ? 'This field must not be empty.'
            : true
        ),
    },
    // Images
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      group: 'details',
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
    // Description
    {
      name: 'description',
      type: 'description',
      group: 'details',
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'settings',
      options: {
        source: 'name',
        maxLength: 140,
      },
      validation: (Rule) => Rule.required(),
    },
    // Release date
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      group: 'settings',
      description: 'Initial date the work was published or released',
      hidden: ({ document }) => document?.inSeries,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context.document.inSeries && field === undefined
            ? 'Release date must be set.'
            : true
        ),
    },
    // For sale
    {
      name: 'forSale',
      title: 'Available in the store',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
    },
    // Store URL
    {
      name: 'storeUrl',
      title: 'Link to item in store',
      type: 'url',
      group: 'settings',
      hidden: ({ document }) => !document?.forSale,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document.forSale && field === undefined
            ? 'This field must not be empty.'
            : true
        ),
    },
    // Excerpt
    {
      name: 'excerpt',
      type: 'excerpt',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
  ],
};
