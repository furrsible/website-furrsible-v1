import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Furrsible`,
    description: `Making pet parenting easy! Your one-stop hub for all pet services, right at your fingertips.`,
    twitterUsername: `@furrsible`,
    image: `src/common/images/logo.png`,
    siteUrl: `https://furrsible.com/`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Furrsible`,
        short_name: `furrsible`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/common/images/logo.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/common/images/`,
      },
      __key: `images`,
    },
    `gatsby-plugin-postcss`,
  ],
  jsxRuntime: `automatic`,
};

export default config;
