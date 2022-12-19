export const home = (S) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .child(S.editor().title('Home').schemaType('home').documentId('home'));
