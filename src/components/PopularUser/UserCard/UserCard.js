import React from 'react'
import {UserCardContainer,Top,Main,Middel, Bottom,ImageDiv,Name, Email, Followers, FollowersNum, Tag} from './styles'

import {HiOutlineUser} from 'react-icons/hi'


function UserCard() {
  return (
    <UserCardContainer>
        <Top>
            <Main></Main>
            <ImageDiv></ImageDiv>
        </Top>
      
        <Middel>
            <Name>nasrin</Name>
            <Email>nasrin&gmail.com</Email>
            <Followers><HiOutlineUser /> <FollowersNum>528</FollowersNum> <Tag>Followers</Tag></Followers>
            <Bottom>22</Bottom>
        </Middel>
        
    </UserCardContainer>
  )
}

export default UserCard