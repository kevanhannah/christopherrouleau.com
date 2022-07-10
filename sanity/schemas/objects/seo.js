export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 2,
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
      validation: (Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        ),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
