import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Product from '../common/products/Product';
import ProductsContainer from '../common/products/ProductsContainer';
import Heading from '../common/Heading';

const FeaturedProducts = () => {
    const data = useStaticQuery(graphql`
    query fetchFeaturedProducts {
        shopifyCollection(title: {eq: "polecane"}) {
          title
          products {
            handle
            title
            description
            variants {
              presentmentPrices {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `);
    const featuredProducts = data.shopifyCollection.products;

    return ( 
        <>
            <Heading>{data.shopifyCollection.title}</Heading>
            <ProductsContainer>
                { featuredProducts.map(product => {
                const {title, handle, images, variants} = product;
                const priceNode = variants[0].presentmentPrices.edges[0].node;

                return(
                  <Product
                    key = { handle }
                    handle = { handle }
                    title = { title }
                    image = { images[0].localFile.childImageSharp.fluid }
                    price = { priceNode.compareAtPrice ? priceNode.compareAtPrice.amount : priceNode.price.amount }
                  />
                );

                })}
            </ProductsContainer>
        </>
     );
}
 
export default FeaturedProducts;