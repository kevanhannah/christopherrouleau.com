import { IoSettingsOutline } from 'react-icons/io5';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: IoSettingsOutline,
  __experimental_actions: ['update', 'publish'],
  fields: [
    // Banner
    {
      name: 'bannerActive',
      title: 'Activate banner',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'bannerText',
      title: 'Banner text',
      type: 'string',
      validation: (Rule) => Rule.max(80),
      hidden: ({ document }) => !document?.bannerActive,
    },
    {
      name: 'bannerLink',
      title: 'Banner URL',
      type: 'url',
      hidden: ({ document }) => !document?.bannerActive,
    },
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Site configuration and options',
        title: 'Site settings',
      };
    },
  },
};
