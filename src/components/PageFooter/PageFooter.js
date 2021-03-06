import React from 'react';
import styled from 'styled-components';
import Logo from '../PageBar/Logo';
import Icon from '../common/icon/Icon';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
    margin:30px -30px 0;
    padding:30px;
    width:calc(100% + 60px);
    color:white;
    background:#313131;

    @media screen and (min-width:600px){
        margin-right:0;
        margin-left:0;
        width:100%;
    }
    @media screen and (min-width:900px){
        padding: 40px 60px;
    }
`;
const FooterRow = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
`;
const FlexContainer = styled.div`
    margin-top:35px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    column-gap:25px;
      
    p{
        margin-top:10px;
        color:rgba(255,255,255,0.63);
        font-weight:700;
    }
    a{
        line-height:1.7;
        display:block;
        color:rgba(255,255,255,0.63);
        font-weight:700;
    }   
`;
const FooterRowHeading = styled.strong`
    margin-bottom:20px;
    display:block;
    font-size:16px;
`;
const FooterRowContent = styled.div`
        margin-top:20px;
        width:100%;
        max-width:300px;
        color:white;
        font-size:14px;
        line-height:1.5;

        @media screen and (min-width:800px){
            width:auto;
        }
`;
const PageFooter = () => {
    return (
        <StyledFooter>
            <FooterRow>
                <Logo/>
                <div>
                    <Icon type="facebook" />
                    <Icon type="whatsapp" />
                    <Icon type="twitter" />
                    <Icon type="linkedin" />
                </div>
            </FooterRow>
            <FlexContainer>
                <FooterRowContent>
                    <FooterRowHeading>Get in Touch with Us for the Best Quality Custom Prints & Supplies.</FooterRowHeading>
                    <p>
                        Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.
                    </p>
                </FooterRowContent>
                <FooterRowContent>
                    <FooterRowHeading>Quick links</FooterRowHeading>
                    <Link to="/">Know more about us</Link>
                    <Link to="/">Visit store</Link>
                    <Link to="/">Let's connect</Link>
                </FooterRowContent>
                <FooterRowContent>
                    <FooterRowHeading>Important Links</FooterRowHeading>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Shipping Details</Link>
                    <Link to="/">Terms & conditions</Link>
                </FooterRowContent>
            </FlexContainer>
        </StyledFooter>
      );
}
 
export default PageFooter;