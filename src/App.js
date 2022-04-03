import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  // Initialise Theme
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<h1>Hello world</h1>}></Route>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
