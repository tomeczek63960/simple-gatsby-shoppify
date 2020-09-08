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
    
    ::before,
    ::after{
      content:"";
      position:absolute;
      left:0;
      width:100%;
      height:100%;
      background-color:white;
    }
    ::before{
      top:-10px;
    }
    ::after{
      bottom:-10px;
    }
  }


`;

const Bars = () => {
    return (<StyledBars><span></span></StyledBars>  );
}
 
export default Bars;