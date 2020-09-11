import React from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';

const CartProductItem = styled.div`
    padding:15px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    column-gap:20px;
    border-bottom:1px solid rgba(0,0,0,.1);
    line-height:1.1;

    @media screen and (min-width:750px){
        border:none;
        max-width: ${props => props.grow ? 'auto' : "100px"};
        text-align:center;
    }
`;
const RemoveItem = styled.div`
    margin-left:auto;
    width:25px;
    height:25px;
    border:1px solid rgba(0,0,0,.2);
    border-radius:50%;
    color:rgba(0,0,0,.3);
    text-align:center;
    line-height:23px;
    cursor:pointer;

    @media screen and (min-width:750px){
        margin-right:auto;
    }
`;
const ProductRow = styled.div`
    :last-child>div:last-child{
        border:none;
    }
    
    @media screen and (min-width:750px){
        display:flex;
        justify-content:space-between;
        align-items:center;

        :not(:last-child){
            border-bottom:1px solid rgba(0,0,0,.1);
        }
        td:first-child{
            max-width:100px;
        }

        .sm-display-none{
            display:none;
        }
    }
`;

const CartProduct = ({ product }) => {
    const { removeLineItem } = React.useContext(CartContext);

    const handleRemoveCartProduct = () =>{
        removeLineItem(product.id);
    }

    return ( 
        <ProductRow>
            <CartProductItem>
                <RemoveItem onClick = { handleRemoveCartProduct } >x</RemoveItem>
            </CartProductItem>
            <CartProductItem>
                <img src={product.variant.image.src} alt="kubek" style={{ width:"60px" }}/>
            </CartProductItem>
            <CartProductItem grow>
                <p className="sm-display-none">Produkt:</p>
                <p>{product.title}</p>
            </CartProductItem>
            <CartProductItem>
                <p className="sm-display-none" >Cena:</p>
                <p>{product.variant.price}zł</p>
            </CartProductItem>
            <CartProductItem>
                <p className="sm-display-none" >Ilość:</p>
                <p>{product.quantity}</p>
            </CartProductItem>
            <CartProductItem>
                <p className="sm-display-none" >Subtotal:</p>
                <p>{(product.variant.price * product.quantity).toFixed(2)}zł</p>
            </CartProductItem>
         </ProductRow>
     );
}
 
export default CartProduct;