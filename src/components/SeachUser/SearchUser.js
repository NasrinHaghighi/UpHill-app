import React ,{useEffect, useState}from 'react'
import {PopularUsersConatiner, MainTitle,Box, Message} from '../PopularUser/styles'
import {  useSelector } from 'react-redux'
import axios from 'axios'
import UserCard from '../PopularUser/UserCard/UserCard'
const rootUrl='http:///api.github.com'



/*serach in users and repos by user search topic come from redux*/
/*mix data from two request and make finall arr*/
/*put search co. at the top and the visibility is conditinal*/ 

function SearchUser() {
  const searchTopic=useSelector((state)=>state.searchTerm.userSearchTerm)
  console.log(searchTopic)



 const [finall, setFinal] = useState([]);
  useEffect(() => {
   
    async function fetchUser() {
      try {
        const repoResponse = await axios.get(`${rootUrl}/search/repositories?q=${searchTopic}`);
        const userResponse = await axios.get(`${rootUrl}/search/users?q=${searchTopic}`);

        const repos = repoResponse.data.items.map((item) => item.owner);
        const reposLogin=repos.map((item)=>item.login)
        const usersLogin = userResponse.data.items.map((item) => item.login);
      
        setFinal([...reposLogin, ...usersLogin])
      
      } catch (error) {
        console.error(error);
      }
    }



    fetchUser();
  }, [searchTopic]);
 
//console.log(finall)
  return (
    <>
    {searchTopic ?
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
   : ''}
  </>
  )
}

export default SearchUser