import React, { useState, useEffect } from 'react'
import {RepoContainer,Top, Bottom,Title,Star} from './styles'


import {GiAlliedStar} from 'react-icons/gi'
import axios from 'axios';
const rootUrl='http:///api.github.com'
const token = process.env.REACT_APP_GITHUB_TOKEN;




function StarredUserRepo({login}) {
const year = new Date().getFullYear() - 1;

/*fetch the repositories created by a user*/
const [userRepo, setUserRepo] =useState([])

useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=100`);
      
      const filteredRepos = response.data.filter(repo => new Date(repo.created_at) > year);
      const sortedRepos = filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  
      setUserRepo(sortedRepos);
    };

    fetchUser();
  }, [login]);

  const {name, stargazers_count:star, description:desc} =userRepo[0]
  
  return (
    <RepoContainer>
          <Top><Title>{name? name: ''}</Title>
         <Star><GiAlliedStar /><span>{star}</span></Star> 
        </Top> 
         <Bottom>{desc ? desc : 'no descriotion'}</Bottom>   
    </RepoContainer>
  )
}

export default StarredUserRepo



        //const repositories = await response.json();
       // console.log(response)
        // let filteredRepositories = repositories?.filter(repo => new Date(repo.created_at).getFullYear() === year);
        // setUserRepo(filteredRepositories)


        // async function fetchUserRepositories(login) {
        
        //     const response = await fetch(`http://api.github.com/users/${login}/repos?per_page=100`,{
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //           }
        //     });
        //     const repositories = await response.json();
        //     console.log(repositories)
    
        // }