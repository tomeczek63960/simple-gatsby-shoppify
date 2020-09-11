import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-family:Montserrat, sans-serif;
        background:#f5f5f5;
    }
    a{
        text-decoration:none;
    }
    button,
    input,
    textarea{
        outline:none
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    input[type=checkbox]{
        display:none;
    }
    ul{
        list-style:none;
    }
`;

export default GlobalStyle;