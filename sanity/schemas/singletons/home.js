export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'Large greeting at the top the page',
      validation: (Rule) =>
        Rule.max(20).warning(`A title shouldn't be more than 20 characters.`),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Introductory paragraph at the top of the page',
    },
    { name: 'hero', type: 'hero' },
    {
      name: 'categories',
      title: 'Category ordering',
      type: 'array',
      of: [
        {
          title: 'Series',
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Home page content',
        title: 'Home page',
      };
    },
  },
};
