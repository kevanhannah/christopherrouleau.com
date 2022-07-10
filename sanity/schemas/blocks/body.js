// export default {
//   name: 'body',
//   title: 'Body',
//   type: 'array',
//   of: [
//     {
//       lists: [
//         { title: 'Bullet', value: 'bullet' },
//         { title: 'Numbered', value: 'number' },
//       ],
//       marks: {
//         annotations: [
//           // Internal link
//           // {
//           //   name: 'linkInternal',
//           //   type: 'linkInternal',
//           // },
//           // // URL
//           // {
//           //   name: 'linkExternal',
//           //   type: 'linkExternal',
//           // },
//         ],
//         decorators: [
//           {
//             title: 'Italic',
//             value: 'em',
//           },
//           {
//             title: 'Strong',
//             value: 'strong',
//           },
//         ],
//       },
//       // Regular styles
//       // styles: [
//       //   {
//       //     blockEditor: {
//       //       render: ({ children }) => (
//       //         <div style={{ fontSize: '1.25rem', lineHeight: 1.25 }}>{children}</div>
//       //       )
//       //     },
//       //     title: 'Heading',
//       //     value: 'h2'
//       //   }
//       // ],
//       // Paragraphs
//       type: 'block',
//     },
//   ],
// };

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
  ],
};
