import S from '@sanity/desk-tool/structure-builder';

export const posts = S.listItem()
  .title('Posts')
  .schemaType('post')
  .child(S.documentTypeList('post'));
