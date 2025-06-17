import { Typography, useTheme } from '@mui/material'
import React from 'react'

const WishForOthers = () => {
    const theme = useTheme()
  return (
    <div>
        <Typography sx={{color:theme.palette.text.primary}}>
            Bhakk bhosdike!!!
        </Typography>
    </div>
  )
}

export default WishForOthers