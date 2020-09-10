import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/common/products/Product';
import ProductsContainer from '../components/common/products/ProductsContainer';
import Heading from '../components/common/Heading';

const ShopContainer = styled.article`
    margin-top:30px;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;

    @media screen and (min-width:600px){
        margin-top:50px;
    }
    @media screen and (min-width:900px){
        flex-wrap:nowrap;
    }
`;

const SearchBar = styled.aside`
    margin:20px -30px 0;
    width:calc(100% + 60px);
    background:white;
    height:400px;

    @media screen and (min-width:600px){
        margin:20px 0 0;
        width:100%;
    }
    @media screen and (min-width:900px){
        margin:0 40px 0 0;
        width:26%;
        flex-shrink:0;
    }
`;

const ShopContent = styled.section`
    padding:0 20px 30px;
    margin:0 -30px;
    width:calc(100% + 60px);
    min-height:600px;
    background:white;
    order:-1;

    @media screen and (min-width:600px){
        margin:0;
        width:100%;
    }
    @media screen and (min-width:900px){
        margin:0;
        width:70%;
        order:0;
    }
`;

const CollectionPageTemplate = ({ data, pageContext }) => {

    return  ( 
        <Layout>
            <ShopContainer>
                <SearchBar> for search</SearchBar>

                <ShopContent>
                    <Heading>{pageContext.title}</Heading>
                    <ProductsContainer>

                        { data.shopifyCollection.products.map( product =>{
                            const priceNode = product.variants[0].presentmentPrices.edges[0].node;
    
                            return(
                                <Product 
                                    handle = { product.handle }                              
                                    title = { product.title }
                                    image = { product.images[0].localFile.childImageSharp.fluid }
                                    price = { priceNode.compareAtPrice ? priceNode.compareAtPrice.amount : priceNode.price.amount }
                                />
                            );

                        })}

                    </ProductsContainer>
                </ShopContent>

            </ShopContainer>
        </Layout>
     );
}

export const query = graphql`
query fetchCollectionProducts($shopifyId: String!) {
    shopifyCollection(shopifyId: {eq: $shopifyId}) {
        products {
            handle
            shopifyId
            title
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
`;
export default CollectionPageTemplate;