import React from 'react';
import styled from 'styled-components';
import Bars from './Bars';
import Logo from './Logo';

const StyledPageBar = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:90px;
`;

const PageBar = () => {
    return ( 
        <StyledPageBar>
            <Logo />
            <Bars />
        </StyledPageBar>
     );
}
 
export default PageBar;