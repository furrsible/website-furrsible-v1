import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Furrsible`,
    siteUrl: `https://www.yourdomain.tld`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/common/images/icon.png`,
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
