import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
// import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink as Link } from 'react-router-dom'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CallIcon from '@mui/icons-material/Call';
import './nav.css'
import Info from '@mui/icons-material/Info';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));







function Navbar() {




  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ background: '#FFE4E1', color: 'black' }} position="fixed" open={open}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{ fontFamily: 'Noto Serif, cursive' }} variant="h6" noWrap component="div">
              Gowellness Salon & Spa
             
            </Typography>
            <Typography style={{ marginLeft: 'auto' }} variant="p" noWrap component="div">
             
            <span class="topmob inline-flex sm:mr-auto sm:mt-0 mt-2 justify-center sm:justify-end" >
               
                <a class="text-gray-500">
                  <svg fill="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              
                <a class="ml-3 text-gray-500">
                  <svg fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              
              </span>
              <ul className="navul">
                <li className='navli'> <a style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='/contact'>Contact Us</Link></a></li>
                <li className='navli'> <a style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='/safety'>Safety Check</Link></a></li>
                <li className='navli'> <a style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='/about'>About Us</Link></a></li>
                <li className='navli'> <a style={{ fontFamily: 'Noto Serif, cursive' }} class="a" ><Link to='/services'>Services</Link></a></li>
                <li className='navli'> <a style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='/'>Home</Link></a></li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer style={{backgroundColor:'black' }}
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
          <button> <DrawerHeader onClick={handleDrawerClose} style={{ background: '#FFE4E1', color: 'black' }}>
            <p style={{ fontFamily: 'Noto Serif, cursive', marginLeft: 'auto', color: 'white' }}> MENU</p>
            <IconButton style={{ color: 'black' }} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader> </button>
          <Divider />
          {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

          <List>
            <Link onClick={handleDrawerClose} to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to='/services'>
              <ListItem button>
                <ListItemIcon>
                  <CleaningServicesIcon />
                </ListItemIcon>
                <ListItemText primary='Services' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to="/about">
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About Us' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to="/safety">
              <ListItem button>
                <ListItemIcon>
                  <HealthAndSafetyIcon />
                </ListItemIcon>
                <ListItemText primary='Safety Check' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to="/contact">
              <ListItem button>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary='Contact Us' />
              </ListItem>
            </Link>
          </List>
          <Divider />

        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        </Main>
      </Box>
    </div>
  )
}

export default Navbar