import React from 'react'
import { useSelector } from 'react-redux'
import WishForHer from './WishForHer'
import WishForOthers from './WishForOthers'
import {Box, useTheme} from '@mui/material'

const WishPart = () => {
    const userName = useSelector((state)=>state.user.userName)
    console.log('redux se ye naam utha rha hai : ',userName);

    const theme = useTheme()
    const actualName = atob("c2FkYWY=");
    
  return (
    <Box sx={{backgroundColor:theme.palette.background.default, minHeight:'100vh',padding:'5% 3%'}}>
    {userName.toLowerCase() === actualName && <WishForHer/>}
    {userName.toLowerCase() !== actualName && <WishForOthers/>}
    </Box>
  )
}

export default WishPart