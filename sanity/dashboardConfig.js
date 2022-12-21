import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';

export default [
  documentListWidget({
    layout: { width: 'medium' },
    order: '_updatedAt desc',
    title: 'Last edited works',
    types: ['work'],
  }),
  netlifyWidget({
    title: 'Deploy site',
    sites: [
      {
        title: 'christopherrouleau.com',
        apiId: import.meta.env.SANITY_STUDIO_NETLIFY_SITE_ID,
        buildHookId: import.meta.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
        name: 'cute-yeot-a52e29',
        url: 'https://christopherrouleau.com',
      },
    ],
  }),
];
