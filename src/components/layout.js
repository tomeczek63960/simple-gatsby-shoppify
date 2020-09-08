import React from "react"
import styled from 'styled-components';
import PageBar from './PageBar/PageBar';

const StyledLayout = styled.div`
  max-width:1300px;
  margin-left:auto;
  margin-right:auto;
  padding:0 30px;
`;

const Layout = ({ children }) => {

  return (
    <StyledLayout>
        <PageBar />
        
        <main>{children}</main>
        <footer>
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </StyledLayout>
  )
}


export default Layout
