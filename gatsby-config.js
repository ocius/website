module.exports = {
  siteMetadata: {
    title: `OCIUS`,
    siteUrl: `https://ocius.cloud`,
    description: `We make ocean drones`
  },
  plugins: [
    "gatsby-plugin-offline",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ocius",
        short_name: "Ocius",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/ocius-logo.png"
      }
    }
  ]
};
