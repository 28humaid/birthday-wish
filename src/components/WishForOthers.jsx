import { Box, Typography, useTheme } from '@mui/material'
import SlideLayout from './layouts/SlideLayout'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import RejectionDialog from './dialogs/RejectionDialog'

const WishForOthers = () => {
    const theme = useTheme()
    const userName = useSelector((state)=>state.user.userName)
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

  // useEffect to set variables to true at 3s, 6s, 9s
    useEffect(() => {
        const timer1 = setTimeout(() => {
        setFirst(true);
    }, 4000);

    const timer2 = setTimeout(() => {
        setSecond(true);
    }, 7500);

    const timer3 = setTimeout(() => {
        setThird(true);
    }, 9000);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, []); // Empty dependency array to run once on mount
  return (
    <Box sx={{display:'flex',flexDirection:{xs:'column-reverse',md:'row'},gap:6,px:{xs:'4%',md:"10%"},paddingBottom:{xs:'8%',sm:'4%'}}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img
                src='/birthday-wish/images/cakeImage.jpg'
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
        <div>
            <SlideLayout direction="left" timeout={2000} >
                <Typography sx={{color:theme.palette.text.primary,marginBottom:'24px'}}>
                    Today isn't just any day… it's yours🌼and I have been waiting all year to say this...
                </Typography>
            </SlideLayout>
            
            {first && 
                <Typography sx={{color:theme.palette.text.primary,textTransform:'uppercase',maxWidth:{xs:"100%",md:'50%'},marginBottom:'24px'}}>
                    Wishing you a very very Happy Birthday <Typography component="span" sx={{fontSize:theme.typography.herNameText.fontSize,fontWeight:500}}>{userName}</Typography>🎉🎂
                </Typography>
            }

            {second && 
                <Typography sx={{color:theme.palette.text.primary}}>
                    May all your
                </Typography>
            }
        </div>

        {third && <RejectionDialog open={third}/>}
    </Box>
  )
}

export default WishForOthers