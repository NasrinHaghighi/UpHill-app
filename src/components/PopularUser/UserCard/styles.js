import styled from "styled-components";

export const UserCardContainer =styled.div`
text-align: center;
border: 2px solid gainsboro;
border-radius: 8px;
width: 350px;
margin: 0 30px;
background-color: ${props=>props.theme.cardBg};

`



export const Top =styled.div`


position: relative;

`
export const Main =styled.div`
border-top-left-radius: 8px;
border-top-right-radius: 8px;
background-image: url("https://amymhaddad.s3.amazonaws.com/oriental-tiles.png");
background-repeat: no-repeat, no-repeat;
height: 75px;
background-size: 100%;
background-position: cover;
filter: blur(2px);
`
export const ImageDiv =styled.div`
width: 80px;
height: 80px;
position: absolute;
background-color: red;
filter: blur(0px);
border-radius: 50%;
left: 40%;
top: 50%;

`

export const Middel =styled.div`
margin: 50px;


`
export const Name =styled.div`
font-weight: 700;
color:  ${props=>props.theme.fontColortitle};
`
export const Email =styled.div`
color:  ${props=>props.theme.fontColor};
`
export const Followers =styled.div`

margin: 20px 0;
display: flex;
justify-content: center;
align-items: center;
color:  ${props=>props.theme.fontColortitle};
border-bottom: 1px solid ${props=>props.theme.lightGray};
`
export const FollowersNum =styled.span`
margin: 0 6px 0 15px;

`
export const Tag =styled.span`
color:  ${props=>props.theme.lightGray};
`
export const Bottom =styled.div`

`