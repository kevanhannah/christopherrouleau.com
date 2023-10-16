import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';
import dashboardConfig from './dashboardConfig';

export default defineConfig({
  title: 'christopherrouleau.com',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [
    dashboardTool({
      widgets: dashboardConfig,
    }),
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemas,
    templates: (prev) => [
      {
        id: 'child-work',
        title: 'Work: Child',
        schemaType: 'work',
        parameters: [
          {
            name: 'parentWorkCategoryId',
            title: 'Parent Category ID',
            type: 'string',
          },
          {
            name: 'parentWorkExcerpt',
            title: 'Parent Excerpt',
            type: 'string',
          },
          { name: 'parentWorkId', title: 'Parent ID', type: 'string' },
          {
            name: 'parentWorkReleaseDate',
            title: 'Parent Release Date',
            type: 'date',
          },
        ],
        value: ({
          parentWorkCategoryId,
          parentWorkExcerpt,
          parentWorkId,
          parentWorkReleaseDate,
        }) => ({
          excerpt: parentWorkExcerpt,
          category: { _type: 'reference', _ref: parentWorkCategoryId },
          parentWork: { _type: 'reference', _ref: parentWorkId },
          releaseDate: parentWorkReleaseDate,
          hasChildWorks: false,
        }),
      },
      ...prev,
    ],
  },
});
