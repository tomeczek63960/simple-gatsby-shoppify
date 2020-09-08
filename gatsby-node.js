const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CollectionPageTemplate = path.resolve(`src/templates/CollectionPageTemplate.js`)
  const ProductPageTemplate = path.resolve(`src/templates/ProductPageTemplate.js`)

  const collectionQueryResult = await graphql(`
    query FetchCollections {
        allShopifyCollection {
            edges {
                node {
                    handle
                    title
                }
            }
        }
    }
  `);
  
  collectionQueryResult.data.allShopifyCollection.edges.forEach(edge => {
      createPage({
        path: `${edge.node.handle}`,
        component: CollectionPageTemplate,
        context: {
            title:edge.node.title,
            handle:edge.node.handle
        },
      })
    })


  const productQueryResult = await graphql(`
  {
    allShopifyProduct {
        edges {
            node {
                handle
            }
            }
        }
    }
  `);
  
  productQueryResult.data.allShopifyProduct.edges.forEach(edge => {
      createPage({
        path: `${edge.node.handle}`,
        component: ProductPageTemplate,
        context: {
            handle:edge.node.handle
        },
      })
    })
}