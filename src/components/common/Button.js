import styled from 'styled-components';

const Button = styled.button`
    padding:0 25px;
    height:43px;
    flex-basis:200px;
    flex-grow:1;
    max-width:400px;
    background:#ff5151;
    border:1px solid #ff5151;
    color:white;
    font-weight:bold;
    line-height:41px;
    text-transform:uppercase;
    cursor:pointer;

    :disabled{
        background:#777;
        cursor:initial;
        border:none;
    }
`;

export default Button;