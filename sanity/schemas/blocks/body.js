export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        annotations: [
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal',
          },
          // External link
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal',
          },
        ],
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
      },
      // Regular styles
      styles: [
        {
          title: 'Paragraph',
          value: 'normal',
        },
        {
          title: 'Heading',
          value: 'h2',
        },
      ],
      // Paragraphs
      type: 'block',
    },
    {
      name: 'blockImage',
      type: 'blockImage',
    },
  ],
};
