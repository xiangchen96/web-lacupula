module.exports = {
  siteMetadata: {
    title: `Restaurante Hong Kong`,
    description: `Restaurante chino situado en Caleta de Fuste, Fuerteventura.`,
    author: `@xiang`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
