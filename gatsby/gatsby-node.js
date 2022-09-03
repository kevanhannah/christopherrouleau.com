// const { differenceInDays } = require('date-fns');
const path = require('path');

// Create category pages
async function createCategoryPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          id
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

// Create series pages
async function createSeriesPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      series: allSanitySeries {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.series.nodes.forEach((s) => {
    createPage({
      path: `${s.slug.current}`,
      component: path.resolve('./src/templates/series.js'),
      context: {
        id: s.id,
      },
    });
  });
}

// Create work pages
async function createWorkPages({ graphql, actions }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      works: allSanityWork {
        nodes {
          updated: _updatedAt
          id
          inSeries
          slug {
            current
          }
          category {
            id
          }
          series {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.works.nodes.forEach((work) => {
    // const updateDelta = differenceInDays(new Date(), new Date(work.updated));

    const page = {
      context: {
        id: work.id,
      },
      // defer: updateDelta <= 5,
    };

    if (work.series) {
      page.component = path.resolve('./src/templates/seriesWork.js');
      page.path = `${work.series.slug.current}/${work.slug.current}`;
      page.context.seriesId = work.series.id;
    } else {
      page.component = path.resolve('./src/templates/nonSeriesWork.js');
      page.path = `${work.slug.current}`;
      page.context.categoryId = work.category.id;
    }

    createPage(page);
  });
}

exports.createPages = async (params) => {
  await createCategoryPages(params);
  await createBlogPages(params);
  await createSeriesPages(params);
  await createWorkPages(params);
};
