import React ,{useEffect, useState}from 'react'
import {PopularUsersConatiner, MainTitle} from '../PopularUser/styles'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'



function SearchUser() {
  const searchTopic=useSelector((state)=>state.searchTerm.userSearchTerm)
  console.log(searchTopic)
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`https://api.github.com/search?q=${searchTopic}&type=Repositories,Users&per_page=10`);
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [searchTopic]);

console.log(user)
  return (
    <PopularUsersConatiner>
    <MainTitle>Searched Users</MainTitle>
{/* {users.map((user)=>{
return <UserCard key={user?.id} user={user}/>
  })} */}
  </PopularUsersConatiner>
  )
}

export default SearchUser