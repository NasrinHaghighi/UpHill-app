import React from 'react'
import {UserCardContainer, Box, HoverBox,Top,Main,Middel,ImageDiv,Name, Email, Followers, FollowersNum, Tag, Info, Open, StyledLink} from './styles'
import { Link } from 'react-router-dom'
import {HiOutlineUser} from 'react-icons/hi'
import StarredUserRepo from './StarredUserRepo/StarredUserRepo'

function UserCard({user}) {
  //console.log(user)
const {avatar, login,followers,starred, profileUrl } =user

  return (
    <UserCardContainer>
      <Box>
        <Top>
            <Main bg={avatar}></Main>
            <ImageDiv bg={avatar}>         
            </ImageDiv>
        </Top>
      
        <Middel hover>
            <Name>{login}</Name>
            <Email>{login}@gmail.com</Email>
            <Followers><HiOutlineUser />
             <FollowersNum>{followers}</FollowersNum> 
             <Tag>Followers</Tag>
             </Followers>
            <StarredUserRepo login={login}/>
        </Middel>
        </Box>
        <HoverBox>
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
        
            
        </HoverBox>
    </UserCardContainer>
  )
}

export default UserCard