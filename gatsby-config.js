module.exports = {
  siteMetadata: {
    title: `OCIUS`,
    siteUrl: `https://ocius.com.au`,
    description: `We make ocean drones`
  },
  plugins: [
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/ocius-logo.png" // This path is relative to the root of the site.
      }
    }
  ]
};
