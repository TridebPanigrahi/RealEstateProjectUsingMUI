import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import Navbar from './Navbar'
import CustomButton from './CustomButton'


const Hero = () => {

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]:
    {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down]: {
      fontSize: "40px"
    }
  }))

  return (
    <Box sx={{ background: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#687690", fontWeight: "500", mt: 10, mb: 4 }}>
              Welcome to Smart House
            </Typography>
            <Title variant="h1">
              Real estate cannot be lost or stolen, nor can it be carried away.
            </Title>
            <Typography variant='body2' sx={{fontSize:"18px", color:"#5A6473", my:4}}>
            Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.
            </Typography>
            <CustomButton backgroundColor="#0F184C" color ="#fff" buttonText="More About Us" heroBtn ={true}/>
            
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default Hero