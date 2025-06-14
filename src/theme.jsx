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
    }
})

export default theme