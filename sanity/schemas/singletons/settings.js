import { IoSettingsOutline } from 'react-icons/io5';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: IoSettingsOutline,
  __experimental_actions: ['update', 'publish'],
  groups: [
    {
      name: 'banner',
      title: 'Banner',
    },
    {
      name: 'lists',
      title: 'Lists',
    },
  ],
  fields: [
    // Banner
    {
      name: 'bannerActive',
      title: 'Activate banner',
      type: 'boolean',
      initialValue: false,
      group: 'banner',
    },
    {
      name: 'bannerText',
      title: 'Banner text',
      type: 'string',
      group: 'banner',
      validation: (Rule) => Rule.max(80),
      hidden: ({ document }) => !document?.bannerActive,
    },
    {
      name: 'bannerLink',
      title: 'Banner URL',
      type: 'url',
      group: 'banner',
      hidden: ({ document }) => !document?.bannerActive,
    },
    // Lists
    {
      name: 'featureLists',
      title: 'Lists of featured items',
      type: 'array',
      of: [{ type: 'featureList' }],
      group: 'lists',
      validation: (Rule) => Rule.max(3),
    },
  ],
};
