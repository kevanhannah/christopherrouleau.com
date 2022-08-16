import { IoImagesOutline } from 'react-icons/io5';

export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: IoImagesOutline,
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
      description: 'Name of the series',
      validation: (Rule) => Rule.required(),
    },
    // Category
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'information',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    // Cover image
    {
      name: 'coverImage',
      title: 'Series cover image',
      type: 'itemImage',
      group: 'details',
      description: 'Main image on the series page',
      validation: (Rule) => Rule.required(),
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
      description: 'Initial date the series was published or released',
      validation: (Rule) => Rule.required(),
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
