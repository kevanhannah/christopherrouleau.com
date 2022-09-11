import { UlistIcon } from '@sanity/icons';

export default {
  name: 'featureList',
  title: 'Feature list',
  type: 'document',
  icon: UlistIcon,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'List title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'List items',
      type: 'array',
      of: [{ type: 'featureListItem' }],
      validation: (Rule) => Rule.min(1),
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     items: 'items',
  //   },
  //   prepare(selection) {
  //     const { title, items } = selection;

  //     return {
  //       title,
  //       subtitle: `${items.length ? items.length : '0'} item${
  //         items.length === 1 ? '' : 's'
  //       }`,
  //     };
  //   },
  // },
};
