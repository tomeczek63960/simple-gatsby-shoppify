module.exports = {
  siteMetadata: {
    title: `Shopify shop`,
    description: `First project in gatsby`,
    author: `Tomasz Kardel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `RealyStyleClothes`,
        accessToken: `294986b853c34875a74e0c1375eeca28`,
        apiVersion: '2020-07',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,700`,
          "Poppins\:400,500,700"
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_SHOP_NAME", "GATSBY_ACCESS_TOKEN"]
      },
    },
  ],
}
