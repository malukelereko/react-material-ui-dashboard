import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Profile = (props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Billing" {...a11yProps(1)} />
                  <Tab label="Security" {...a11yProps(2)} />
                  <Tab label="Notifications" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={5}>
                    <Card>
                    <CardHeader title="Profile" sx={{ bgcolor: '#f5f5f5' }}></CardHeader>
                    <CardMedia 
                      component="img" height="194" 
                      image='https://mui.com/static/images/cards/paella.jpg'
                      alt='Profile Picture'
                    >
                    </CardMedia>
                    <CardContent>
                      <Button variant='contained'>Upload new image</Button>
                    </CardContent>
                  </Card>
                  </Grid>

                  <Grid item xs={12} md={7}>
                    <Card>
                      <CardHeader title="Account Details" sx={{ bgcolor: '#f5f5f5' }}></CardHeader>
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="username"
                              label="Username"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="name"
                              label="First name"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="surname"
                              label="Surname"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="location"
                              label="Location"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="email"
                              label="Email address"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="phone"
                              label="Phone number"
                              fullWidth
                            />
                          </Grid>
                          
                        </Grid>
                        <Button variant='contained' sx={{ mt: 4 }}>Save changes</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Billing
            </TabPanel>
            <TabPanel value={value} index={2}>
                Security
            </TabPanel>
            <TabPanel value={value} index={3}>
                Notifications
            </TabPanel>
        </Box>
    )
}

export default Profile