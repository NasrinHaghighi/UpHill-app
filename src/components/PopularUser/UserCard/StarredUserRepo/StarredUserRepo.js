import React, { useState, useEffect } from 'react'
import {RepoContainer,Top, Bottom,Title,Star} from './styles'


import {GiAlliedStar} from 'react-icons/gi'
import axios from 'axios';
const rootUrl='http:///api.github.com'




/*fetch user repos sort by number of stargazers_count desc*/
function StarredUserRepo({user}) {
const [userRepo, setUserRepo] =useState([])

useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(`${rootUrl}/users/${user}/repos?sort=stargazers_count&direction=desc`);
      
      
      setUserRepo(response.data[0]);
    };

    fetchRepo();
  }, [user]);
 //console.log(userRepo)


 
const {name, login, description:desc,stargazers_count:star } = userRepo
  return (
   <>
    <RepoContainer>
           <Top><Title>{login?.length<20 ? login: login?.substring(0,20)}</Title>
          <Star><GiAlliedStar /><span>{star}</span></Star> 
         </Top> 
          <Bottom>{desc?.length<50 ? desc : desc?.substring(0,50)}</Bottom>   
     </RepoContainer> 
     </>
  )
}

export default StarredUserRepo

