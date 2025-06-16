import React, { useEffect, useState } from 'react'
import { Typography, useTheme } from '@mui/material'
import HerName from './HerName'

const WelcomeHeader = () => {
    const theme = useTheme()
    return (
    <>
        <Typography sx={{color:theme.palette.text.primary,textAlign:'center',lineHeight:3}}>Hello <HerName/> </Typography>
    </>
    )
}

export default WelcomeHeader