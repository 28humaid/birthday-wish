import { Box,Typography, useTheme } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
    // const fonts=['serif','Edu NSW ACT Cursive','monospace','sans-serif','Amarante','Noto Sans KR','Bebas Neue','Caprasimo','Noto Nastaliq Urdu','Alumni Sans SC','Sevillana','Dancing Script','Michroma','Kapakana']
    const theme = useTheme()
    return (
        <Box
            sx={{
                backgroundColor:'#ffec4e',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'fixed',
                bottom:0,
                right:0,
                left:0,
            }}
        >
            <Typography sx={theme.typography.footer}>Crafted by Humaid...Not entirely in JSX{' '}</Typography>
            <FavoriteIcon sx={{color:"black", fontSize:'16px'}}/>
            <FavoriteIcon sx={{color:"blue", fontSize:'16px'}}/>
        </Box>
    )
}

export default Footer