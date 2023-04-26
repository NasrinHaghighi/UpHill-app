import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {PopularUsersConatiner, MainTitle,Box} from '../PopularUser/styles'
import UserCard from '../PopularUser/UserCard/UserCard'


const token = process.env.REACT_APP_GITHUB_TOKEN;


function ActiveUser() {
    const [users, setUsers] = useState([]);
    const getLastMonth = () => {
      const date = new Date();
      date.setMonth(date.getMonth() - 1);
      return date.toISOString().split('T')[0];
    };
 
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=created:2023-01-01..2023-03-31&sort=repositories&order=desc&per_page=3`
             );
             const userLogins = response.data.items.map((item) => item.login);
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
    <MainTitle>Most Active Users</MainTitle>
    <Box>
    {users?.map((user)=>{
    return <UserCard key={user?.id} user={user}/>
        })} 
        </Box>
  </PopularUsersConatiner>
 
  )
}

export default ActiveUser