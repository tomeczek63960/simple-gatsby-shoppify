import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const StyledProduct = styled(Link)`
  margin-left:auto;
  margin-right:auto;
  max-width:200px;
  flex-basis:125px;
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

  @media screen and (min-width:600px){
    flex-basis:140px;
  }
`;

const ProductContent = styled.div`
  padding:15px;
  text-align:center;
`;

const Product = ({ handle, image, title, price}) => {
    return ( 
        <>  
          <StyledProduct key={handle} to={ `/${handle}`}>
              <Image fluid = {image}/>
              <ProductContent>
                  <h5>{title}</h5>
                  <p>{price} zł</p>
              </ProductContent>
          </StyledProduct>
        </>
     );
}
 
export default Product;