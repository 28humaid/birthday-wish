import React from 'react'
import {Box} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeartIcon = () => {
  return (
    <>
        {/* <Box sx={{position:'absolute'}}>HeartIcon</Box> */}
        <FavoriteIcon sx={{color:"#ffec4e"}}/>
    </>
  )
}

export default HeartIcon