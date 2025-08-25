import React from 'react'
import { Box,Button,Typography } from '@mui/material'
import { styled,Container } from '@mui/material'
import CustomButton from '../components/CustomButton'
import Welcomeim from '../assets/welcome.png'

function Welcome() {

    const CustomBox = styled (Box)(({ theme })=>({
        display:'flex',
        justifyContent:'center',
        gap : theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")] : {
            flexD


        }
    }))
  return (

    <Box>
        <Container>
            <CustomBox>

            </CustomBox>
        </Container>
    </Box>

  )
}

export default Welcome
