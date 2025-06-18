import {Box} from '@mui/material'

const ImageAndTextLayout = ({children,columnDirection}) => {
  return (
    <Box sx={{display:'flex', flexDirection:{xs:columnDirection,md:'row'},gap:4}}>
        {children}
    </Box>
  )
}

export default ImageAndTextLayout