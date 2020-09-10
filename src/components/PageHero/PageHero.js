import React from 'react';
import styled from 'styled-components';
import { graphql,Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const StyledImage = styled(Image)`
  width:calc(100% + 60px);
  margin-left:-30px;
  margin-right:-30px;
  height:300px;
  *{
    object-fit:cover!important
  }
  @media screen and (min-width:600px){
    width:100%;
    margin-left:0;
    margin-right:0;
  }
`;

const CollectionsWrapper = styled.article`
  display:flex;
  flex-wrap:wrap;
  
  @media screen and (min-width:600px){
    margin-top:50px;
  }
`;
const Collection = styled.section`
  min-width:${props => props.master ? "100%!important" : "100%"};
  order:${ props => props.master ? -1 : 0};
  height:300px;
  flex-grow:1;
  position:relative;

  @media screen and (min-width:600px){
    min-width:50%;
  }
  @media screen and (min-width:900px){
    min-width:33%;
  }

`;
const CollectionContent = styled(Link)`
    margin-left:-30px;
    margin-right:-30px;
    width:calc(100% + 60px);
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.4);
    text-decoration:none;

    @media screen and (min-width:600px){
      width:100%;
      margin-left:0;
      margin-right:0;
    }
    h3{
      font-size:40px;
      color:white;
      text-transform:capitalize;
    }
`;

const PageHero = () => {
    const data = useStaticQuery(graphql`
      query fetchShopifyCollections {
        allShopifyCollection {
          edges {
            node {
              title
              handle
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 300) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              id
            }
          }
        }
      }
    `);
    const { edges } = data.allShopifyCollection;

    return ( 
        <>
            <CollectionsWrapper>
                {edges.map(v => {
                    const {title, image, id, handle} = v.node;
                    if(title === 'polecane') return;
                    return(
                        <Collection key={id} master={ title === "wyprzedaż"} >
                        
                        <CollectionContent to={handle}>
                            <h3>{title}</h3>
                        </CollectionContent>
                        <StyledImage fluid = {image.localFile.childImageSharp.fluid} />
                        </Collection>
                    );
                })}
            </CollectionsWrapper>
        </>
     );
}
 
export default PageHero;