// const { differenceInDays } = require('date-fns');
const path = require('path');

// Create category pages
async function createCategoryPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          id: _id
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category) => {
    createPage({
      path: `${category.slug.current}`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        id: category.id,
      },
    });
  });
}

// Create blog pages
async function createBlogPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          publishedAt
          slug {
            current
          }
        }
      }
    }
  `);

  const postYears = [];

  data.posts.nodes.forEach((p) => {
    const postYear = new Date(p.publishedAt).getFullYear();

    if (!postYears.includes(postYear)) {
      postYears.push(postYear);
    }

    createPage({
      path: `blog/${postYear}/${p.slug.current}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: p.id,
      },
      // defer: differenceInDays(new Date(), new Date(p.publishedAt)) > 90,
    });
  });

  postYears.forEach((pY) => {
    createPage({
      path: `blog/${pY}`,
      component: path.resolve('./src/templates/postList.js'),
      context: {
        yearStart: `${pY}-01-01`,
        yearEnd: `${pY}-12-31`,
      },
    });
  });
}

// Create work pages
async function createWorkPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allSanityWork {
        nodes {
          category {
            id: _id
          }
          childWorks {
            id: _id
          }
          id: _id
          name
          parentWork {
            id: _id
            slug {
              current
            }
          }
          releaseDate
          slug {
            current
          }
        }
      }
    }
  `);

  // If the work has child works, it is a series
  const series = data.allSanityWork.nodes.filter((s) => s.childWorks.length);

  // If the work has a parent work, it is a series work
  const seriesWorks = data.allSanityWork.nodes.filter((sw) => sw.parentWork);

  // If the work no parent work and no child works, it is a non-series work
  const nonSeriesWorks = data.allSanityWork.nodes.filter(
    (nsw) => !nsw.parentWork && !nsw.childWorks.length
  );

  series.forEach((s) => {
    createPage({
      path: `${s.slug.current}`,
      component: path.resolve('./src/templates/series.js'),
      context: {
        id: s.id,
      },
      // defer: differenceInDays(new Date(), new Date(s.releaseDate)) > 90,
    });
  });

  seriesWorks.forEach((sw) => {
    createPage({
      path: `${sw.parentWork.slug.current}/${sw.slug.current}`,
      component: path.resolve('./src/templates/seriesWork.js'),
      context: {
        id: sw.id,
        parentId: sw.parentWork.id,
      },
      // defer: differenceInDays(new Date(), new Date(sw.releaseDate)) > 90,
    });
  });

  nonSeriesWorks.forEach((nsw) => {
    createPage({
      path: `${nsw.slug.current}`,
      component: path.resolve('./src/templates/nonSeriesWork.js'),
      context: {
        id: nsw.id,
        categoryId: nsw.category.id,
      },
      // defer: differenceInDays(new Date(), new Date(nsw.releaseDate)) > 90,
    });
  });
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityWork: {
      childWorks: {
        type: ['SanityWork'],
        resolve: async (source, args, context) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                parentWork: {
                  _id: { eq: source._id },
                },
              },
            },
            type: 'SanityWork',
          });

          return entries;
        },
      },
    },
    SanityFeatureList: {
      items: {
        type: ['SanityFeatureItem'],
        resolve: async (source, args, context) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                list: {
                  _id: { eq: source._id },
                },
              },
            },
            type: 'SanityFeatureItem',
          });

          return entries;
        },
      },
    },
  };

  createResolvers(resolvers);
};

exports.createPages = async (params) => {
  await createBlogPages(params);
  await createCategoryPages(params);
  await createWorkPages(params);
};
