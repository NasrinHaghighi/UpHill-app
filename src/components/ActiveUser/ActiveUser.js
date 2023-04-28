import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {PopularUsersConatiner, MainTitle,Box} from '../PopularUser/styles'
import UserCard from '../PopularUser/UserCard/UserCard'
import {lastMonthDate} from '../../utiles'
const rootUrl='http:///api.github.com'
const token = process.env.REACT_APP_GITHUB_TOKEN;


function ActiveUser() {
    const [users, setUsers] = useState([]);

     useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
                `${rootUrl}/search/users?q=created:>=${lastMonthDate}&sort=repositories&order=desc&per_page=3`
             );
             const userLogins = response.data.items.map((item) => item.login);
             setUsers(userLogins)
                     
            
          } catch (error) {
            console.error(error);
          }
        };

         fetchUsers();
      }, []);

 
    //console.log(users)['a','b','c']
  return (


    <PopularUsersConatiner>
    <MainTitle>Most Active Users</MainTitle>
    <Box>
    {users?.map((user)=>{
    return <UserCard key={user.id} user={user}/>
        })} 
        </Box>
  </PopularUsersConatiner>
 
  )
}

export default ActiveUser