export default {
  name: 'description',
  title: 'Description',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Paragraph', value: 'normal' }],
      lists: [
        { title: 'Numbered', value: 'number' },
        {
          title: 'Bullet',
          value: 'bullet',
        },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
  description: 'Description of the work or series',
};
