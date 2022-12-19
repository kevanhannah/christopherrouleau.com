export const posts = (S) =>
  S.listItem()
    .title('Blog Posts')
    .schemaType('post')
    .child(S.documentTypeList('post'));
