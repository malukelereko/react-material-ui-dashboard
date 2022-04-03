import React, { useState } from 'react'
import { Paper, Typography, Button, Box, Grid } from '@mui/material'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StatCard = ({ title, value, percentage, period }) => {

    return (
        <div>
            <Paper sx={{ p:2, mt:2, mb: 2 }}>
                <Box sx={{ color: 'text.secondary', fontWeight: 'bold' }}>{ title }</Box>
                <Box sx={{ color: 'text.primary', fontSize: 24, fontWeight: 'medium' }}>
                    {value}
                </Box>
                <Box
                sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                }}
                >
                    {percentage}
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                vs. {period}
                </Box>
            </Paper>
        </div>
    )
}

const Dashboard = () => {

    const [period, setPeriod] = useState('')

    const handleChange = (event) => {
        setPeriod(event.target.value);
      };
    return (
        <div>
            {/* Heading */}
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', mt: 2, mb: 2 }}>
                <Typography variant='h3'>Dashboard</Typography>
                <FormControl sx={{ minWidth: 100 }}>
                    <InputLabel id="period">Period</InputLabel>
                    <Select
                    labelId="period"
                    id="period-select"
                    value={period}
                    label="Period"
                    onChange={handleChange}
                    >
                        <MenuItem value={"Last Week"}>Last Week</MenuItem>
                        <MenuItem value={"Last Month"}>Last Month</MenuItem>
                        <MenuItem value={"Last Year"}>Last Year</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Paper sx={{ p: 3}}>
                <Typography variant='h4' mt={4}>
                    Welcome to Maluke's dashboard!
                </Typography>
                <Box sx={{ width: 1/2, mt: 2, mb: 2 }}>
                    <Typography variant='body1'>
                        React and Material UI dashboard that uses ChartJS for Graph library, ready to get you started with your project;
                    </Typography>
                </Box>
                <Button variant="contained" sx={{mb: 3, }} endIcon={<ArrowForwardIcon />}>Get Started</Button>
            </Paper>

            <Grid container spacing={2}>
                <Grid item lg={3} md={6} sm={12}>
                    <StatCard title={"Revenue"} value={"M 14,000"} percentage={"+11.97%"} period={period}/>
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StatCard title={"Average Transaction"} value={"M 325"} percentage={"+11.97%"} period={period}/>
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StatCard title={"Registrations"} value={"2,001"} percentage={"+11.97%"} period={period}/>
                </Grid>

                <Grid item lg={3} md={6} sm={12}>
                    <StatCard title={"Convertion Rate"} value={"55%"} percentage={"+11.97%"} period={period}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard