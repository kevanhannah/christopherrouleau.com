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
        source: 'title',
        maxLength: 140,
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
    // Excerpt
    {
      name: 'excerpt',
      type: 'excerpt',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      active: 'active',
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
};
