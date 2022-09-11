import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { IoSettingsOutline, IoLibraryOutline } from 'react-icons/io5';
import { UlistIcon } from '@sanity/icons';

const views = [S.view.form()];

export const settings = S.listItem()
  .title('Settings')
  .icon(IoSettingsOutline)
  .child(
    S.list()
      .title('Settings')
      .items([
        S.listItem()
          .id('site-settings')
          .title('Site Settings')
          .schemaType('settings')
          .child(
            S.editor()
              .title('Site Settings')
              .schemaType('settings')
              .documentId('settings')
          ),
        S.listItem()
          .id('work-categories')
          .title('Work Categories')
          .icon(IoLibraryOutline)
          .child(() =>
            S.documentTypeList('category')
              .title('Work Categories')
              .canHandleIntent(() =>
                S.documentTypeList('category').getCanHandleIntent()
              )
              .showIcons(true)
              .child((id) =>
                S.document().documentId(id).views(views).schemaType('category')
              )
          ),
        orderableDocumentListDeskItem({
          type: 'featureList',
          title: 'Feature Lists',
          icon: UlistIcon,
          id: 'feature-lists',
        }),
        // S.listItem()
        //   .id('feature-lists')
        //   .title('Feature Lists')
        //   .icon(UlistIcon)
        //   .child(() =>
        //     S.documentTypeList('featureList')
        //       .title('Feature Lists')
        //       .canHandleIntent(() =>
        //         S.documentTypeList('featureList').getCanHandleIntent()
        //       )
        //       .showIcons(true)
        //       .child((id) =>
        //         S.document()
        //           .documentId(id)
        //           .views(views)
        //           .schemaType('featureList')
        //       )
        //   ),
      ])
  );
