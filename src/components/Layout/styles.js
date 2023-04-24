import styled from "styled-components";


export const MainContainer =styled.div`

background-color:${props=>props.theme.mainBG} ;
color:${props=>props.theme.fontColor};

`
export const InnerContainer =styled.div`
margin: 0 250px;
min-height: 100vh;
    display: flex;
    flex-direction: column;


`
export const Main =styled.div`
 margin-top: 100px;
flex: 1;


`