import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const HerName = () => {
    const [font,setFont] = useState('Edu NSW ACT Cursive')
        const fonts=['serif','Edu NSW ACT Cursive','monospace','Amarante','Noto Sans KR','Bebas Neue','Caprasimo','Noto Nastaliq Urdu','Alumni Sans SC','Sevillana','Dancing Script','Michroma','Kapakana']
    
        // font family change krne k liye
        useEffect(
            ()=>{
                // console.log("I am useEffect");
                // console.log(Math.floor(Math.random()*fonts.length))
                const interval = setInterval(()=>{
                    const randomIndex = Math.floor(Math.random()*fonts.length)
                    setFont(fonts[randomIndex])
                    // console.log("Current font family : ",fonts[randomIndex]);
                    
                },280)
                
                return () => clearInterval(interval)
            },[])
    return (
    <Typography component="span" sx={{
        fontFamily: font,
        lineHeight: 2, // Consistent line height
        display: 'inline-block', // Prevents width changes
        minWidth: '65px', // Reserve space to avoid shifts
    }}>
        Anion
    </Typography>
    )
}

export default HerName