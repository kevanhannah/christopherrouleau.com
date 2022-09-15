import { IoSettingsOutline } from 'react-icons/io5';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: IoSettingsOutline,
  __experimental_actions: ['update', 'publish'],
  groups: [
    {
      default: true,
      name: 'banner',
      title: 'Banner',
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
  ],
};
