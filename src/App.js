// In your App.js file, wrap your components like this:

import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Box sx={{ 
      margin: 0, 
      padding: 0, 
      backgroundColor: '#FED801',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      <Header />
      <Welcome />
    </Box>
  );
}

export default App;