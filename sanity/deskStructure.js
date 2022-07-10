import S from '@sanity/desk-tool/structure-builder';
import { home } from './desk/home';
import { settings } from './desk/settings';

const DOCUMENT_TYPES_IN_STRUCTURE = ['home', 'settings'];

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
      settings,
    ]);
