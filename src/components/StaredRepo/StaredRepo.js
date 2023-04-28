import React, {useState, useEffect} from 'react'
import {StaredRepoContainer,Wrapper} from './styles'
import {MainTitle} from '../PopularUser/styles'
import axios from 'axios'
import TopRepoitem from './TopRepoItem/TopRepoitem'
import { lastYearDate } from '../../utiles'




function StaredRepo() {
  const [topRepositories, setTopRepositories] = useState([]);

  useEffect(() => {

   try {
    axios
      .get(`https://api.github.com/search/repositories?q=created:>=${lastYearDate}&sort=stargazers_count
      &order=desc`)
      .then((response) => {
         const repositories = response.data.items.slice(0, 4)
        setTopRepositories(repositories);
      });
  } catch (error) {
    console.error(error);
  }
  }, [])
  //console.log(topRepositories)

  
  return (
    <StaredRepoContainer>
           <MainTitle>Top Repository</MainTitle>
           <Wrapper>
{topRepositories.map((item, index)=>{
    return <TopRepoitem key={index}  item={item} index={index}/>
})}
           </Wrapper>
        
    </StaredRepoContainer>
  )
}

export default StaredRepo