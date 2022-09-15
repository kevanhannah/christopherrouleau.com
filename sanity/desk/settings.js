import S from '@sanity/desk-tool/structure-builder';
import documentStore from 'part:@sanity/base/datastore/document';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { IoSettingsOutline, IoLibraryOutline } from 'react-icons/io5';
import { UlistIcon } from '@sanity/icons';
import { map } from 'rxjs/operators';

const views = [S.view.form()];

export const settings = (schemaType = 'featureList') => {
  const query = `*[_type == $type]`;

  return S.listItem()
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
                  S.document()
                    .documentId(id)
                    .views(views)
                    .schemaType('category')
                )
            ),
          S.listItem()
            .id('feature-lists')
            .title('Feature Lists')
            .icon(UlistIcon)
            .child(() =>
              documentStore.listenQuery(query, { type: schemaType }).pipe(
                map((featureLists) =>
                  S.list()
                    .title('List Content')
                    .items([
                      ...featureLists.map((featureList) =>
                        S.listItem()
                          .id(featureList._id)
                          .showIcon(false)
                          .title(featureList.title)
                          .schemaType(schemaType)
                          .child(() =>
                            S.list()
                              .title(
                                `Items in ${featureList.title.toLowerCase()}`
                              )
                              .items([
                                S.listItem()
                                  .id(featureList._id)
                                  .title('List settings')
                                  .icon(IoSettingsOutline)
                                  .schemaType(schemaType)
                                  .child(
                                    S.document()
                                      .documentId(featureList._id)
                                      .views(views)
                                      .schemaType(schemaType)
                                  ),
                                orderableDocumentListDeskItem({
                                  filter: `list._ref == $parentListId`,
                                  icon: UlistIcon,
                                  id: `featureListItems-${featureList._id}`,
                                  params: {
                                    parentListId: featureList._id,
                                  },
                                  title: 'List items',
                                  type: 'featureItem',
                                }),
                              ])
                          )
                      ),
                    ])
                )
              )
            ),
        ])
    );
};
