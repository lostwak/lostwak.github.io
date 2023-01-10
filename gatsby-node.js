/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const pages = [
  { raidIdx: 0 },
  { raidIdx: 1 },
  { raidIdx: 2 },
  { raidIdx: 3 },
];

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/record/4",
    component: require.resolve("./src/pages/record.js"),
    context: {},
    defer: true,
  })

  pages.forEach(page => {
    createPage({
        path: '/record/' + page.raidIdx.toString(),
        context: {
          raidIdx: page.raidIdx
        },
        component: require.resolve("./src/pages/record.js"),
    });
});
}
