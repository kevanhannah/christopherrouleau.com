export default {
  name: 'blockImage',
  type: 'object',
  title: 'Image',
  options: {
    hotspot: true,
    storeOriginalFilename: false,
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
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
  preview: {
    select: {
      fileName: 'image.asset.originalFilename',
      image: 'image',
    },
    prepare(selection) {
      const { fileName, image } = selection;

      return {
        media: image,
        title: fileName,
      };
    },
  },
};
