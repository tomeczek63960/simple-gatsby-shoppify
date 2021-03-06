import React from 'react';
import { graphql } from 'gatsby';

import { ShopContainer, ShopContent } from '../components/ShopContainer/ShopContainer';
import Layout from '../components/layout';
import Product from '../components/common/products/Product';
import ProductsContainer from '../components/common/products/ProductsContainer';
import Heading from '../components/common/Heading';
import Aside from '../components/common/aside/Aside';

const SearchPage = ({ data, location, navigate }) => {
    const values = location?.state?.values;
    const type = location?.state?.type;
    let productsToMap = [];

    if(type === 'categories'){
        const searchedCollections = data.allShopifyCollection.edges.filter(edge =>{
            const result = values.some(id => id === edge.node.shopifyId)
            if( result ) return edge;
        })
    
         searchedCollections.forEach(edge => {
            return edge.node.products.forEach(product => {
    
                const isAdded = productsToMap.some(pr => pr.title === product.title);
                if(isAdded) return;
    
                productsToMap.push(product);
            });
        });

    }else{
        productsToMap = data.allShopifyProduct.edges.filter(edge => {

            const isSearched = edge.node.title.toLowerCase().includes(values?.toLowerCase());
            if(!isSearched) return;
    
            return edge;
        });
    }

    return ( 
        <Layout>
            <ShopContainer>
                
                <Aside navigate = { navigate }/>
                <ShopContent>
                    <Heading>Wyszukiwane</Heading>
                    <ProductsContainer>

                        {
                            productsToMap.map( product =>{
                                let handle, title, image, price;
                                
                                if(type === 'categories'){  
                                    const priceNode = product.variants[0].presentmentPrices.edges[0].node;
                                    handle =  product.handle                               
                                    title =  product.title 
                                    image =  product.images[0].localFile.childImageSharp.fluid 
                                    price =  priceNode.compareAtPrice ? priceNode.compareAtPrice.amount : priceNode.price.amount 
                                }else{
                                    const priceNode = product.node.variants[0].presentmentPrices.edges[0].node;
                                    handle =  product.node.handle                               
                                    title =  product.node.title 
                                    image =  product.node.images[0].localFile.childImageSharp.fluid 
                                    price =  priceNode.compareAtPrice ? priceNode.compareAtPrice.amount : priceNode.price.amount 
                                }

                                return(
                                    <Product 
                                        key = { handle }
                                        handle = { handle }                              
                                        title = { title }
                                        image = { image }
                                        price = { price }
                                    />
                                );

                            })
                        }

                    </ProductsContainer>
                </ShopContent>

            </ShopContainer>

        </Layout>
     );
}
 
export const query = graphql`
{
    allShopifyCollection {
        edges {
          node {
            shopifyId
            products {
              handle
              title
              images {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              variants {
                presentmentPrices {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                      }
                      price {
                        amount
                      }
                    }
                  }
                }
               
              }
            }
          }
        }
      }
      allShopifyProduct {
          edges {
            node {
              title
              handle
              variants {
                presentmentPrices {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      price {
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
                    fluid{
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
    }
`; 

export default SearchPage;