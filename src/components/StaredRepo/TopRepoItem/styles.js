import styled from 'styled-components';


export const Box=styled.div`
height: 230px;
width: 330px;
background-color: #ffffff;
text-align: center;
margin: 20px 20px;
padding: 40px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border-radius: 8px;
border-top: 6px solid ${props=>props.bg };
`


export const Title=styled.div`
margin-bottom: 24px;
color: ${props=>props.theme.fontColortitle};
font-size: 20px;
font-weight: 600;
`
export const Star=styled.div`
margin: 30px 0;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
color: ${props=>props.theme.blueText};
span{
    margin: 0 10px;
}
`
export const Desc=styled.div`
color: #2b2a2a;
`