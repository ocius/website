module.exports = {
  siteMetadata: {
    title: `OCIUS`,
    siteUrl: `https://ocius.cloud`,
    description: `We make ocean drones`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ]
};
