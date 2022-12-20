export default function works(S, schemaType) {
  const views = [S.view.form()];
  const workParents = `_type == "${schemaType}" && !defined(parentWork) && !(_id in path("drafts.**"))`;

  return S.listItem()
    .title('Works')
    .schemaType(schemaType)
    .child(() =>
      S.documentList()
        .schemaType(schemaType)
        .title('Works')
        .filter(workParents)
        .canHandleIntent(() =>
          S.documentTypeList(schemaType).getCanHandleIntent()
        )
        .child((id) =>
          S.document().documentId(id).views(views).schemaType(schemaType)
        )
    );
}
