import { EditIcon } from '@sanity/icons';

export default {
  name: 'plainTextItem',
  title: 'Plain Text',
  type: 'object',
  icon: EditIcon,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const { text } = selection;

      return {
        subtitle: 'Plain Text',
        title: text,
      };
    },
  },
};
