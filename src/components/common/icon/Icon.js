import React from 'react';
import styled from 'styled-components';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import whatsapp from './whatsapp.svg';
import linkedinIcon from './linkedin.svg';

const StyledIcon = styled.a`
    margin-left:10px;
    width:30px;
    height:30px;
    display:inline-block;
    
    border:2px solid white;
    border-radius:50%;

    background-size:60%;
    background-position:center;
    background-color:transparent;
    background-image: url( ${ props => props.iconType } );
    background-repeat:no-repeat;
`;

const Icon = ({type}) => {
    const iconType = {
        facebook: { icon: facebookIcon, url:"https://www.facebook.com/" },
        twitter: { icon: twitterIcon, url:"https://www.twitter.com/" },
        whatsapp: { icon: whatsapp, url:"https://www.whatsapp.com/" },
        linkedin: { icon: linkedinIcon, url:"https://www.linkedin.com/" }
    }

    return ( <StyledIcon iconType={iconType[type].icon} href={iconType[type].url} target="blank"/>  );
}
 
export default Icon;