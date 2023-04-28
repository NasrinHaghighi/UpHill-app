import styled from 'styled-components';


export const PopularUsersConatiner=styled.div`
margin: 50px auto;


`
export const Box=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: 50px 0px;

`

export const MainTitle=styled.div`
text-align: left;
color: ${props=>props.theme.fontColortitle};
font-size: 32px;
font-weight: 700;
margin-bottom: 30px;
width: 100%;
padding-left: 50px;
`
export const Message=styled.div`

text-align: center;
width: 100%;
font-size: 24px;
`