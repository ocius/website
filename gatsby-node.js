const _ = require('lodash');

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require('gatsby-awesome-pagination');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
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
          slug: post.fields.slug
        }
      });
    });

    // Create a paginated blog, e.g., /news, /news/2, /news/3
    paginate({
      createPage,
      items: allPosts,
      itemsPerPage: 8,
      pathPrefix: '/news',
      component: blogTemplate
    });
  });
};
