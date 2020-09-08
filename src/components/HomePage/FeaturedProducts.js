import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const ProductsContainer = styled.section`
  margin-top:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  column-gap:20px;

`;
const Product = styled(Link)`
  margin-left:auto;
  margin-right:auto;
  max-width:250px;
  flex-basis:200px;
  flex-grow:1;
  display:block;

  h5{
    color:black;
  }
  p{
    margin-top:10px;
    color:#ff5151;
    font-size:23px;
    font-weight:600;
  }
`;

const ProductContent = styled.div`
  padding:15px;
  text-align:center;
`;
const Heading = styled.h3`
  margin-top:50px;
  font-size:33px;
  color:#415161;
  font-family:Poppins;
  font-weight:700;
  text-transform:capitalize;
`;

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
                {featuredProducts.map(product =>{
                const {title, handle, images, variants} = product;
                return(
                    <Product key={handle} to={handle}>
                    <Image fluid = {images[0].localFile.childImageSharp.fluid}/>
                    <ProductContent>
                        <h5>{title}</h5>
                        <p>{variants[0].price} zł</p>
                    </ProductContent>
                    </Product>
                );
                })}
            </ProductsContainer>
        </>
     );
}
 
export default FeaturedProducts;