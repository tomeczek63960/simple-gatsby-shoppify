import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import CartContext from '../context/CartContext';
import Heading from '../components/common/Heading';
import CartProduct from '../components/CartPage/CartProduct';
import CartSummary from '../components/CartPage/CartSummary';

const CartPage = styled.div`
    padding:30px;
    margin:30px -30px 0;
    min-height:300px;   
    width: calc( 100% + 60px );
    background:white;

    color:#777;
    font-weight:600;
    font-family:Poppins;
    font-size:13px;

    @media screen and (min-width:600px){
        margin:30px 0 0;
        width:100%;
    }
`;
const SubHeading = styled(Heading)`
    margin-top:0;
    font-size:20px;
`;

const StyledCartProduct = styled.div`
    margin-top:35px;
    border:1px solid rgba(0,0,0,.1);
`;
const ProductDetails = styled.div`
    display:none;
    background:#fbfbfb;
    border-bottom:1px solid rgba(0,0,0,.1);

    justify-content:space-between;
    align-items:center;
    padding:15px;

    p{
        width:100%;
        max-width:100px;
        text-align:center;

        :nth-child(1){
            max-width:250px;
            margin-right:auto;
        }
    }
    @media screen and (min-width:750px){
        display:flex;
    }
`;

const Cart = () => {
    let totalAmout = 0;
    const { checkout } = React.useContext(CartContext);
    const products = checkout.lineItems;

    if(checkout){
        checkout.lineItems.forEach(item =>{
            totalAmout = totalAmout + item.quantity;
        });
    }

    return (
        <>
            <Layout>
                <CartPage>
                    
                    <SubHeading>Twój koszyk ({totalAmout})</SubHeading>

                    <StyledCartProduct >
                        <ProductDetails>
                            <p>Produkt</p>
                            <p>Cena</p>
                            <p>Ilość</p>
                            <p>Subtotal</p>
                        </ProductDetails>
                        {
                            products.map(product => 
                                <CartProduct product={product} key={product.id} />
                            )
                        }
                    </StyledCartProduct>

                    <CartSummary totalPrice = { checkout.totalPrice } checkout = { checkout } />

                </CartPage>
            </Layout>
        </>
      );
}
 
export default Cart;