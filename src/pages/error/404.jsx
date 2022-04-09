import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
import { blue } from '@mui/material/colors'
//import Sidebar from '../../components/sidebar/Sidebar'
import { ReactComponent as Image } from '../../assets/error_404.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Error404 = () => {
  return (
    <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: blue,
            p: 2
        }}
    >
        <Image style={{
            fill: "#f22f2f",
            width: "75%",
            height: "50%"
        }}>

        </Image>
        <div></div>
        <Typography variant='subheading' sx={{ padding:4 }}>
            The page selected is still under development please chect it out later
        </Typography>
        <Link href="/" underline="none">
           <Button startIcon={<ArrowBackIcon />} >Back to Dashboard</Button>
        </Link>
    </Box>
  )
}

export default Error404