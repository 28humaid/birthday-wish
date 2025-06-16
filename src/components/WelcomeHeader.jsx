import React, { useEffect, useState } from 'react'
import { Typography, useTheme } from '@mui/material'
import HerName from './HerName'
import HeartIcon from './HeartIcon'

const WelcomeHeader = () => {
    const theme = useTheme()
    return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{color:theme.palette.text.primary,textAlign:'center',lineHeight:3}}>Hello <HerName/>{' '} </Typography>
        <HeartIcon style={{marginLeft:1}}/>
    </div>
    )
}

export default WelcomeHeader