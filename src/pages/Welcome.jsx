import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Welcomeim from "../assets/welcome.png";

function Welcome() {


  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "34px",
    fontWeight: "bold",
    color: "gray",
    margin: theme.spacing(4,0,4,0),
    [theme.breakpoints.down('sm')] : {
        fontSize:'40px'
    }
  }));

  return (
    <Box  sx={{ backgroundColor: "#FED801", minHeight: "100vh", width: "100%" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "28px",
                color: "#ffff",
                fontWeight: "500",
                fontSize:"50px",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to TechFlicx Restaurant
            </Typography>
            <Title variant="h2">
              Discover the best restaurants near you and explore a world of
              flavors.
            </Title>

            <CustomButton backgroundColor={"purple"} color={"white"}  buttonText={"GET STARTED"} />
          </Box>
          <Box sx={{flex: "1.25"}}>

            <img src={Welcomeim} style={{maxWidth:"100%", marginBottom:"2rem"}} alt="" />

          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
