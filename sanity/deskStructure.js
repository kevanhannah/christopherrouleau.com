import S from '@sanity/desk-tool/structure-builder';
import { about } from './desk/about';
import { home } from './desk/home';
import { posts } from './desk/posts';
import { settings } from './desk/settings';
import { childWorks } from './desk/childWorks';
import { works } from './desk/works';

const DOCUMENT_TYPES_IN_STRUCTURE = [
  'about',
  'home',
  'post',
  'work',
  'settings',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      home,
      about,
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
      works('work'),
      childWorks('work'),
      S.divider(),
      posts,
      S.divider(),
      settings,
    ]);
