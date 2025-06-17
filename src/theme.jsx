import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        text:{
            primary:'#ffec4e',
            secondary:'#1a1a1a'
        },
        background:{
            default:'#1a1a1a',
            // secondary:'#ffec4e'
        },
        // button:{
        //     night:'pink',
        //     day:'transparent'
        // },
    },

    typography:{
        fontFamily:'Edu NSW ACT Cursive',
        questionText:{
            fontSize:'14px'
        },
        wishText:{
            fontSize:{xs:'14px',sm:'16px',md:'18px',lg:'24px'}
        },
        herNameText:{
            fontSize:{xs:'20px',sm:'22px',md:'24px',lg:'30px'}
        },
        footer:{
            fontFamily:'monospace',
            fontSize:{xs:'12px',md:'14px'},
            fontWeight:600,
            color:'#1a1a1a',
            lineHeight:2
        }
    }
})

export default theme