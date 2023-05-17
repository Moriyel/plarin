import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface IListDom {
  name: string;
  coatOfArms: string;
  words: string;
}

export const ListDom: React.FC<IListDom> = ({ children, name, coatOfArms, words }) => {
  return (
    <ListItem
    sx={{
      marginBottom: '10px',
      boxShadow: '6px 6px 10px rgba(75, 54, 7, 0.35) inset, -6px -6px 10px rgba(75, 54, 7, 0.35) inset',
    }}
    disablePadding
  >
    <ListItemButton sx={{ height: '120px' }}>
      <ListItemText
        sx={{ height: '100%', display: 'flex', }}
        primary={
          <>
            <Typography
              mb="0"
              gutterBottom
              fontFamily="emoji"
              fontSize="1.8rem"
              color="#534714"
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography component={'div'} variant="body2" color="#534714d9" fontFamily="emoji" fontSize="1.075rem" maxHeight="60px" overflow="auto">
              <div>{coatOfArms}</div>
              <div>{words}</div>
            </Typography>
          </>
        }
      />
      {children}
    </ListItemButton>
  </ListItem>
  );
};