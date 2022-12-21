import { IoPersonOutline } from 'react-icons/io5';

export default function about(S) {
  // return S.listItem()
  //   .title('About')
  //   .schemaType('about')
  //   .child(S.editor().title('About').schemaType('about').documentId('about'));
  return S.listItem()
    .title('About')
    .icon(IoPersonOutline)
    .child(S.document().schemaType('about').documentId('about'));
}
