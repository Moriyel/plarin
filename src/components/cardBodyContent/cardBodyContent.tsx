import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardIcon } from '../cardIcon';

interface ICardBodyContent {
  data: {
    name: string;
    coatOfArms: string;
    words: string;
    url: string;
  };
}
export const CardBodyContent: React.FC<ICardBodyContent> = ({ data }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 310,
        flex: '0 0 33.333333%',
        gap: '32px',
        WebkitBoxShadow: 'none',
        boxShadow: '6px 6px 10px rgba(75, 54, 7, 0.25) inset, -6px -6px 10px rgba(75, 54, 7, 0.18) inset',
        bgcolor: '#fae6c0',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <CardActions sx={{ padding: '10px 12px 0', justifyContent: 'flex-end' }}>
        <CardIcon data={data} />
      </CardActions>
      <CardContent sx={{ padding: '22px', position: 'relative', top: '-48px' }}>
        <Typography
          gutterBottom
          fontFamily="emoji"
          fontSize="2.5rem"
          color="#534714"
          padding="0 18px"
          variant="h5"
          component="div"
        >
          {data.name}
        </Typography>
        <Typography component={'div'} variant="body2" color="#534714d9" fontFamily="emoji" fontSize="1.24rem">
          <div>{data.coatOfArms}</div>
          <div>{data.words}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};
