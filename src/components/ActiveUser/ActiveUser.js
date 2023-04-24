import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {PopularUsersConatiner, MainTitle} from '../PopularUser/styles'
import UserCard from '../PopularUser/UserCard/UserCard'


const token = process.env.REACT_APP_GITHUB_TOKEN;


function ActiveUser() {
    const [users, setUsers] = useState([]);

 
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=created:>${getLastMonth()}&sort=repositories&order=desc`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );

            const userLogins = response.data.items.map((item) => item.login);
            const userPromises = userLogins.map((login) =>
              axios.get(`https://api.github.com/users/${login}`,{  headers: {
                Authorization: `Bearer ${token}`
              }})
            );
            const userResponses = await Promise.all(userPromises);
            //console.log(userResponses)
            const fetchedUsers = userResponses.map((response) => ({
              id:response.data.id,
              profileUrl:response.data.html_url,
              avatar:response.data.avatar_url,
              login: response.data.login,
              followers: response.data.followers,
              created_at: response.data.created_at,
              starred:response.data.starred_url


            }));
            //console.log(response.data)
            setUsers(fetchedUsers);
          } catch (error) {
            console.error(error);
          }
        };

        // fetchUsers();
      }, []);

    const getLastMonth = () => {
      const date = new Date();
      date.setMonth(date.getMonth() - 1);
      return date.toISOString().split('T')[0];
    };
    console.log(users)
  return (


    <PopularUsersConatiner>
    <MainTitle>Most Active Users</MainTitle>
{/* {users.map((user)=>{
return <UserCard key={user?.id} user={user}/>
  })} */}
  </PopularUsersConatiner>
 
  )
}

export default ActiveUser