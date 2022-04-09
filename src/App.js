import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Dashboard from './pages/Dashboard';
import Error404 from './pages/error/404'
import SignUp from './pages/authentication/SignUp'
import SignIn from './pages/authentication/SignIn';
import Profile from './pages/account/Profile';
import DefaultLayout from './layout/DefaultLayout';

function App() {

  // Initialise Theme
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={{ display: 'flex' }}> */}

        {/* <CssBaseline /> */}
        
        <Router>
          {/* <Sidebar></Sidebar>  */}
          {/* <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}> */}
            <Routes>
                <Route path='/' 
                  element={
                    <DefaultLayout>
                      <Dashboard/>
                    </DefaultLayout>}>
                </Route>
                <Route path='/signin' element={<SignIn/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
                
                <Route path='/profile' 
                  element={
                    <DefaultLayout>
                      <Profile/>
                    </DefaultLayout>
                  }
                ></Route>
                <Route path='/error' 
                  element={
                    <DefaultLayout>
                      <Error404/>
                    </DefaultLayout>
                  }
                >
                </Route>
            </Routes>
          {/* </Box> */}
        </Router>
      {/* </Box> */}
    </ThemeProvider>
  );
}

export default App;
