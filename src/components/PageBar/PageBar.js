import React from 'react';
import styled from 'styled-components';
import Bars from './Bars';
import Logo from './Logo';
import Navbar from './Navbar';
import ShoppingCart from './ShoppingCart';

const StyledPageBar = styled.div`
  background:white;
  position:relative;
  >nav{
    margin-left:auto;
    margin-right:auto;
    padding:0 30px;
    height:90px;
    max-width:1300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
`;
const Flex = styled.div`
  display:flex;
  align-items:center;
  column-gap:15px;
`;

const PageBar = () => {

  const navbarRef = React.useRef();

    return ( 
        <StyledPageBar>
          <nav>
            <Logo />

            <Flex>
              <ShoppingCart/>
              <Bars  navbarRef={ navbarRef }/>
              <Navbar ref={ navbarRef } />
            </Flex>
            
          </nav>
        </StyledPageBar>
     );
}
 
export default PageBar;