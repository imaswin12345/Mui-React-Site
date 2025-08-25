
import React from 'react'
import { borderColor, styled, width } from '@mui/system';
import { Button } from '@mui/material';

function CustomButton({
    backgroundColor,
    color,
    buttonText,
    
    
}) {

      const CustomButton = styled(Button) (({ theme })=>({
         
        backgroundColor: backgroundColor,
        color:color,
        fontweight:"700",
        fontSize:"14px",
        cursor:'pointer',
        padding:"0.5rem.1.25rem",
        borderRadius:"7px",
        textTransform:'none',
        display:'block',
        border:'2px solid transparent',
        '&:hover': {
            backgroundColor:color,
            color:backgroundColor,
            borderColor:backgroundColor,
        },

        [theme.breakpoints.down("md")]:{
            marign: (welcomeBtn || getStartBtn)&& theme.spacing(0,"auto",3,"auto"),
            width: (welcomeBtn || getStartBtn) && "90%",

        },

        [theme.]
        
        

      }))

  return (
    <CustomButton>
       <Button>{buttonText}</Button>
    </CustomButton>
  )
}

export default CustomButton