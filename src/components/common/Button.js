import styled from 'styled-components';

const Button = styled.button`
    padding:0 25px;
    height:43px;
    background:#ff5151;
    border:1px solid #ff5151;
    border-radius:10px;
    color:white;
    font-weight:bold;
    line-height:41px;
    text-transform:uppercase;

    :disabled{
        background:#777;
        cursor:initial;
        border:none;
    }
`;

export default Button;