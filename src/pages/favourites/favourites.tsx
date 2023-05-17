import React, { useEffect, useState } from 'react';
import { List, ListItemIcon } from '@mui/material';
import { HeaderContent } from '../../components/headerContent';
import { ReactComponent as Basket } from '../../assets/icons/delete.svg';
import { Pagination } from '../../components/ui/pagination';
import defaultOptionsStore from '../../stores/defaultOptionsStore';
import { ListDom } from '../../components/listDom';
import { countPage } from '../../helper/countPage';
import './favourites.scss';
import { IsArchive } from '../../components/isArchive';


interface IHouseFavourites {
  name: string;
  coatOfArms: string;
  words: string;
  url: string;
}

export const Favourites = () => {
  const { pageSize } = defaultOptionsStore;
  const [housesFavourites, setHousesFavourites] = useState<IHouseFavourites[]>([]);
  const [numberPage, setNumberPage] = useState(1);
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('houses') || '[]');
    setHousesFavourites(favorites);
  }, []);

  const deleteHome = (el: IHouseFavourites) => {
    const deleteHome = [...housesFavourites.filter(home => home.name !== el.name)];
    localStorage.setItem('houses', JSON.stringify(deleteHome));
    setHousesFavourites(deleteHome);
    if (housesFavourites?.length === pageSize + 1) {
      setNumberPage(1);
    }
    if((countPage(housesFavourites, pageSize) as IHouseFavourites[][])[numberPage - 1]?.length === 1){
      setNumberPage(numberPage - 1);
    }
  };

  return (
    <div className="body">
      <div className="headFavor">
        <HeaderContent>Избранное</HeaderContent>
      </div>
      <List sx={{ width: '100%', marginBottom: '20px' }} aria-label="contacts">
        {(countPage(housesFavourites, pageSize) as IHouseFavourites[][])[numberPage - 1]?.map((el, index) => {
          return (
            <ListDom name={el.name} coatOfArms={el.coatOfArms} words={el.words} key={index}>
              <IsArchive url={el.url}/>
              <ListItemIcon sx = {{ zIndex: "1000" }}
                onClick={() => {
                  deleteHome(el);
                }}
              >
                <Basket width="25px" height="25px" />
              </ListItemIcon>
            </ListDom>
          );
        })}
      </List>
      <div className="pgnContainer">
        {!(countPage(housesFavourites, pageSize).length === 1) && (
          <Pagination
            numberPage={numberPage}
            setNumberPage={(el)=>{setNumberPage(el)}}
            count={countPage(housesFavourites, pageSize).length}
          />
        )}
      </div>
    </div>
  );
};
