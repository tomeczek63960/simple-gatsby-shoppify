import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
              price
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

                return(
                  <Product
                    handle = { handle }
                    title = { title }
                    image = { images[0].localFile.childImageSharp.fluid }
                    price = { variants[0].price }
                  />
                );

                })}
            </ProductsContainer>
        </>
     );
}
 
export default FeaturedProducts;