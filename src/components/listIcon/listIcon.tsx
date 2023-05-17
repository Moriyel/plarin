import React, { useLayoutEffect, useState } from 'react';
import { ListItemIcon } from '@mui/material';
import { ReactComponent as Star } from '../../assets/icons/asterisk.svg';

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

export const ListIcon: React.FC<IListIcon> = ({ data }) => {
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
    <ListItemIcon
    onClick={ isDisabled ? () => { addFavorite() } : undefined }
    >
      <Star className={!isDisabled ? 'starColor' : ''} width="25px" height="25px" />
    </ListItemIcon>
  );
};
