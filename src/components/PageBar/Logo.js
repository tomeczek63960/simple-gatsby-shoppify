import React from 'react';
import { useStaticQuery, Link } from "gatsby";
import styled from 'styled-components';
import Image from 'gatsby-image';

const StyledLogo = styled(Link)`
  display:block;
  width:140px;
  height:50px;
`;

const Logo = () => {
    const data  = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  
  `);
  
    return <StyledLogo to="/"> <Image fluid={data.allImageSharp.edges[0].node.fluid} /> </StyledLogo>;
}
 
export default Logo;