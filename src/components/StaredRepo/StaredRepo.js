import React from 'react'
import {StaredRepoContainer,Wrapper} from './styles'
import {MainTitle} from '../PopularUser/styles'

import TopRepoitem from './TopRepoItem/TopRepoitem'



const arr=[1,2,3,4]


function StaredRepo() {
  return (
    <StaredRepoContainer>
           <MainTitle>Top Repository</MainTitle>
           <Wrapper>
{arr.map((item, index)=>{
    return <TopRepoitem key={index}
    item={item} index={index}/>
})}
           </Wrapper>
        
    </StaredRepoContainer>
  )
}

export default StaredRepo