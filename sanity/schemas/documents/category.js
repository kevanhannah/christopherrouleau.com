import { IoLibraryOutline } from 'react-icons/io5';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: IoLibraryOutline,
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
