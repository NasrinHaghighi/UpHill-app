import styled from 'styled-components';


export const HeaderContainer=styled.div`
background-color: ${props=>props.theme.fontColortitle};
padding: 15px 250px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const InputContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
width: 450px;
border-radius: 30px;
background-color: #ffff;
height: 30px;
`
export const Input=styled.input`
width: 400px;
outline: none;
border: none;

background-color:transparent;


`
export const Icon=styled.div`
color: #000;
padding-left: 20px;

`