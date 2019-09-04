const path = require('path');

module.exports = {
  siteMetadata: {
    title: `OCIUS`,
    siteUrl: `https://ocius.cloud`,
    description: `We make ocean drones`,
    authorTwitterAccount: `OciusTechnology`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },

    // Parse all markdown files (each plugin add/parse some data into GraphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-grid',
            options: {
              gridGap: '0',
              margin: '20px auto'
            }
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
              withWebp: true
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },

    // Add Google Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // Your google analytics tracking ID
        trackingId: 'UA-96773019-1',
        // Puts tracking script in the head instead of the body
        head: false
      }
    },

    // Add manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OCIUS`,
        short_name: `OCIUS`,
        start_url: `/`,
        background_color: `#efefef`,
        theme_color: `#125192`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
        include_favicon: true // Include favicon
      }
    },

    // Enable styled components support
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`
  ]
};
