module.exports = {
  siteMetadata: {
    title: `Luke Careccia`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Acme`,
          `Montserrat\:400,500,700`,
          `Poppins\:300,400,700`,
          `Alegreya Sans\:300,400,700,900`,
          `Alegreya Sans SC\:300,400,700,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Acme`,
          },
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Alegreya Sans`,
            variants: [`300`, `400`, `700`, `900`],
          },
          {
            family: `Alegreya Sans SC`,
            variants: [`300`, `400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/realtorFavicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177589466-1",
      },
    },
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        instrumentationType: 'proAndSPA', // Options are 'lite', 'pro', 'proAndSPA'
        configs: {
          accountId: '2865038',
          trustKey: '2865038',
          agentID: '344478096',
          licenseKey: 'NRJS-3705927db801eea4c76',
          applicationID: '344478096',
          beacon: 'bam.nr-data.net',
          errorBeacon: 'bam.nr-data.net'
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
