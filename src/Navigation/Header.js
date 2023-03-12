import React   from 'react';
import {  Drawer, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ListIcon from '@mui/icons-material/List';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 140;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  

function Header(props){
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

return(
<React.Fragment>
    <AppBar open={open} position="fixed" color='transparent' elevation={0}>
    <Toolbar 
        sx={{ borderRadius: 12 ,backgroundColor: '#545454', opacity: 0.8, mt:1, ml:3, mr:3}}
    >       
    <IconButton 
    onClick={handleDrawerOpen}
    edge="start"  aria-label="menu" sx={{ mr: 2, color:'#FFD700' }}>
        <MenuIcon />
    </IconButton>
        <Typography
        component="h2"
        variant="h5"
        color="#FFD700"
        align="center"
        noWrap 
        sx={{ flex: 1,
          justifyContent: 'space-between' , fontWeight: 800, 
          fontFamily: 'Solitreo', fontSize: 30, pt: 1 }}
        >
         <Link color="inherit" href="#" sx={{ textDecoration: 'none'}}>
           JanLash
         </Link>
        </Typography>

    </Toolbar>
    </AppBar>
             
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton>
                <ListItemIcon>
                 <HomeIcon />
                </ListItemIcon>
                <Link href="#" sx={{color:"#545454", textDecoration:"none"}}>
                  Home
                </Link>
          </ListItemButton>
          <ListItemButton>
                <ListItemIcon>
                 <MailIcon />
                </ListItemIcon>
                <Link href="#contact" sx={{color:"#545454", textDecoration:"none"}}>
                  Contact
                </Link>
          </ListItemButton>
          <ListItemButton>
                <ListItemIcon>
                 <ListIcon />
                </ListItemIcon>
                <Link href="#services" sx={{color:"#545454", textDecoration:"none"}}>
                  Services
                </Link>
          </ListItemButton>
          <ListItemButton>
                <ListItemIcon>
                 <ShoppingBasketIcon />
                </ListItemIcon>
                <Link href="#styles" sx={{color:"#545454", textDecoration:"none"}}>
                  Styles
                </Link>
          </ListItemButton>
        </List>
      </Drawer>
        </React.Fragment>
    );
}

export default Header;