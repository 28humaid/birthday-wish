import { Box, Dialog,DialogContent, Typography, useTheme } from '@mui/material'
import React from 'react'

const RejectionDialog = (open) => {
    const theme = useTheme()
  return (
    <>
    <Dialog open={open}
    sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px', // Apply border radius to the Paper
          boxShadow: '0 0 5px #ffec4e, 0 0 5px #ffec4e, 0 0 30px rgba(255, 236, 78, 0.5)', // Glowing shadow
        },
    }}
    >
        <DialogContent
            sx={{
                backgroundColor: theme.palette.background.default,
                border: '1px solid #1a1a1a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: 0,
                position: 'relative', // to allow absolute overlay
                overflow: 'hidden', // to clip background
                minWidth: { xs: '250px',sm:'300px', md: '400px' }, // Ensure sufficient width
                aspectRatio:'2/3'
            }}
            >
            {/* Background Image Overlay */}
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/birthday-wish/images/rejectionImage.jpg)', // change to your image path
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                opacity: 0.2, // adjust this for better text visibility
                // zIndex: 0,
                }}
            />

            {/* Content on top */}
            <Typography sx={{ zIndex: 1, color: theme.palette.text.primary,textAlign:'center',maxWidth:'80%',marginTop:'42%' }}>
                You’re not Anion, are you?<br/>And let’s be honest — it’s not even your birthday today. 🫠<br/>This wasn’t made for you.
            </Typography>
            </DialogContent>
    </Dialog>
    </>
  )
}

export default RejectionDialog