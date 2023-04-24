import React from 'react'
import {PopularUsersConatiner, MainTitle} from '../PopularUser/styles'



function SearchUser() {
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