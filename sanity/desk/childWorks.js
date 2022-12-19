import { map } from 'rxjs/operators';
import { IoImagesOutline } from 'react-icons/io5';

export const childWorks = (S, context) => {
  const { documentStore, schemaType } = context;
  const workParents = `_type == "${schemaType}" && !defined(parentWork) && hasChildWorks == true && !(_id in path("drafts.**"))`;

  return S.listItem(schemaType)
    .title('Child Works')
    .icon(IoImagesOutline)
    .child(() =>
      documentStore.listenQuery(`*[${workParents}]`).pipe(
        map((parents) =>
          S.list()
            .title('Parent Works')
            .items([
              ...parents.map((parent) =>
                S.listItem({
                  id: parent._id,
                  icon: IoImagesOutline,
                  title: parent.name,
                  schemaType,
                  child: () =>
                    S.documentTypeList(schemaType)
                      .title(`Works in ${parent.name}`)
                      .filter(
                        `_type == "${schemaType}" && parentWork._ref == $parentWorkId`
                      )
                      .params({
                        parentWorkCategoryId: parent.category._ref,
                        parentWorkExcerpt: `Part of ${parent.name}.`,
                        parentWorkId: parent._id,
                        parentWorkName: parent.name,
                        parentWorkReleaseDate: parent.releaseDate,
                      })
                      .initialValueTemplates([
                        S.initialValueTemplateItem('child-work', {
                          parentWorkCategoryId: parent.category._ref,
                          parentWorkExcerpt: `Part of ${parent.name}.`,
                          parentWorkId: parent._id,
                          parentWorkName: parent.name,
                          parentWorkReleaseDate: parent.releaseDate,
                        }),
                      ]),
                })
              ),
            ])
        )
      )
    );
};
