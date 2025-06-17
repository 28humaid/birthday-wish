import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const WishForHer = () => {
    const theme = useTheme()
  return (
    <Box>
        <Typography sx={{color:theme.palette.text.primary}}>
            Dear Sadaf,<br/>
            Samajh nahi aa raha kahan se shuru karu...Not because I have too much to say, balki isliye, kyunki kehne ko kuch khas bacha hi nahi... ya shayad sab kuch keh chuka hoon pehle hi!😅 Khair, jokes apart — Wishing you a very very Happy Birthday! 🥳🎂✨
        </Typography>
        <img
            src='/birthday-wish/images/wishImage5.png'
            style={{
                maxWidth:'100%',
                height:'auto'
            }}
        />
        <Typography sx={{color:theme.palette.text.primary}}>
            Jis bhi haal mein ho, jahan bhi ho — Allah ta'ala tumhe hmesha khush rakhe.
            Baate to bas ab birthday to birthday tk hi reh gyi hain and ittefaq dekho...6 mahine k gap pr hain birthdays hmare📅! communication gap to definitely hogya hai but still that consistency is there!!
            Thoda funny scenario hai, par shayad hamara rishta hi kuch aisa hai — bina roz baat kiye bhi woh connection kabhi gaya nahi... aur dekho, ab toh lagbhag 4 saal ho gaye!💫🕰️
        </Typography>
        <img
            src='/birthday-wish/images/wishImage4.png'
            style={{
                maxWidth:'100%',
                height:'auto'
            }}
        />

        <Typography sx={{color:theme.palette.text.primary}}>
            Anyways...May you get all the happiness and surprises that make you smile when you least expect them. 
            Tum jitni khoobsoorat ho, zindagi bhi waisi hi khoobsoorat ho tumhare liye🌸🌿
            That is all I will say for now...Enjoy your day to the fullest! 🎁🥰 See you around <Typography component="span" sx={{textDecoration:'line-through'}}>soon</Typography>... in 6 months!⏳😄
        </Typography>
        <img
            src='/birthday-wish/images/wishImage2.png'
            style={{
                maxWidth:'100%',
                height:'auto'
            }}
        />
    </Box>
  )
}

export default WishForHer