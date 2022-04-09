import { Box, CssBaseline } from '@mui/material'
import Sidebar from '../components/sidebar/Sidebar'
import React from 'react'

const DefaultLayout = (props) => {
  return (
    <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
            {props.children}
        </Box>
    </Box>
  )
}

export default DefaultLayout