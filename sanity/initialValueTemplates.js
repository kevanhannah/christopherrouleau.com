import T from '@sanity/base/initial-value-template-builder';

export default [
  T.template({
    id: 'child-work',
    title: 'Work: Child',
    schemaType: 'work',
    parameters: [
      {
        name: 'parentWorkCategoryId',
        title: 'Parent Category ID',
        type: 'string',
      },
      { name: 'parentWorkExcerpt', title: 'Parent Excerpt', type: 'string' },
      { name: 'parentWorkId', title: 'Parent ID', type: 'string' },
      {
        name: 'parentWorkReleaseDate',
        title: 'Parent Release Date',
        type: 'date',
      },
    ],
    value: ({
      parentWorkCategoryId,
      parentWorkExcerpt,
      parentWorkId,
      parentWorkReleaseDate,
    }) => ({
      excerpt: parentWorkExcerpt,
      category: { _type: 'reference', _ref: parentWorkCategoryId },
      parentWork: { _type: 'reference', _ref: parentWorkId },
      releaseDate: parentWorkReleaseDate,
    }),
  }),
  ...T.defaults(),
];
