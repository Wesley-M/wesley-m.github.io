import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, keyframes } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer, SidebarContent, SidebarHeader } from './index.styles';
import { ThemeSwitcher } from '../../themes/ThemeSwitcher';

export function Sidebar () {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (status) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(status);
  };

  const spin = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(180deg);}
  `;

  return (
    <div>
      <>
        <IconButton color="secondary" onClick={toggleDrawer(true)}>
          <MenuRoundedIcon />
        </IconButton>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main',
              color: 'text.main',
            },
          }}
        >
          <SidebarContainer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <SidebarHeader>
              <ThemeSwitcher />
              <IconButton
                color="secondary"
                sx={{
                  '& svg': {
                    width: '1.2em',
                    height: '1.2em',
                  },
                  'animation': `${spin} 500ms linear 1`,
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </SidebarHeader>
            <SidebarContent>
              <List>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/">
                    <ListItemText primary="Portfolio" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/blog">
                    <ListItemText primary="Blog" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton href="/#/blog/who_am_i">
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton href="mailto:wesleymatteus99@gmail.com">
                    <ListItemText primary="Contact me" />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            </SidebarContent>
          </SidebarContainer>
        </SwipeableDrawer>
      </>
    </div>
  );
}
