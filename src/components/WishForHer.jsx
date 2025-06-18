import { Box, Slide, Typography, useTheme } from '@mui/material'
import ImageAndTextLayout from './layouts/ImageAndTextLayout'

const WishForHer = () => {
    const theme = useTheme()
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:6,px:{xs:'4%',md:"10%"}}}>

        <ImageAndTextLayout columnDirection="column">
            <Slide direction='right' in={true} timeout={1000}>
                <Typography sx={{color:theme.palette.text.primary,fontSize:theme.typography.wishText.fontSize,maxWidth:{xs:"100%",md:'50%'}}}>Dear <Typography component="span" sx={{fontSize:theme.typography.herNameText.fontSize,fontWeight:500}}>Sadaf</Typography>,<br/>
                Samajh nahi aa raha kahan se shuru karu...Not because I have too much to say, balki isliye, kyunki kehne ko kuch khas bacha hi nahi... ya shayad sab kuch keh chuka hoon pehle hi!😅 Khair, jokes apart — Wishing you a very very Happy Birthday! 🥳🎂✨
                </Typography>
            </Slide>
            <Slide  direction='left' in={true} timeout={1000}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img
                        src='/birthday-wish/images/wishImage5.png'
                        style={{
                            width:'100%',
                            maxWidth:'400px',
                            // aspectRatio:'2/3',
                            height:'auto',
                            // minHeight:'600px',
                            boxShadow: '0 0 10px #ffec4e, 0 0 20px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
                            borderRadius:'12px',
                        }}
                    />
                </Box>
            </Slide>
        </ImageAndTextLayout>

        <ImageAndTextLayout columnDirection="column-reverse">
            <Slide direction='right' in={true} timeout={1000}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img
                        src='/birthday-wish/images/wishImage4.png'
                        style={{
                            width:'100%',
                            maxWidth:'400px',
                            // aspectRatio:'2/3',
                            height:'auto',
                            // minHeight:'600px',
                            boxShadow: '0 0 10px #ffec4e, 0 0 20px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
                            borderRadius:'12px',
                        }}
                    />
            </Box>
            </Slide>
            <Slide direction='left' in={true} timeout={1000}>
                <Typography sx={{color:theme.palette.text.primary,fontSize:theme.typography.wishText.fontSize,maxWidth:{xs:"100%",md:'50%'}}}>
                    Jis bhi haal mein ho, jahan bhi ho — Allah ta'ala tumhe hmesha khush rakhe.
                    Baate to bas ab birthday to birthday tk hi reh gyi hain and ittefaq dekho...6 mahine k gap pr hain birthdays hmare📅! communication gap to definitely hogya hai but still that consistency is there😄😄😄!!
                    Thoda funny scenario hai, par shayad hamara rishta hi kuch aisa hai — bina roz baat kiye bhi woh connection kabhi gaya nahi... aur dekho, ab toh lagbhag 4 saal ho gaye!💫🕰️
                </Typography>
            </Slide>
        </ImageAndTextLayout>

        <ImageAndTextLayout columnDirection="column">
            <Slide direction='right' in={true} timeout={1000}>
                <Typography sx={{color:theme.palette.text.primary,fontSize:theme.typography.wishText.fontSize,maxWidth:{xs:"100%",md:'50%'}}}>
                    Anyways...May you get all the happiness and surprises that make you smile when you least expect them. 
                    Tum jitni khoobsoorat ho, zindagi bhi waisi hi khoobsoorat ho tumhare liye🌸🌿
                    That is all I will say for now...Enjoy your day to the fullest! 🎁🥰Hope you liked this little surprise I built for you💻🎁 <br/>See you around <Typography component="span" sx={{textDecoration:'line-through',color:theme.palette.text.primary,fontSize:theme.typography.wishText.fontSize}}>soon</Typography>... in 6 months!⏳😄
                </Typography>
            </Slide>
            <Slide direction='left' in={true} timeout={1000}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img
                        src='/birthday-wish/images/wishImage2.png'
                        style={{
                            width:'100%',
                            maxWidth:'400px',
                            // aspectRatio:'2/3',
                            height:'auto',
                            // minHeight:'600px',
                            boxShadow: '0 0 10px #ffec4e, 0 0 20px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
                            borderRadius:'12px',
                        }}
                    />
                </Box>
            </Slide>
        </ImageAndTextLayout>
    </Box>
  )
}

export default WishForHer