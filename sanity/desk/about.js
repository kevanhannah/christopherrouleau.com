import S from '@sanity/desk-tool/structure-builder';

export const about = S.listItem()
  .title('About')
  .schemaType('about')
  .child(S.editor().title('About').schemaType('about').documentId('about'));
