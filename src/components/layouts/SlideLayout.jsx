import { Slide } from '@mui/material'
import React from 'react'

const SlideLayout = ({children,direction,timeout=1000}) => {
  return (
    <Slide direction={direction} in={true} timeout={timeout}>
        {children}
    </Slide>
  )
}

export default SlideLayout