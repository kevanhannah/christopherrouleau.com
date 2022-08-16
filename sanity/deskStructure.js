import S from '@sanity/desk-tool/structure-builder';
import { home } from './desk/home';
import { posts } from './desk/posts';
import { settings } from './desk/settings';

const DOCUMENT_TYPES_IN_STRUCTURE = ['home', 'post', 'settings'];

export default () =>
  S.list()
    .title('Content')
    .items([
      home,
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
      S.divider(),
      posts,
      S.divider(),
      settings,
    ]);
