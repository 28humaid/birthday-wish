import { Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const HomeScreenButton = ({onClick}) => {
    const theme = useTheme()
  return (
    <Button onClick={onClick}
    sx={{
        border:'1px solid #ffec4e',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:2,
        // maxWidth:'60%'
        boxShadow: '0 0 10px #ffec4e, 0 0 20px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
        padding: '8px 16px', // Consistent padding for better appearance
        '&:hover': {
          boxShadow: '0 0 15px #ffec4e, 0 0 25px #ffec4e, 0 0 35px rgba(255, 236, 78, 0.7)', // Enhanced glow on hover
          borderColor: '#fff176', // Slightly lighter border on hover
        },
    }}
    >
        <Typography sx={{fontSize:theme.typography.questionText,textTransform:'none',color:'#ffec4e'}}>Open Your Gift</Typography>
        <CardGiftcardIcon sx={{color:'#ffec4e',fontSize:'20px'}}/>
    </Button>
  )
}

export default HomeScreenButton