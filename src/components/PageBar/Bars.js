import React from 'react'
import styled from 'styled-components';

const StyledBars = styled.button`
  width:50px;
  height:50px;
  border:none;
  position:relative;
  background:#ff5151;
  
  span{
    width:63%;
    height:4px;
    background-color:white;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    transition:0.7s;
    pointer-events:none;

    ::before,
    ::after{
      content:"";
      position:absolute;
      left:0;
      width:100%;
      height:100%;
      background-color:white;
      transition:0.7s;
    }
    ::before{
      top:-10px;
    }
    ::after{
      bottom:-10px;
    }
  }

  &.bars--active span{
    background-color:transparent;
    
    :before{
      top:0;
      transform: rotate( -45deg );
    }
    :after{
      bottom:0;
      transform: rotate( 45deg );
    }
  }

  @media screen and (min-width:800px){
    display:none;
  }

`;

const Bars = ({ navbarRef }) => {
  const handleToggleNavbar = (e) =>{
    if(window.innerWidth > 800) return;
    navbarRef.current.classList.toggle('navbar--active');
    e.target.classList.toggle('bars--active');
  }

    return (<StyledBars onClick = {handleToggleNavbar} ><span></span></StyledBars>  );
}
 
export default Bars;