import React, { useState } from 'react'
import { Paper, Typography, Button, Box, Grid } from '@mui/material'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LineChart from '../components/charts/LineChart';
import PieholeChart from '../components/charts/PieholeChart';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';

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

    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        datasets: [
            {
                label: "Revenue",
                backgroundColor: "#0288d1",
                borderColor: "#0288d1",
                data: [1000, 2000, 4000, 3000, 6000, 5000, 8000, 7000, 10000, 9000, 11500, 11000]
            }
        ]
    }
    
    const sourcesData = {
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                label: "Revenue Sources",
                backgroundColor: ["#0288d1", "#8888d1", "#ff88d1"],
                borderColor: ["#0288d1", "#8888d1", "#ff88d1"],
                data: [2500, 2000, 1500]
            }
        ]
    }
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

            <Grid container spacing={2}>
                <Grid item md={12} lg={7}>
                    <Card>
                        <CardHeader
                            title="Revenue"
                            subheader={"Shows revenue for the " + period}
                            sx={{ bgcolor: '#f5f5f5' }}
                        ></CardHeader>

                        <CardContent>
                            <LineChart graphData={revenueData}></LineChart>
                        </CardContent>
                        
                    </Card>
                    
                </Grid>

                <Grid item md={12} lg={5}>
                    <Card>
                        <CardHeader
                            title="Revenue Sources"
                            subheader={"Shows sources for the " + period}
                            sx={{ bgcolor: '#f5f5f5' }}
                        ></CardHeader>

                        <CardContent>
                            <PieholeChart graphData={sourcesData}></PieholeChart>
                        </CardContent>
                        
                    </Card>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard