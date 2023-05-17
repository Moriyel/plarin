import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './headerContent.scss';

interface IHeaderContent {
  children: string,
}

export const HeaderContent:React.FC<IHeaderContent> = ({children}) => {
  return (
      <div className="headTitle">
        <Box className="headBox">
          <Typography variant="h2" component="div" gutterBottom fontFamily="emoji" letterSpacing="1px" marginBottom="0">
            {children}
          </Typography>
        </Box>
      </div>
  );
};
