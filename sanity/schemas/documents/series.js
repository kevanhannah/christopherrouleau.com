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
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Heading', value: 'h3' },
            { title: 'Subheading', value: 'h4' },
            { title: 'Paragraph', value: 'normal' },
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
      description: 'Description of the collection',
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
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
  ],
};
