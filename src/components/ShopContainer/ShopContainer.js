import styled from 'styled-components';

export const ShopContainer = styled.article`
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

export const ShopContent = styled.div`
    padding:0 20px 30px;
    margin:0 -30px;
    width:calc(100% + 60px);
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