import React ,{useEffect, useState}from 'react'
import {PopularUsersConatiner, MainTitle,Box, Message} from '../PopularUser/styles'
import {  useSelector } from 'react-redux'
import axios from 'axios'
import UserCard from '../PopularUser/UserCard/UserCard'


function SearchUser() {
  const searchTopic=useSelector((state)=>state.searchTerm.userSearchTerm)
  //console.log(searchTopic)


  const [users, setUsers] = useState([]);
  const [reposs, setRepos] = useState([]);
 const [finall, setFinal] = useState([]);
  useEffect(() => {
   
    async function fetchUser() {
      try {
        const repoResponse = await axios.get(`https://api.github.com/search/repositories?q=${searchTopic}`);
        const userResponse = await axios.get(`https://api.github.com/search/users?q=${searchTopic}`);

        const repos = repoResponse.data.items.map((item) => item.owner);
        const reposLogin=repos.map((item)=>item.login)
        const usersLogin = userResponse.data.items.map((item) => item.login);
        setUsers(usersLogin)
        setRepos(reposLogin)
        setFinal([...reposLogin, ...usersLogin])
      
      } catch (error) {
        console.error(error);
      }
    }



    fetchUser();
  }, [searchTopic]);
  console.log(users)
  console.log(reposs)
console.log(finall)
  return (
    <PopularUsersConatiner>
     <MainTitle>Searched Users</MainTitle>
     <Box>
   {finall ?
   finall.slice(0,3).map((user)=>{
    return <UserCard key={user} user={user}/>
  }):
   <Message>search one item</Message>}
    </Box>  
  </PopularUsersConatiner>
  )
}

export default SearchUser