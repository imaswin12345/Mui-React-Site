import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "./CustomButton";
import logotitle from "../assets/newlogo.png";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const nav_titles = [
    { path: "/", display: "Home", icon: <HomeIcon /> },
    { path: "/", display: "Dishes", icon: <FeaturedPlayListIcon /> },
    { path: "/", display: "Services", icon: <MiscellaneousServicesIcon /> },
    { path: "/", display: "Contact", icon: <ContactsIcon /> },
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: "gray",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  // Drawer List content
  const drawerList = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        backgroundColor: "#FED801",
        margin: 0,
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      {/* Left side: Logo + Links */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Menu icon (only visible on mobile) */}
        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
        <Drawer
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {drawerList("left")}
        </Drawer>

        {/* Logo */}
        <NavbarLogo src={logotitle} alt="logo" style={{ height: "40px" }} />

        {/* Desktop Links */}
        <NavBarLinkBox>
          {nav_titles.map((item, index) => (
            <NavBarLink key={index} variant="body2">
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinkBox>
      </Box>

      {/* Right side: Auth Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "1rem",
        }}
      >
        <CustomButton backgroundColor="green" color="#fff" buttonText={"SignUp"} />
        <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText={"Register"} />
      </Box>
    </Box>
  );
}

export default Header;