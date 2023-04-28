import styled from "styled-components";


export const RepoContainer=styled.div`
border-radius: 10px;
padding: 14px 10px;
border: 2px solid ${props=>props.theme.border};
border-left: 6px solid ${props=>props.theme.border};
`

export const Top=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color:${props=>props.theme.blueText};
font-weight: 600;
margin-bottom: 10px;

`
export const Bottom=styled.div`
text-align: left;

`
export const Title=styled.div`


`
export const Star=styled.div`
display: flex;
justify-content: center;
align-items: center;
span{
    margin-left: 7px;
}
`