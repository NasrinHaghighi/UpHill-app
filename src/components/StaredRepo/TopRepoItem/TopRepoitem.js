import React from 'react'
import {Box, Title,Star, Desc} from './styles'

import {GiAlliedStar} from 'react-icons/gi'


const colors = [
    "#0000FF", // dark blue,
    "#3A73CF",
    "#5E9CED",
    "#87CEFA", // light blue
    "#5E9CED",
    
   
  ];

function TopRepoitem({item, index}) {
 const {name,stargazers_count:star, description} =item
  return (
   
        <Box bg={colors[index]}>
        <Title>{name}</Title>
        <Star><GiAlliedStar /><span>{star}</span></Star>
        <Desc>{description?.length<80 ?description : description?.substring(0, 80)}</Desc>
     </Box>

        

 
  
  )
}

export default TopRepoitem