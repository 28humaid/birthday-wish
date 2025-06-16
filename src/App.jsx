import './App.css'
import {Box, Button, Typography, useTheme} from '@mui/material'
import WelcomeDialog from './components/dialogs/WelcomeDialog'
import { useState } from 'react'
import WelcomeHeader from './components/WelcomeHeader'
import HomeScreenButton from './components/HomeScreenButton'

function App() {
  const [open,setopen] = useState(false)
  const theme=useTheme()

  const handleOpenClick = () =>{
    setopen(true)
  }

  const handleCloseClick = () =>{
    setopen(false)
  }

  return (
    <>
      <Box sx={{backgroundColor:theme.palette.background.default, height:'100vh',width:'100vw',display:'flex',flexDirection:'column', gap:4,alignItems:'center', justifyContent:'center'}}>

        <WelcomeHeader/>

        <HomeScreenButton onClick={handleOpenClick}/>
      </Box>

      <WelcomeDialog dialogOpen={open} dialogClose={handleCloseClick}/>
    </>
  )
}

export default App
