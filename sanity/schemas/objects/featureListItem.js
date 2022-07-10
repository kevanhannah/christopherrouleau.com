import { PackageIcon } from '@sanity/icons';

export default {
  name: 'featureListItem',
  title: 'List Item',
  type: 'object',
  icon: PackageIcon,
  fields: [
    {
      name: 'item',
      type: 'array',
      of: [
        { type: 'linkInternal' },
        { type: 'linkExternal' },
        { type: 'plainTextItem' },
      ],
      validation: (Rule) => Rule.min(1).max(1).required(),
    },
    {
      name: 'startDate',
      title: 'Release year',
      type: 'number',
      description:
        'Year the item was published or released. Leave blank to omit year.',
      validation: (Rule) => Rule.min(2000).max(2100).integer(),
    },
    {
      name: 'endDate',
      title: 'Year completed',
      type: 'number',
      description:
        'For items that span multiple years. Leave blank if item only ranged for single year.',
      validation: (Rule) => Rule.min(2000).max(2100).integer(),
    },
  ],
  preview: {
    select: {
      item: 'item',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare(selection) {
      const { item, startDate, endDate } = selection;

      if (!item) {
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

      if (item && item[0]._type === 'plainTextItem') {
        title.push(item[0].text);
        subtitle = 'Plain Text';
      }
      if (
        (item && item[0]._type === 'linkExternal') ||
        item[0]._type === 'linkInternal'
      ) {
        title.push(item[0].linkText);
        subtitle = item[0].url;
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
