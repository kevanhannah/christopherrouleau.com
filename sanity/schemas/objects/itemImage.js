export default {
  name: 'itemImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
    storeOriginalFilename: false,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility',
      options: {
        // isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
