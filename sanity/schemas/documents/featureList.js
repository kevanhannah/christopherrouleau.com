import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'featureList',
  title: 'Feature list',
  type: 'document',
  icon: false,
  __experimental_actions: ['update', 'publish'],
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'title',
      title: 'List title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: 'featureList', hidden: false }),
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
