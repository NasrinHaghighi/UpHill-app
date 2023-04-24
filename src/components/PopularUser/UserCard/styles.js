import styled from "styled-components";

import { Link } from "react-router-dom";
/**change the opacity by hover on parent */
export const HoverBox =styled.div`
opacity: 0;
position: absolute;
font-weight: 700;
color: #fff !important;
top: 0;
left: 0;
width: 101%;
height: 101%;
z-index:5;
background-color: ${props=>props.theme.hoverBg};
border-radius:  8px;
transition: all 0.3s ease-in-out;
`


export const UserCardContainer =styled.div`
text-align: center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border-radius: 8px;
width: 350px;
margin: 0 30px;
background-color: ${props=>props.theme.cardBg};
position: relative;
&:hover {
    ${HoverBox} {
     opacity:1;
    }
}
`
export const Box =styled.div`
height: 100%;
`



export const Top =styled.div`
position: relative;

`
export const Main =styled.div`
border-top-left-radius: 8px;
border-top-right-radius: 8px;
background: url(${props => props.bg});
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
filter: blur(0px);
border-radius: 50%;
left: 40%;
top:${props=>props.hover ? '20%' : '50%'};
background: url(${props => props.bg});
background-position: center center;
background-size: 80px 80px;
`

export const Middel =styled.div`
margin: 50px;
color: '${props=>props.theme.fontColortitle}';

`
export const Name =styled.div`
font-weight: 700;


`
export const Email =styled.div`
/* color:  ${props=>props.theme.fontColor}; */
`
export const Followers =styled.div`

margin: 20px 0;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
/* color:  ${props=>props.theme.fontColortitle}; */

border-bottom:  ${props=>props.hover ? 'none': '1px solid ${props=>props.theme.lightGray}'};
`
export const FollowersNum =styled.span`
margin: 0 6px 0 15px;

`
export const Tag =styled.span`
color:  ${props=>props.theme.lightGray};
`


export const Info=styled.div`
position: absolute;
top: 50%;
width: 100%;
color: #fff;
`
export const Open=styled.button`
border: 1px solid #fff;
border-radius: 20px;
width: 40%;
background-color: transparent;
padding: 15px ;
color: #fff;

`
export const StyledLink=styled(Link)`
text-decoration: none;
color: #fff;

`



