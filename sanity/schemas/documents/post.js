import { format, parseISO } from 'date-fns';
import { IoNewspaperOutline } from 'react-icons/io5';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: IoNewspaperOutline,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error('A title of at least 10 characters is required'),
        Rule.max(50).warning(
          'Longer titles may be truncated by search engines'
        ),
      ],
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'settings',
      options: {
        source: 'title',
        maxLength: 140,
      },
      validation: (Rule) => Rule.required(),
    },
    // Published At
    {
      name: 'publishedAt',
      title: 'Published on',
      type: 'date',
      group: 'editorial',
    },
    // Hero Image
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'itemImage',
      group: 'editorial',
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    },
    // Excerpt
    {
      name: 'excerpt',
      type: 'excerpt',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Last published',
      name: 'publishDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'First published',
      name: 'publishDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      publishedAt: 'publishedAt',
      title: 'title',
    },
    prepare(selection) {
      const { publishedAt, title } = selection;
      return {
        title: title || 'Pending',
        subtitle: publishedAt
          ? format(parseISO(publishedAt), 'MMMM d, yyyy')
          : 'Pending',
      };
    },
  },
};
