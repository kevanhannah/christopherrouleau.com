import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: IoHomeOutline,
  __experimental_actions: ['update', 'publish'],
  groups: [
    {
      default: true,
      name: 'introduction',
      title: 'Introduction',
    },
    {
      name: 'hero',
      title: 'Spotlight Content',
    },
    {
      name: 'categories',
      title: 'Categories',
    },
  ],
  fields: [
    {
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'Large greeting at the top the page',
      group: 'introduction',
      validation: (Rule) =>
        Rule.max(20).warning(`A title shouldn't be more than 20 characters.`),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      group: 'introduction',
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
    {
      name: 'introImage',
      title: 'Feature image',
      type: 'itemImage',
      group: 'introduction',
      description:
        'Feature image next to the introductory paragraph at the top of the page',
    },
    {
      name: 'hero',
      title: 'Spotlight Content',
      description:
        'Featured content or items that are displayed in the blue banner on the home page',
      type: 'hero',
      group: 'hero',
    },
    {
      name: 'categories',
      title: 'Display order for categories on the home page',
      type: 'array',
      group: 'categories',
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
        title: 'Home Page',
      };
    },
  },
};
