/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://library.karma.dev.br/`,
    title: `Library of Karma`,
    description: `Welcome to Karma's Digital Library, a non-profit repository, where a passionate witch is preserving and sharing rare J-Horror movies. In an age where many of these films are disappearing from the internet, Karma's mission is to ensure their continued availability and enjoyment. Explore this growing collection and enjoy these cinematic gems!`,
    image: `/library-of-karma-icon.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Karla`,
            file: `https://fonts.googleapis.com/css2?family=Karla:wght@200;400;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Library of Karma`,
        short_name: `Library of Karma`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#a020f0`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HS264CCHM5", // Google Analytics / GA
          "GTM-WC9WDCVJ", // Google Tag Manager
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Respect Do Not Track
          respectDNT: true,
        },
      },
    },
  ],
}
