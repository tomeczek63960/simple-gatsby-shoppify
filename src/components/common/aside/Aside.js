import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from './search.svg';
import { useStaticQuery, graphql} from 'gatsby';

const SearchBar = styled.aside`
    margin:20px -30px 0;
    padding:30px 25px;
    width:calc(100% + 60px);
    background:white;

    @media screen and (min-width:600px){
        margin:20px 0 0;
        width:100%;
    }
    @media screen and (min-width:900px){
        margin:0 40px 0 0;
        width:26%;
        flex-shrink:0;
    }
`;
const SearchInputWrapper = styled.div`
    width:100%;
    height:45px;
    display:flex;
    position:relative;

    input{
        padding:0 15px;
        height:100%;
        width:calc(100% - 45px);
        display:block;
        border:2px solid #ddd;
        border-right:none;
        color:#777;
        font-size:15px;
        font-weight:bold;
    }

    button{
        width:45px;
        height:100%;
        border:none;
        background-color:#ff5151;
        background-image: url(${props => props.icon }) ;
        background-size:40%;
        background-repeat:no-repeat;
        background-position:center;
        text-indent:-99999px;
        cursor: pointer;
    }
`;

const SubHeading = styled.p`
    margin:25px 0 15px;
    font-size:18px;
    font-family:Poppins;
    font-weight:bold;
    color:#777;
`;
const Checkbox = styled.span`
    margin-right:5px;
    width:15px;
    height:15px;
    display:inline-block;
    position:relative;
    border:3px solid #777;
    vertical-align:middle;
    cursor:pointer;

    ::after{
        content:"";
        width:6px;
        height:6px;
        display:block;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        background:transparent;
    }
`;
const CheckboxWrapper = styled.div`
    margin-top:5px;
    color:#666;
    font-size:15px;
    font-family:Poppins;
    input[type=checkbox]:checked + label > span::after{
        background:#777;
    }
`;  
const Btn = styled.button`
    display:block;
    margin-left:auto;
    margin-top:20px;
    padding:7px 25px;
    background:#ff5151;
    border:none;
    color:white;
    font-family:Poppins;
    font-weight:bold;
    font-size:15px;
    cursor: pointer;
`;

const Aside = (props) => {
    const [ searchValue, setSearchValue ] = useState("");

    const data = useStaticQuery(graphql`
    {
        allShopifyCollection {
            nodes {
                title
                handle
                shopifyId
            }
        }
    }
      
    `);
  
    const handleSearch = ( e, type ) =>{
        e.preventDefault();
        let values;

        if(type === 'search'){
            values = searchValue;

        }else{

            const checkedCheckboxs = e.target.querySelectorAll('input[type=checkbox]:checked');
            values = [];
            checkedCheckboxs.forEach(v => values.push(v.value));
            e.target.reset();
        }

        props.navigate('/search', { state: { values, type }});
    }
    return (
        <>
            <SearchBar>

                <form onSubmit = {e => handleSearch(e, 'search')}>
                    <SubHeading>Wyszukaj</SubHeading>
                    <SearchInputWrapper icon = { searchIcon }>
                        <input type="text" placeholder="Nazwa" value={ searchValue } onChange={e => setSearchValue(e.target.value)}/>
                        <button>szukaj</button>
                    </SearchInputWrapper>
                </form>

                <form onSubmit = { e => handleSearch(e, 'categories') } >
                    <SubHeading>Kategorie</SubHeading>

                    {data.allShopifyCollection.nodes.map(node =>
                        <CheckboxWrapper key = { node.handle } >
                            <input type="checkbox" name='kategoria' id={ node.handle } value={ node.shopifyId } />
                            <label htmlFor = { node.handle } ><Checkbox />{ node.title }</label>
                        </CheckboxWrapper>
                    )}

                    <Btn>Szukaj</Btn>

                </form>

            </SearchBar>
        </>
      );
}
 
export default Aside;