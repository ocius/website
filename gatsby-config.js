const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `OCIUS`,
    siteUrl: `https://ocius.com.au`,
    description: `We make ocean drones`,
    authorTwitterAccount: `OciusTechnology`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },

    // Parse all markdown files (each plugin add/parse some data into GraphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },

          {
            resolve: 'gatsby-remark-images-grid',
            options: {
              gridGap: '0',
              margin: '20px auto',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              // Add captions to images
              showCaptions: true,
              // Add custom styles to the div wrapping the responsive images
              wrapperStyle: 'margin-left: unset !important;margin-right: unset !important;',
              // Add webp version
              withWebp: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },

    // Add Google Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // Your google analytics tracking ID
        trackingId: 'UA-150544681-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },

    // Enable styled components support
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    // Add Mailchimp integration
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://ocius.us15.list-manage.com/subscribe/post?u=deb7a39f82191f618b8d5ab5d&amp;id=bcb37462eb',
      },
    },

    `gatsby-plugin-advanced-sitemap`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
