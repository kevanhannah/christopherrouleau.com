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
    orderRankField({ type: 'featureList' }),
  ],
};
