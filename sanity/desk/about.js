import { IoPersonOutline } from 'react-icons/io5';

export default function about(S) {
  return S.listItem()
    .title('About')
    .icon(IoPersonOutline)
    .child(S.document().schemaType('about').documentId('about'));
}
