import { Box, Button, Dialog, DialogContent, Skeleton, TextField, Typography, useTheme} from '@mui/material'
import { useState } from 'react'

const WelcomeDialog = (props) => {
    const {dialogOpen,dialogClose} = props
    const theme = useTheme()
    const [loading,setLoading] = useState(true)
  return (
    <Dialog open={dialogOpen} onClose={dialogClose}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px', // Apply border radius to the Paper
          boxShadow: '0 0 5px #ffec4e, 0 0 5px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
        },
      }}
    >
        <DialogContent 
        sx={{
          backgroundColor:theme.palette.background.default,
          border:'1px solid #1a1a1a',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          gap:'16px',
          padding:0
          }}>
          <Box sx={{width:'100%',overflow:'hidden'}}>
            {loading && (
            <Skeleton
              variant="rectangular"
              sx={{
                width: '255px',
                height: '107px', // Adjust based on expected image size
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 236, 78, 0.1)', // Subtle yellow tint
                animation: 'wave', // MUI's default shimmer effect
                boxShadow: '0 0 5px rgba(255, 236, 78, 0.3)', // Subtle glow
              }}
            />
          )}
            <img
              src="/birthday-wish/images/whatIsYourname.jpg"
              style={{
                maxWidth:'100%',
                height:'auto',
                display: loading ? "none":"block",
              }}
              onLoad={()=>setLoading(false)}
              onError={()=>setLoading(false)}
            />
          </Box>
          {/* Bottom Text Content */}
          <Box>
            <Box sx={{marginBottom:'30px'}}>
              <Typography sx={{textAlign:'center',...theme.typography.questionText}}>
                But first tell me...
              </Typography>
            </Box>
            <Box sx={{marginBottom:'30px'}}>
              <Typography sx={{textAlign:'center',...theme.typography.questionText,fontWeight:700}}>
                ...What is your real name?
              </Typography>
            </Box>
            <Box sx={{marginBottom:'30px'}}>
              <TextField variant="outlined"
                sx={{
                  '& .MuiInputBase-input':{
                    ...theme.typography.questionText,
                    border:'1px solid #ffec4e',
                    borderRadius:'10px',
                    height:'14px'
                  }
                }}
              />
            </Box>

            <Box  sx={{marginBottom:'30px',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
              <Button
                sx={{
                  height:'45px',
                  padding:'8px 24px 4px 24px',
                  border:'1px solid #2c3e50',
                  borderRadius:'10px',
                  backgroundColor:'#2c3e50',
                  fontSize:theme.typography.questionText,
                  color:'#ffec4e',
                  textTransform:'none',
                }}
              >
                Proceed
              </Button>
            </Box>
          </Box>

        </DialogContent>
    </Dialog>
  )
}

export default WelcomeDialog