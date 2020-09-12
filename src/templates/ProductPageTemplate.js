import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';

import ProductsContainer from '../components/common/products/ProductsContainer';
import Product from '../components/common/products/Product';
import Heading from '../components/common/Heading';
import Paragraph from '../components/common/Paragraph';
import Button from '../components/common/Button';
import CartContext from '../context/CartContext';

const  ProductPage = styled.section`
    margin:30px -30px;
    padding:30px;
    width:calc(100% + 60px);
    background:white;
    
    @media screen and (min-width:600px){
        margin:50px 0;
        width:100%;
    }
`;
const ImageWrapper = styled.div`
    max-width:480px;

    @media screen and (min-width:800px){
      min-width:350px;
      margin-right:20px;
      width:50%;
      flex-shrink:0;
      flex-grow:1;
    }
`;
const ProductHeading = styled.h4`
    color:#415161;
    font-family:Poppins, sans-serif;
    font-size:28px;
    font-weight:500;
    line-height:1;
`;

const PriceWrapper = styled.div`
  margin-top:25px;
  display:flex;
  column-gap:15px;
`;
const StyledPrice = styled.span`
    display:block;
    color:#ff5151;
    font-family:Poppins;
    font-weight:bold;
    font-size:25px;
`;
const StyledPriceDiscount = styled.span`
    /* display:block; */
    color:#777;
    font-family:Poppins;
    font-weight:bold;
    font-size:23px;
    text-decoration:line-through;

`;

const Input = styled.input`
    padding:0 5px;
    height:43px;
    width:43px;
    display:block;
    border:1px solid #ddd;
    border-radius:10px;
    text-align:center;
`;
const Form = styled.form`
    margin-top:30px;
    padding-bottom:25px;
    display:flex;
    flex-wrap:wrap;
    row-gap:15px;
    column-gap:5px;
    border-bottom:1px solid #ddd;
`;
const Note = styled.p`
  margin-top:25px;
  font-size:14px;

  a{
    color:#ff5151;
  }
`;

const LinkWrapper = styled.p`
  margin:20px 0;
  font-size:14px;
  color:#777;
  line-height:2;
  a{
    color:#777777;
    text-transform:capitalize;
  }

  @media screen and (min-width:800px){
    margin-top:0;
  }
`;
const ProductFlexWrapper = styled.div`  
  @media screen and (min-width:800px){
    display:flex;
    justify-content:space-between;
  }
`;
const VariantSelect = styled.select`
  width:100%;
  max-width:100px;
  border:1px solid rgba(0,0,0,.2);
  color:#777;
  font-family:Poppins;
  font-size:16px;
  letter-spacing:1px;
  outline:none;
`;

const ProductPageTemplate = ( { data, pageContext } ) => {
    const { handle, title, variants, description, productType } = data.shopifyProduct;
    const { products } = data.shopifyCollection; 
    const priceNode = variants[0].presentmentPrices.edges[0].node;
    const [ activeVariant, setActiveVariant ] = useState(variants[0].shopifyId);
    const [ amount, setAmount ] = useState(1);
    const { updateLineItem, removeLineItem } = React.useContext(CartContext);

    const handleAmountChange = (e) =>{
      const value = e.target.value;

      if(value > 25) return setAmount(25);
      return setAmount(value);
    }
    const handleAmountChangeBlur = (e) =>{
      if(e.target.value < 1) return setAmount(1)
    }

    const handleSubmitForm = e =>{
      e.preventDefault();
      updateLineItem({ variantId:activeVariant, quantity: parseInt(amount)});
    }
    
    return ( 
        <Layout>    
            <ProductPage>
                <ProductFlexWrapper>
                  
                  <ImageWrapper>
                      <Image fluid = { data.shopifyProduct.images[0].localFile.childImageSharp.fluid} />
                  </ImageWrapper>
                  
                  <div>

                    <LinkWrapper><Link to='/'>Sklep</Link> / <Link to={`/${productType}`} >{productType}</Link> / <Link to = {`/${handle}`}>{title}</Link></LinkWrapper>
                    <ProductHeading>{title}</ProductHeading>

                    <PriceWrapper>
                      { 
                        priceNode.compareAtPrice ?
                        <>
                          <StyledPriceDiscount>{ priceNode.price.amount}zł</StyledPriceDiscount>
                          <StyledPrice>{ priceNode.compareAtPrice.amount }zł</StyledPrice>
                        </>
                          :
                          <StyledPrice>{ priceNode.price.amount }zł</StyledPrice>

                      }
                    </PriceWrapper>

                    <Paragraph> { description } </Paragraph>

                    <Form onSubmit = { handleSubmitForm }>
                      {
                        variants[1] && 
                        <VariantSelect name = 'variant' onChange={ e => setActiveVariant( e.target.value ) }>
                            {variants.map(variant => <option value={variant.shopifyId} key={variant.shopifyId}>{variant.title}</option>)}
                        </VariantSelect>
                      }
                        <Input type="number" min='1' value={ amount } onChange={ handleAmountChange } onBlur={ handleAmountChangeBlur} />
                        <Button>Dodaj do koszyka</Button>
                    </Form>

                    <Note>Kategoria: <Link to = {`/${productType}`} >{productType}</Link></Note>
                  
                  </div>

                </ProductFlexWrapper>

                <Heading>Powiązane produkty</Heading>
                <ProductsContainer>
                  { 
                    products.map(product => {
                    const priceNode = product.variants[0].presentmentPrices.edges[0].node;
                    
                    return(
                    <Product 
                        key = { product.handle }
                        title = { product.title }
                        handle = { product.handle }
                        price = { priceNode.compareAtPrice ? priceNode.compareAtPrice.amount : priceNode.price.amount }
                        image = { product.images[0].localFile.childImageSharp.fluid }
                    />
                    )
                    }) 
                  }
                </ProductsContainer>
            </ProductPage>

        </Layout>
     );
}

export const query = graphql`
  query fetchShopifyProduct( $shopifyId: String!, $productType: String! ) {
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
      title
      handle
      description
      productType
      variants {
        shopifyId
        title
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

    shopifyCollection(title: {eq: $productType }) {
      products {
        title
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
        handle
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

export default ProductPageTemplate;