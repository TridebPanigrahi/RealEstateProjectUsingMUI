import React from 'react'
import {Box, styled, Typography, Button} from '@mui/material'
import {Container} from '@mui/system'
import Navbar from './Navbar'


const Hero = () => {

  const CustomBox = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    gap:theme.spacing(5),
    marginTop:theme.spacing(3),
    [theme.breakpoints.down("sm")]:
    {
      flexDirection:"column",
      alignItems:"center",
      textAlign:"center"
    },
  }));

  const Title = styled(Typography)(({theme})=>({
    fontSize:"64px",
    color:"#000336",
    fontWeight:"bold",
    margin:theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down]:{
      fontSize:"40px"
    }
  }))

  return (
    <Box sx={{background:"#E6F0FF", minHeight:"80vh"}}>
      <Container>
        <Navbar/>
        <CustomBox>
          <Box sx={{flex:"1"}}>

          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default Hero