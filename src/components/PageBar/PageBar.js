import React from 'react';
import styled from 'styled-components';
import Bars from './Bars';
import Logo from './Logo';

const StyledPageBar = styled.div`
  background:white;

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

const PageBar = () => {
    return ( 
        <StyledPageBar>
          <nav>
            <Logo />
            <Bars />
          </nav>
        </StyledPageBar>
     );
}
 
export default PageBar;