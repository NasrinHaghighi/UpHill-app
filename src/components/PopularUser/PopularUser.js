import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import {PopularUsersConatiner, MainTitle, Box} from './styles'
import {lastMonthDate} from '../../utiles'
import UserCard from './UserCard/UserCard'
const rootUrl='http:///api.github.com'


/*fetch list of login name by :created-at after last month and sort by num of followers desc*/
function PopularUser() {

    const [users, setUsers] =useState([])
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              `${rootUrl}/search/users?q=created:>=${lastMonthDate}&sort=followers&order=desc&per_page=3`
            );
            const userLogins = response.data.items.map((item) => item.login);
             //console.log(userLogins)=>['eddyonl', 'tnarrj', 'alexica32']
            setUsers(userLogins)
           } catch (error) {
            console.error(error);
          }
        };
      fetchUsers();
      }, []);

     //console.log(users)=>['eddyonl', 'tnarrj', 'alexica32']
      return (

        <PopularUsersConatiner>
           <MainTitle>Trednding Users</MainTitle>
           <Box>
      {users?.map((user)=>{
    return <UserCard key={user?.id} user={user}/>
        })}  
        </Box>
        </PopularUsersConatiner>
       
      )
    
}

export default PopularUser




 
        