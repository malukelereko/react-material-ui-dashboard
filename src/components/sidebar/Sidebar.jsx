import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Divider, Collapse, IconButton } from '@mui/material';

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SpeedIcon from '@mui/icons-material/Speed';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PieChartIcon from '@mui/icons-material/PieChart';
import FactoryIcon from '@mui/icons-material/Factory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LogoutIcon from '@mui/icons-material/Logout';

// Componets
import Navbar from "../navbar/Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

const DropdownItem = (props) => {
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
          setOpen(!open);
      };

      return (
        <div>
            <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pl: 4 }} disablePadding>  
                    {props.children}
                </List>
            
            </Collapse>
        </div>
      )
}

const SidebarItem = ({link, icon, text}) => {

    return (
      <NavLink to={link}>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItemButton>
      </NavLink>
      
    )
}


const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Navbar open={open} setOpen={handleDrawerOpen} ></Navbar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </DrawerHeader>
                <Divider />

                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Core
                        </ListSubheader>
                      }
                >

                  <SidebarItem link="/daily" icon={<AnalyticsIcon />} text="Dashboard"></SidebarItem>
                  
                  <DropdownItem icon={<CalendarMonthIcon />} text="Reports">
                    <SidebarItem link="/daily" icon={<TodayIcon />} text="Daily"></SidebarItem>
                    <SidebarItem link="/weekly" icon={<CalendarViewWeekIcon />} text="Weekly"></SidebarItem>
                    <SidebarItem link="/monthly" icon={<CalendarViewMonthIcon />} text="Monthly"></SidebarItem>
                  </DropdownItem>
                  
                </List>
                
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Performance
                        </ListSubheader>
                    }
                >
                  <DropdownItem icon={<GroupIcon />} text="Users">
                    <SidebarItem link="/daily" icon={<GroupAddIcon />} text="Registered"></SidebarItem>
                    <SidebarItem link="/weekly" icon={<PeopleOutlineIcon />} text="Active"></SidebarItem>
                    <SidebarItem link="/monthly" icon={<StorefrontIcon />} text="Agents & Merc"></SidebarItem>
                  </DropdownItem>

                  <DropdownItem icon={<AccountBalanceIcon />} text="Transactions">
                    <SidebarItem link="/daily" icon={<SpeedIcon />} text="Velocity & Dem."></SidebarItem>
                    <SidebarItem link="/weekly" icon={<MonetizationOnIcon />} text="Pricing"></SidebarItem>
                    <SidebarItem link="/monthly" icon={<PieChartIcon />} text="Market Share"></SidebarItem>
                    <SidebarItem link="/monthly" icon={<FactoryIcon />} text="Ind. Averages"></SidebarItem>
                  </DropdownItem>

                  <SidebarItem link="/" icon={<CurrencyExchangeIcon />} text="Revenue & ARPU"></SidebarItem>

                  <SidebarItem link="/" icon={<TrendingUpIcon />} text="Cohort Analysis"></SidebarItem>
                  
                </List>

                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Account
                        </ListSubheader>
                    }
                >
                  <SidebarItem link="/" icon={<LogoutIcon />} text="Logout"></SidebarItem>
                  
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar