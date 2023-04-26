import React, { useState, useEffect } from 'react'
import {RepoContainer,Top, Bottom,Title,Star} from './styles'


import {GiAlliedStar} from 'react-icons/gi'
import axios from 'axios';
const rootUrl='http:///api.github.com'
const token = process.env.REACT_APP_GITHUB_TOKEN;




function StarredUserRepo({user}) {


/*fetch the repositories created by a user*/
const [userRepo, setUserRepo] =useState([])

useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(`https://api.github.com/users/${user}/repos?sort=stargazers_count&direction=desc`);
      
      // const filteredRepos = response.data.filter(repo => new Date(repo.created_at) > year);
      // const sortedRepos = filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  //console.log(response)
      setUserRepo(response.data[0]);
    };

    fetchRepo();
  }, [user]);
 //console.log(userRepo)


 
const {name, login, description:desc,stargazers_count:star }
=userRepo
  return (
   <>
    <RepoContainer>
           <Top><Title>{name}</Title>
          <Star><GiAlliedStar /><span>{star}</span></Star> 
         </Top> 
          <Bottom>{desc?.length<100 ? desc : desc?.substring(0,100)}</Bottom>   
     </RepoContainer> 
     </>
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