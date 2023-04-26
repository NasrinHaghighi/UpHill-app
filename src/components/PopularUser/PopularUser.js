import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import {PopularUsersConatiner, MainTitle, Box} from './styles'
import UserCard from './UserCard/UserCard'
const rootUrl='http:///api.github.com'
const token = process.env.REACT_APP_GITHUB_TOKEN;


function PopularUser() {
    const [users, setUsers] =useState([])
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              "https://api.github.com/search/users?q=created:2023-03-01..2023-03-31&sort=followers&order=desc&per_page=3"
            );
          //console.log(response.data.item)
           //setUsers(response.data.item)
             const userLogins = response.data.items.map((item) => item.login);
             //console.log(userLogins)['eddyonl', 'tnarrj', 'alexica32']
            setUsers(userLogins)
           } catch (error) {
            console.error(error);
          }
        };
      fetchUsers();
      }, []);

     console.log(users)
      return (

        <PopularUsersConatiner>
           <MainTitle>Terednding Users</MainTitle>
           <Box>
      {users?.map((user)=>{
    return <UserCard key={user?.id} user={user}/>
        })}  
        </Box>
        </PopularUsersConatiner>
       
      )
    
}

export default PopularUser


  //  const userPromises = userLogins.map((login) =>
            //    axios.get(`https://api.github.com/users/${login}`)
            //  );
            //console.log(userPromises)[Promise, Promise, Promise]
            //  const userResponses = await Promise.all(userPromises)
            //  .then((responses) => {
            //   console.log("All requests succeeded:", responses);
            //   return responses;
            // })
            // .catch((error) => {
            //   console.error("One or more requests failed:", error);
            //   throw error;
            // });
            //  const fetchedUsers = userResponses.map((response) => ({
            //    id:response.data.id,
            //    profileUrl:response.data.html_url,
            //    avatar:response.data.avatar_url,
            //    login: response.data.login,
            //    followers: response.data.followers,
            //    created_at: response.data.created_at,
            //    starred:response.data.starred_url


            //  }));
            // setUsers(fetchedUsers);



 
        