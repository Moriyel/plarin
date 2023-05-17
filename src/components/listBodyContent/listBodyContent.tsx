import React from 'react';
import List from '@mui/material/List';
import { ListIcon } from '../listIcon/listIcon';
import { ListDom } from '../listDom';

interface IListBodyContent {
  data: {
    name: string;
    coatOfArms: string;
    words: string;
    url: string;
  }[];
}

export const ListBodyContent: React.FC<IListBodyContent> = ({ data }) => {
  return (
    <List sx={{ width: '100%', marginBottom: '20px' }} aria-label="contacts">
      {data.map((el, index) => {
        return (
          <ListDom name={el.name} coatOfArms={el.coatOfArms} words={el.words} key={index}>
            <ListIcon data={el} />
          </ListDom>
        );
      })}
    </List>
  );
};
