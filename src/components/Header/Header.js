import React from 'react'
import {HeaderContainer, InputContainer,Input,Icon} from './styles'
import UpHill from '../../images/logo.png'
import { debounce } from 'lodash';
import {BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import {UserTopic} from '../../features/searchTermSlice'


function Header() {
const dispatch=useDispatch()
    const handelChange=debounce((e)=>{
      const val =e.target.value
      dispatch(UserTopic(val))
    },1000)
  return (
    <HeaderContainer>
        <img src={UpHill} alt="Logo" />;
        <InputContainer>
        <Icon><BsSearch /></Icon>
        <Input type='text' placeholder='Search' onChange={(e)=>handelChange(e)}/>
        </InputContainer>
    </HeaderContainer>
  )
}

export default Header