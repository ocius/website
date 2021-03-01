const _ = require('lodash');

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require('gatsby-awesome-pagination');

const LoadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/about/)) {
    page.matchPath = `/about/*`;

    // Update the page.
    createPage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      allLinksYaml(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postTemplate = path.resolve(`./src/templates/blogPost.js`);
    const blogTemplate = path.resolve(`./src/templates/blog.js`);

    const allPosts = result.data.allMarkdownRemark.edges;

    // Iterate over the array of posts
    _.each(allPosts, ({ node: post }) => {
      // Create the Gatsby page for this WordPress post
      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: post.fields.slug,
        },
      });
    });

    // Create a paginated blog, e.g., /news, /news/2, /news/3
    paginate({
      createPage,
      items: allPosts,
      itemsPerPage: 8,
      pathPrefix: '/news',
      component: blogTemplate,
    });

    // Create a paginated media coverage page, e.g., /media, /media/2, /media/3
    paginate({
      createPage,
      items: result.data.allLinksYaml.edges,
      itemsPerPage: 12,
      pathPrefix: '/media-coverage',
      component: path.resolve(`src/templates/media.js`),
    });
  });
};

// In the case where none of the nav items have child pages, an error occurs in the left nav
// that prevents the site from working because of the missing "title" field.
// By overriding the type definitions for NavItemsYaml we can allow the title to be nullable.

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
  type NavItemsYamlPage {
    title: String
    path: String!
  }
  type NavItemsYaml implements Node {
    title: String!
    path: String!
    pages: [NavItemsYamlPage]
    hasDivider: Boolean
  }`,
  ];

  createTypes(typeDefs);
};
