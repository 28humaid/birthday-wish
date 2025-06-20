import { Box, Typography, useTheme } from '@mui/material'
import SlideLayout from './layouts/SlideLayout'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import RejectionDialog from './dialogs/RejectionDialog'
import VirusAttackDialog from './dialogs/virusAttackDialog'

const WishForOthers = () => {
    const theme = useTheme()
    const userName = useSelector((state)=>state.user.userName)
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);

  // useEffect to set variables to true at 3s, 6s, 9s
    useEffect(() => {
        const timer1 = setTimeout(() => {
        setFirst(true);
    }, 4000);

    const timer2 = setTimeout(() => {
        setSecond(true);
    }, 8000);

    const timer3 = setTimeout(() => {
        setThird(true);
    }, 10000);

    const timer4 = setTimeout(() => {
        setFourth(true);
    }, 15000);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
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
                    Dear <Typography component="span" sx={{fontSize:theme.typography.herNameText.fontSize,fontWeight:500}}>{userName}</Typography>🎉🎂,
                </Typography>
            </SlideLayout>
            
            {first && 
                <SlideLayout direction="left" timeout={2000}>
                    <Typography sx={{color:theme.palette.text.primary,maxWidth:{xs:"100%",md:'50%'},marginBottom:'24px'}}>
                        Today isn't just any day… it's yours🌼and I have been waiting all year to say this...
                    </Typography>
                </SlideLayout>
            }

            {second &&
                <Typography sx={{color:theme.palette.text.primary}}>
                    Wishing you a very very
                </Typography>
            }
        </div>

        {third && <RejectionDialog open={third}/>}

        {fourth && <VirusAttackDialog open={fourth} userName={userName}/>}
    </Box>
  )
}

export default WishForOthers