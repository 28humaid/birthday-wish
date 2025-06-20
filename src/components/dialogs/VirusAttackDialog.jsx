import { Dialog, DialogContent, DialogTitle, Typography, useTheme } from '@mui/material'
import { useState,useEffect } from 'react'

const VirusAttackDialog = ({open,userName}) => {
    const theme = useTheme()
    const [count,setCount] = useState(0)
    const [dots, setDots] = useState(1);
    const [virusWord,setVirusWord] = useState("베개 커버")
    const randomWords=["バカ","ランダム","папочка","мобильный","좋은 아침","안녕","베개 커버","axc베개","мобильный안","バランカ","ランバカ","ダムапочラン","좋은 x70xx아침","ffge베개"]
    // console.log("ye virus dialog mei naam hai : ",userName);
    

    useEffect(() => {
        setTimeout(() => {
            
            const randomIndex = Math.floor(Math.random()*randomWords.length)
            const randomWidth = Math.floor(Math.random()*100)

            setVirusWord(randomWords[randomIndex]);
            setCount(randomWidth);
        }, 100);
    });

    useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % 3) + 1); // Cycle 1, 2, 3
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog 
        open={open}
        BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // increase opacity here
        },
        }}
        sx={{
        '& .MuiDialog-paper': {
            width: { xs:'300px', md: '400px' },
        },
        }}
    >
        <DialogTitle
            sx={{
                backgroundColor:'blue',
            }}
        >    
        </DialogTitle>
        <DialogContent
            sx={{
            backgroundColor:theme.palette.background.default,
            border:'1px solid #1a1a1a',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            gap:'8px',
            }}
        >
            <Typography sx={{fontFamily:'monospace',width:'100%',fontSize:theme.typography.footer.fontSize, marginTop:'12px',textAlign:'center',color:'white'}} >Installing .exe packages{'.'.repeat(dots)}</Typography>

            <Typography sx={{fontFamily:'monospace',width:'100%',fontSize:theme.typography.footer.fontSize, marginTop:'6px',textAlign:'center',color:'white'}} >Target : {userName}-device</Typography>

            <Typography sx={{fontFamily:'monospace',width:'100%',fontSize:theme.typography.footer.fontSize, marginTop:'6px',textAlign:'center',color:'white'}} >{virusWord}</Typography>

            <div
                style={{
                    border:'1px solid white',
                    width:'90%',
                    height:'20px',
                    display:'flex',
                    alignItems:'center',
                }}
            >
                <div
                    style={{
                        border:'1px solid #39FF14',
                        width:`${count}%`,
                        height:'14px',
                        backgroundColor:'#39FF14',
                        marginLeft:'1%',
                        marginRight:'1%'
                    }}
                >
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default VirusAttackDialog