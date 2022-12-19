export const about = (S) =>
  S.listItem()
    .title('About')
    .schemaType('about')
    .child(S.editor().title('About').schemaType('about').documentId('about'));
