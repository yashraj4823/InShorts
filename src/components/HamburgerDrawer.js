import * as React from 'react';
// import Box from '@mui/material/Box';
import clsx from "clsx";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories from '../data/category';
import makeStyles from '@emotion/styled';



const useStyles = makeStyles({
    list: {
        width: 200,
        PaddingLeft: 10,
        PaddingRight:5,
    },
    fullList: {
        width: "auto"
    },
});

export default function SwipeableTemporaryDrawer({setCategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >

      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem 
            style={{ height: 50, borderRadius: 3}} 
            button 
            key={text} 
            onClick={()=>setCategory(text)}
          >
              <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon></MenuIcon></Button>
          <ThemeProvider theme={darkTheme}>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
              PaperProps={{
                style: {
                  width: 200, // Set the drawer width here
                },
              }}
            >
            {list("left")}
            </SwipeableDrawer>
          </ThemeProvider>
          
        </React.Fragment>
    </div>
  );
}