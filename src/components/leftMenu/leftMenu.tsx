import React, { useEffect, useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { NavLink, useSearchParams } from 'react-router-dom';
import { ReactComponent as Castle } from '../../assets/icons/castle2.svg';
import { ReactComponent as Star } from '../../assets/icons/starMenu2.svg';
import { ReactComponent as OpenMenu } from '../../assets/icons/openMenu.svg';
import IconButton from '@mui/material/IconButton';

import './leftMenu.scss';

const drawerWidth = 212;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  background: '#EFC82B',
  border: '1px solid rgba(0,0,0,0.3)',
  boxShadow: '-3px 0px 12px rgba(169,142,0,1) inset, 3px 3px 3px rgba(196,116,71,1) inset',
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  background: '#EFC82B',
  border: '1px solid rgba(0,0,0,0.3)',
  boxShadow: '-3px 0px 12px rgba(169,142,0,1) inset, 3px 3px 3px rgba(196,116,71,1) inset',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
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
}));



export const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [p, setP] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    if(searchParams.get("p")){
      setP(+(searchParams.get("p") || 1))
    }
  },[searchParams])
  const linksText = [
    { name: 'Главная страница', to: `/?p=${p}` },
    { name: 'Избранное', to: '/favourites' },
  ];

  const handlerDrawerIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Drawer variant="permanent" open={isOpen}>
      <div className="iconOpen">
      <IconButton onClick={handlerDrawerIsOpen}>{isOpen ? <div className="sizeOpen">X</div> : <OpenMenu className="sizeOpen" />}</IconButton>
      </div>
      <List>
        {linksText.map((text, index) => {
          return (
            <NavLink key={index} className="isActive" to={text.to}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isOpen ? 'initial' : 'center',
                    px: 2.5,
                    pl: '10px',
                    pr: '10px',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isOpen ? '10px' : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {text.name === 'Главная страница' && <Castle width="40px" height="40px" />}
                    {text.name === 'Избранное' && <Star width="38px" height="38px" />}
                  </ListItemIcon>
                  <ListItemText primary={<span>{text.name}</span>} sx={{ opacity: isOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
};
