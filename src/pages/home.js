import React from 'react'
import PopularUser from '../components/PopularUser/PopularUser'
import ActiveUser from '../components/ActiveUser/ActiveUser'
import SearchUser from '../components/SeachUser/SearchUser'
import StaredRepo from '../components/StaredRepo/StaredRepo'

function Home() {
  return (
    <>
    <SearchUser />
    <PopularUser />  
   <ActiveUser />    
    <StaredRepo />
     
    </>
  )
}

export default Home