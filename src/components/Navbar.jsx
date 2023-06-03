import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import avatar from "./images/avatar.avif";
import { makeStyles } from "@mui/styles";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ArticleIcon from "@mui/icons-material/Article";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import shape from "./images/shape.webp";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Dashboard from "./Dashboard";
import { AppBar, Collapse, Drawer, Hidden, ListSubheader, useMediaQuery } from "@mui/material";
import SensorsIcon from '@mui/icons-material/Sensors';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import Cookies from 'universal-cookie'
const drawerWidth = 280;





const useStyles = makeStyles({
  avatar: {
    height: "60x",
    width: "60px",
    borderRadius: "50%",
    float: "right",
  },
  navbar: {
    boxShadow: "none",
  },
  drawer: {
   background:'blue'
  },

  drawerBtns: {
    height: "14%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "gray",
    },
    image: {
      height: "40px",
      width: "40px",
      backgroundImage: `url${shape}`,
    },
  },
});
const Navbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const handleClick = (collapse) => {
      setOpen(collapse)
    if(collapse===open){
      setOpen(null)
    }
  };

  const handleClick1=(inbox)=>{
    setOpen(inbox)
    if(inbox===open){
      setOpen(null)
    }
  }
  const handleClick2 = (connect) => {
    setOpen(connect)
  if(connect===open){
    setOpen(null)
  }
};
const handleClick3 = (customer) => {
  setOpen(customer)
if(customer===open){
  setOpen(null)
}
};
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  localStorage.getItem('login')
sessionStorage.getItem('login')
const navigate=useNavigate()

 
  const drawer = (
    <div>
      <Toolbar />
      <Box >
            <Typography sx={{color:'orange',fontWeight:'600'}}>CRM.IO</Typography>{" "}
          </Box>
      
      <List>
           <ListItem 
          
              onClick={() => navigate("/dashboard")}
              disablePadding
              
            >
              <ListItemButton
                
            
              >
                <ListItemIcon
              
                >
                  <QrCode2Icon />
                </ListItemIcon>
                Dashboard{" "}
              </ListItemButton>
            </ListItem>
          </List>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
          <ListItemButton onClick={()=>handleClick('collapse')}>
        <ListItemText primary="Management" />
        {open==='collapse'? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==='collapse'? true : false } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Document" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <ContentPasteIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
            
          </ListItemButton>
          </List>

      </Collapse>
      </List>
          
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
          <ListItemButton onClick={()=>handleClick1('inbox')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ==='inbox'? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==='inbox'? true : false} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <OnlinePredictionIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </List>

      </Collapse>
      </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton
              >
                <ListItemIcon
                 
                >
                  <ContentPasteIcon />
                </ListItemIcon>
                Contact{" "}
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding >
              <ListItemButton
               
              >
                <ListItemIcon
                  
              
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
                Prospect{" "}
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding >
              <ListItemButton
               
              >
                <ListItemIcon
                 
                >
                  <AutorenewIcon />
                </ListItemIcon>
                WorkFlow{" "}
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-headr"
    >
          <ListItemButton onClick={()=>handleClick2('connect')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Connections" />
        {open ==='connect'? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==='connect'? true : false} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <MapsUgcIcon />
            </ListItemIcon>
            <ListItemText primary="chat integration" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Marketing automation" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText primary="Email integration" />
          </ListItemButton>
          </List>

      </Collapse>
      </List>
          
          <Divider />
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
          <ListItemButton onClick={()=>handleClick3('customer')}>
        <ListItemIcon>
       < SensorsIcon/>
        </ListItemIcon>
        <ListItemText primary="Customers" />
        {open ==='customer'? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==='customer'? true : false} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <PivotTableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <ManageHistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Maintainance" />
            
          </ListItemButton>
          </List>

      </Collapse>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
         className="nav">
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" noWrap component="div">
              Overview
             </Typography>
            <img
              style={{ position: "absolute", right: "53px" }}
              className={classes.avatar}
              src={avatar}
              alt=""
            />
            
          <NotificationsNoneIcon
              sx={{
                position: "absolute",
                right: "163px",
                height: "40px",
                width: "40px",
              }}
            />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
        classes={{drawer:classes.drawer}}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
          
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,  } }}
      >
        <Toolbar />

      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  
  window: PropTypes.func,
};
  
  

export default Navbar;
