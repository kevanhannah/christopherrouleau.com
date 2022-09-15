import S from '@sanity/desk-tool/structure-builder';

export const posts = S.listItem()
  .title('Blog Posts')
  .schemaType('post')
  .child(S.documentTypeList('post'));
