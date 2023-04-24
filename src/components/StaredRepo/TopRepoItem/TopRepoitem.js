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
  return (
   
        <Box bg={colors[index]}>
        <Title>React</Title>
        <Star><GiAlliedStar /><span>5454</span></Star>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique reprehenderit, sapiente nesciunt,.</Desc>
     </Box>

        

 
  
  )
}

export default TopRepoitem