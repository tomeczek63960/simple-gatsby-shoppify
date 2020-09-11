import React from 'react';
import styled from 'styled-components';

const StyledCartSummary = styled.table`
    margin:30px 0 0 auto;
    width:100%;
    max-width:350px;
    display:flex;
    flex-direction:column;
    border:1px solid rgba(0,0,0,.1);
    color:#777;
    font-size:15px;
    
    thead{
        width:100%;
        display:block;
        background:#fbfbfb;
        border-bottom:1px solid rgba(0,0,0,.1);
        text-transform:capitalize;
    }
    tr{
        padding:15px;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    tbody tr:first-child{
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
`;
const CheckoutBtnWrapper = styled.td`
    width:100%;
`;
const CheckoutBtn = styled.button`
    width:100%;
    height:40px;
    background:#ff5151;
    border:none;
    color:white;
    font-size:15px;
    font-weight:bold;
    font-family:Poppins;
    letter-spacing:1.5px;
    cursor:pointer;
`;

const CartSummary = ({ totalPrice, checkout }) => {

    const handlePaymentCheckout = ( ) =>{
        window.location.href = checkout.webUrl;
    }
    return ( 
        <>
            <StyledCartSummary>
                <thead>
                    <tr>
                        <td> Basket totals</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total:</td>
                        <td>{totalPrice}zł</td>
                    </tr>

                    <tr>
                        <CheckoutBtnWrapper>
                            {checkout && checkout.webUrl &&
                                <CheckoutBtn
                                    onClick= { handlePaymentCheckout }
                                >Zamów</CheckoutBtn>
                            }
                        </CheckoutBtnWrapper>
                    </tr>
                </tbody>
            </StyledCartSummary>
        </>
     );
}
 
export default CartSummary;