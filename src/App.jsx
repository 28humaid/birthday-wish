import './App.css'
import {Box, Button, Typography, useTheme} from '@mui/material'
import WelcomeDialog from './components/dialogs/WelcomeDialog'
import { useState } from 'react'
import WelcomeHeader from './components/WelcomeHeader'
import HomeScreenButton from './components/HomeScreenButton'
import { Route, Routes } from 'react-router-dom'
import WishPart from './components/WishPart'

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
    <Routes>
      <Route path="/" element={
        <>
          <Box sx={{backgroundColor:theme.palette.background.default, height:'100vh',width:'100vw',display:'flex',flexDirection:'column', gap:4,alignItems:'center', justifyContent:'center'}}>

          
            <img
              src="/birthday-wish/images/homePageImage.png"
              style={{
                maxWidth:'25%',
                height:'auto',
                borderRadius: '70%',
                boxShadow: '0 0 5px #ffec4e, 0 0 10px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
                // display: loading ? "none":"block",
              }}
              // onLoad={()=>setLoading(false)}
              // onError={()=>setLoading(false)}
            />

            <WelcomeHeader/>

            <HomeScreenButton onClick={handleOpenClick}/>
        </Box>

        <WelcomeDialog dialogOpen={open} dialogClose={handleCloseClick}/>
        </>
      }/>
      <Route path="/wish-part" element={<WishPart />} />
      </Routes>
  )
}

export default App
