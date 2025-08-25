import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import CustomButton from './CustomButton';

function Header() {
  const nav_titles = [
    { path: '/', display: 'Home' },
    { path: '/', display: 'Dishes' },
    { path: '/', display: 'Services' },
    { path: '/', display: 'About us' }
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }
  }));

  const NavBarLink = styled(Typography)(({ theme }) => ({
   fontSize:'18px',
   fontWeight:'bold',
   color:'gray',
   fontWeight:'bold',
   cursor:'pointer',
   '&:hover':{
    color:'White'
   }

  }));

  return (
    <Box>
      <NavBarLinkBox>
        {nav_titles.map((items, index) => (
          <NavBarLink variant='body2'>
            {items.display}
          </NavBarLink>
        ))}
      </NavBarLinkBox>
      <Box>
        <NavBarLink variant='body2'>
            Sign Up
          </NavBarLink>
          <CustomButton color='#6A1B9A'/>
      </Box>
    </Box>
  );
}

export default Header;
