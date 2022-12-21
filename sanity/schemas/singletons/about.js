import { IoPersonOutline } from 'react-icons/io5';

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  icon: IoPersonOutline,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'pageHeading',
      title: 'Page heading',
      type: 'string',
      description: 'Large heading at the top the page',
    },
    {
      name: 'pageLead',
      type: 'text',
      rows: 3,
      title: 'Page lead',
      description:
        'Short summary text that appears at the top the page in slightly larger text',
    },
    {
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h3' },
            { title: 'Subheading', value: 'h4' },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Text contents of the about page',
    },
    {
      name: 'introImage',
      title: 'Feature image',
      type: 'itemImage',
      description: 'Hero image displayed on the page',
    },
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'About page content',
        title: 'About Page',
      };
    },
  },
};
