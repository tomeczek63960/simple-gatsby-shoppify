import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const StyledNavbar = styled.ul`
    display:none;
    padding:10px 0;
    width:100%;
    position:absolute;
    top:100%;
    left:0;
    z-index:10;
    background:#f9f9f9;

    @media screen and (max-width:799px){
        &.navbar--active{
            display:block;
        }
    }

    @media screen and (min-width:800px){
        display:flex;
        background:transparent;
        padding:0;
        position:initial;
    }

`;

const NavbarItem = styled.li`
    padding:5px 30px;
    display:block;  
    text-transform:capitalize;
    font-size:14px;
    font-family:Poppins;

    a{
        width:100%;
        height:100%;
        display:block;
        color:#415161;
        line-height:2;
    }

    @media screen and (min-width:800px){
        padding:0;
        margin-right:15px;
        font-size:15px;
    }
    @media screen and (min-width:1000px){
        margin-right:25px;
        font-size:16px;
    }
`;

const Navbar = React.forwardRef((props, ref) => {

    const data = useStaticQuery(graphql`
    {
        allShopifyCollection {
          edges {
            node {
              handle
              title
              shopifyId
            }
          }
        }
      }
      
    `);

    return ( 
        <StyledNavbar ref = { ref } >  
            <NavbarItem> <Link to="/">Home</Link> </NavbarItem>
            {
                data.allShopifyCollection.edges.map(edge =>{
                    const { handle, title, shopifyId } = edge.node;

                    return(
                        <NavbarItem key={ shopifyId } ><Link to={`/${handle}` } >{ title }</Link></NavbarItem>
                    );
                })
            }
        </StyledNavbar>
     );
});
 
export default Navbar;