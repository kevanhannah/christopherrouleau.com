export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the series',
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
      name: 'coverImage',
      title: 'Series cover image',
      type: 'itemImage',
      description: 'Main image on the series page',
    },
    {
      name: 'description',
      type: 'description',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      description: 'Initial date the series was published or released',
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 3,
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
      validation: (Rule) =>
        Rule.max(200).warning('Shorter excerpts are usually better.'),
    },
  ],
};
