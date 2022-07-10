import { format } from 'date-fns';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
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
      options: {
        source: (doc) => {
          const date = format(new Date(doc.publishedAt), 'yyyy');
          const title = doc.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          return `${date}/${title}`;
        },
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
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
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      active: 'active',
      // seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        // media: seoImage,
        title,
      };
    },
  },
};
