import React, {useState,useEffect} from 'react'
import {UserCardContainer, Box, HoverBox,Top,Main,Middel,ImageDiv,Name, Email, Followers, FollowersNum, Tag, Info, Open, StyledLink} from './styles'
import { Link } from 'react-router-dom'
import {HiOutlineUser} from 'react-icons/hi'
import StarredUserRepo from './StarredUserRepo/StarredUserRepo'
import axios from 'axios'



function UserCard({users}) {

  const [usersinfo, setUsersinfo] = useState([]);
  const [oneUser, setOneUser] =useState()
  useEffect(() => {
    // Replace `usernames` with your array of GitHub usernames
   

    const fetchUserData = async () => {
      try {
        const userRequests = users?.map((u) =>
          axios.get(`https://api.github.com/users/${u}`)
        )
        const responses = await Promise.all(userRequests);
        const userData = responses.map((response) => response.data);
         //setUsersinfo(userData)
         const unique=userData.map((m)=>setOneUser(m))
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);
 //
 console.log(oneUser)

  return (
  
    <UserCardContainer>
        <Main></Main>
      <Box>
        <Top>
            <Main bg={oneUser?.avatar_url}></Main>
             <ImageDiv bg={oneUser?.avatar_url}>         
            </ImageDiv>
         </Top>
      
        <Middel hover>
            <Name>{oneUser?.login}</Name>
            <Email>{oneUser?.login}@gmail.com</Email>
            <Followers><HiOutlineUser />
              <FollowersNum>{oneUser?.followers}</FollowersNum> 
              <Tag>Followers</Tag>
             </Followers>
              {/* <StarredUserRepo login={oneUser?.login}/> */}
        </Middel>
         </Box>
         {/* <HoverBox>
          <ImageDiv bg={avatar} hover></ImageDiv>
        <Info>
        <Name>{login}</Name>
         <Email>{login}@gmail.com</Email>
         <Followers hover><HiOutlineUser />
              <FollowersNum>{followers}</FollowersNum> 
              <Tag>Followers</Tag>
             </Followers>
              <Open><StyledLink to={profileUrl}>Open Profile</StyledLink></Open>
      </Info>
        
            
       </HoverBox>  */}
    </UserCardContainer>
  )
}

export default UserCard