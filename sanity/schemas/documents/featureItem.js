import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import { PackageIcon } from '@sanity/icons';

export default {
  name: 'featureItem',
  title: 'Feature list item',
  type: 'document',
  icon: PackageIcon,
  orderings: [orderRankOrdering],
  initialValue: {
    type: 'externalLink',
  },
  groups: [
    {
      default: true,
      name: 'information',
      title: 'Information',
    },
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    {
      name: 'text',
      title: 'Item text',
      type: 'string',
      group: 'information',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Item type',
      type: 'string',
      group: 'information',
      options: {
        list: [
          { title: 'External link', value: 'externalLink' },
          { title: 'Internal link', value: 'internalLink' },
          { title: 'Plain text', value: 'text' },
        ],
        layout: 'radio',
      },
    },
    orderRankField({ type: 'featureList' }),
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      group: 'information',
      hidden: ({ document }) => {
        if (document?.type === 'externalLink') return false;
        if (document?.type !== 'externalLink' && document?.url !== undefined)
          return false;
        return true;
      },
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).custom(
          (urlField, { document }) => {
            if (document?.type === 'externalLink' && !urlField) {
              return 'Required';
            }
            if (document?.type !== 'externalLink' && urlField) {
              return 'Only external links can have URLs';
            }

            return true;
          }
        ),
    },
    {
      name: 'reference',
      type: 'reference',
      group: 'information',
      hidden: ({ document }) => {
        if (document?.type === 'internalLink') return false;
        if (
          document?.type !== 'internalLink' &&
          document?.reference !== undefined
        )
          return false;
        return true;
      },
      validation: (Rule) =>
        Rule.custom((referenceField, { document }) => {
          if (document?.type === 'internalLink' && !referenceField) {
            return 'Required';
          }
          if (document?.type !== 'internalLink' && referenceField) {
            return 'Only internal links can have references';
          }

          return true;
        }),
      to: [{ type: 'category' }, { type: 'work' }],
    },
    {
      name: 'list',
      title: 'List',
      type: 'reference',
      group: 'details',
      description: 'List that this item belongs to',
      to: [{ type: 'featureList' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Release year',
      type: 'number',
      group: 'details',
      description:
        'Year the item was published or released. Leave blank to omit year.',
      validation: (Rule) => Rule.min(2000).max(2100).integer(),
    },
    {
      name: 'endDate',
      title: 'Year completed',
      type: 'number',
      group: 'details',
      description:
        'For items that span multiple years. Leave blank if item only spans a single year.',
      validation: (Rule) => Rule.min(2000).max(2100).integer(),
    },
  ],
  preview: {
    select: {
      endDate: 'endDate',
      startDate: 'startDate',
      text: 'text',
      type: 'type',
      url: 'url',
    },
    prepare(selection) {
      console.log(selection);
      const { endDate, startDate, text, type, url } = selection;

      if (!type) {
        return {
          title: 'Pending',
          subtitle: 'Pending',
        };
      }

      const dateRange = [];
      if (startDate) {
        dateRange.push(startDate.toString().substring(0, 4));
      }
      if (endDate) {
        dateRange.push(`-${endDate.toString().substring(2, 4)}`);
      }

      const title = [];
      let subtitle;

      if (text && type === 'text') {
        title.push(text);
        subtitle = 'Plain Text';
      }
      if (text && type === 'externalLink') {
        title.push(text);
        subtitle = url;
      }

      if (dateRange.length) {
        title.push(` (${dateRange.join('')})`);
      }

      return {
        title: title.join(''),
        subtitle,
      };
    },
  },
};
