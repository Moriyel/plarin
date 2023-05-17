import React, { useLayoutEffect, useState } from 'react';
import { ToggleButton } from '@mui/material';
import { ReactComponent as Star } from '../../assets/icons/asterisk.svg';
import './cardIcon.scss';

interface IFavoriteHome {
  name: string;
  coatOfArms: string;
  words: string;
  url: string;
}

interface IListIcon {
  data: IFavoriteHome;
}

const isDisabledHouse = (el: IFavoriteHome) =>
  !(JSON.parse(localStorage.getItem('houses') || '[]') as IFavoriteHome[]).filter((house: IFavoriteHome) => {
    return house.name === el.name;
  }).length;

export const CardIcon: React.FC<IListIcon> = ({ data }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useLayoutEffect(() => {
    setIsDisabled(isDisabledHouse(data));
  }, [data]);

  const addFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('houses') || '[]');
    localStorage.setItem(
      'houses',
      JSON.stringify([
        ...favorites,
        {
          name: data.name,
          coatOfArms: data.coatOfArms,
          words: data.words,
          url: data.url
        },
      ]),
    );
    setIsDisabled(isDisabledHouse(data));
  };

  return (
    <ToggleButton
      sx={{
        width: '30px',
        height: '30px',
        zIndex: '1000',
        padding: '4px',
        border: 'none',
        bgcolor: 'none',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
      }}
      color="primary"
      value="check"
      onClick={ isDisabled ? () => { addFavorite() } : undefined }
    >
      <Star className={!isDisabled ? 'starColor' : ''} width="25px" height="25px" />
    </ToggleButton>
  );
};
