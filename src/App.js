import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Error_404, { error_404 } from './pages/error/404'

function App() {

  // Initialise Theme
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />
        
        <Router>
          <Sidebar></Sidebar> 
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/error' element={<Error_404/>}></Route>
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
