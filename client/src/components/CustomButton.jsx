import React from 'react'
import { Button, styled } from '@mui/material'


const CustomButton = ({ backgroundColor,
    color,
    buttonText,
    heroBtn, guideBtn, getStartedBtn }) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor:color,
        color:backgroundColor,
        fontWeight:"700",
        fontSize:"14px",
        cursor:"pointer",
        padding:"0.5rem 1.25rem",
        borderRadius:"7px",
        textTransform:"none",
        display:"block",
        border:"2px solid transparent",
        "&:hover":{
            backgroundColor:color,
            color:backgroundColor,
            borderColor:backgroundColor
        },
        [theme.breakpoints.down("md")]:{
            margin: (heroBtn || guideBtn) && theme.spacing(0, 'auto', 3, "auto"),
            width: (heroBtn || guideBtn) && "90%"
        }
    }))
    return (
        <CustomButton>

        </CustomButton>
    )
}

export default CustomButton