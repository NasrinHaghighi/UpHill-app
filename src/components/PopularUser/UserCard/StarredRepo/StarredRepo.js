import React, { useState, useEffect } from 'react'
import {RepoContainer,Top, Bottom,Title,Star} from './styles'


import {GiAlliedStar} from 'react-icons/gi'
import axios from 'axios';
const rootUrl='http:///api.github.com'
const token = process.env.REACT_APP_GITHUB_TOKEN;




function StarredRepo({login}) {
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

  //const {name, stargazers_count:star, description:desc} =userRepo[0]
  //console.log(name)
  return (
    <RepoContainer>
        <Top><Title>{userRepo[0]?.name?.length<15 ?userRepo[0]?.name: userRepo[0]?.name.substring(0,15)}</Title>
         <Star><GiAlliedStar /><span>{userRepo[0]?.star
}</span></Star> 
        </Top>
        <Bottom>{userRepo[0]?.description?.length<80 ? userRepo[0]?.description : userRepo[0]?.description.substring(0, 80)}</Bottom> 
    </RepoContainer>
  )
}

export default StarredRepo



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