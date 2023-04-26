import React, {useState,useEffect} from 'react'
import {UserCardContainer, Box, HoverBox,Top,Main,Middel,ImageDiv,Name, Email, Followers, FollowersNum, Tag, Info, Open, StyledLink} from './styles'
import { Link } from 'react-router-dom'
import {HiOutlineUser} from 'react-icons/hi'
import StarredUserRepo from './StarredUserRepo/StarredUserRepo'
import axios from 'axios'



function UserCard({user}) {
//console.log(user)one user
const [userInfo, setUserInfo] =useState([])
    // Replace `usernames` with your array of GitHub usernames
    
    useEffect(() => {
      axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
          setUserInfo(response.data);
        })
        .catch(error => {
          console.error(`Error getting user data for ${user}: ${error}`);
        });
    }, [user]);
  
  
  
 //
 //console.log(userInfo.followers)ok

 
const {name, email,login, followers, avatar_url,} =userInfo
//console.log(avatar_url)
  return (
  <>
  <UserCardContainer>

<Box>
<Top>
   <Main bg={avatar_url}></Main>
    <ImageDiv bg={avatar_url}>         
   </ImageDiv>
</Top>

<Middel hover>
   <Name>{login}</Name>
   <Email>{login}@gmail.com</Email>
   <Followers><HiOutlineUser />
     <FollowersNum>{followers}</FollowersNum> 
     <Tag>Followers</Tag>
    </Followers>
      <StarredUserRepo user={user}/> 
</Middel>
</Box> 
 <HoverBox>
 <ImageDiv bg={avatar_url} hover></ImageDiv>
<Info>
<Name>{name}</Name>
<Email>{name}@gmail.com</Email>
<Followers hover><HiOutlineUser />
     <FollowersNum>{followers}</FollowersNum> 
     <Tag>Followers</Tag>
    </Followers>
     <Open><StyledLink >Open Profile</StyledLink></Open>
</Info>

   
</HoverBox>  
</UserCardContainer> 
  
  
  </>
 
  )
  }

export default UserCard





    