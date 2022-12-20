export default function posts(S) {
  return S.listItem()
    .title('Blog Posts')
    .schemaType('post')
    .child(S.documentTypeList('post'));
}
