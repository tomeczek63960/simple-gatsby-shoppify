import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';

const StyledAmount = styled.span`
    padding:5px 10px ;
    display:block;
    position:absolute;
    bottom:60%;
    left:50%;
    background:red;
    color:white;
    text-align:center;
    border-radius:50%;
    font-size:14px;
    font-weight:bold;
    font-family:Poppins;
`;
const CartWrapper = styled(Link)`
    position:relative;
    display:block;
    color:black;
`;

const ShoppingCart = () => {

    const {checkout} = React.useContext(CartContext);
    let totalAmout = 0;

    if(checkout){
        checkout.lineItems.forEach(item =>{
            totalAmout = totalAmout + item.quantity;
        });
    }

    return ( 
        <CartWrapper to='/cart' >
            <FaShoppingCart size='40px' />
            <StyledAmount>{totalAmout}</StyledAmount>
        </CartWrapper>
     );
}
 
export default ShoppingCart;