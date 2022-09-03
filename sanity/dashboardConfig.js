export default {
  widgets: [
    {
      name: 'document-list',
      layout: {
        width: 'medium',
        height: 'small',
      },
      options: {
        title: 'Last edited works',
        order: '_updatedAt desc',
        types: ['work'],
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'Deploy site',
        sites: [
          {
            title: 'christopherrouleau.com',
            apiId: process.env.SANITY_STUDIO_NETLIFY_SITE_ID,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
            name: 'cute-yeot-a52e29',
          },
        ],
      },
    },
  ],
};
