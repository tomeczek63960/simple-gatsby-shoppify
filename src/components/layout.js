import React from "react"
import styled from 'styled-components';
import PageBar from './PageBar/PageBar';
import GlobalStyle from './GlobalStyle';
import PageFooter from './PageFooter/PageFooter';

const StyledLayout = styled.div`
  max-width:1300px;
  margin-left:auto;
  margin-right:auto;
  padding:0 30px;
`;

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle/>
    <PageBar />
    <StyledLayout>
        
        <main>{children}</main>
        <PageFooter />
    </StyledLayout>
    </>
  )
}


export default Layout
