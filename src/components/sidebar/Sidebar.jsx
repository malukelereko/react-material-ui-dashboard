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
import GridViewIcon from '@mui/icons-material/GridView';
import AppsIcon from '@mui/icons-material/Apps';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

// Componets
import Navbar from "../navbar/Navbar";

// CSS
import './Sidebar.css';
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
    backgroundColor: '#0288d1',
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
            { icon &&
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            }
          
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
                          CORE
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
                          CUSTOM
                        </ListSubheader>
                    }
                >
                  <DropdownItem icon={<GridViewIcon />} text="Pages">
                    <SidebarItem link="/daily"  text="Account"></SidebarItem>
                    <SidebarItem link="/weekly" text="Authentication"></SidebarItem>
                    <SidebarItem link="/monthly" text="Error"></SidebarItem>
                  </DropdownItem>

                  <DropdownItem icon={<AppsIcon />} text="Applications">
                    <SidebarItem link="/daily" text="Knowledge Base"></SidebarItem>
                    <SidebarItem link="/weekly" text="User Management"></SidebarItem>
                    <SidebarItem link="/monthly" text="Posts Management"></SidebarItem>
                  </DropdownItem>
                </List>

                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          UI TOOLKIT
                        </ListSubheader>
                    }
                >
                    <SidebarItem link="/" icon={<ViewCompactIcon />} text="Layout"></SidebarItem>

                    <SidebarItem link="/" icon={<AccountTreeIcon />} text="Components"></SidebarItem>                  
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar