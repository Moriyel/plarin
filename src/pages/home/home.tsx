import React, { useEffect, useState } from 'react';
import { IGetGameOfThronesHouses, getHome } from '../../api/requests';
import { HeaderContent } from '../../components/headerContent';
import { ButtonSelect } from '../../components/ui/buttonSelect/buttonSelect';
import { CardBodyContent } from '../../components/cardBodyContent';
import { ListBodyContent } from '../../components/listBodyContent';
import { Pagination } from '../../components/ui/pagination';
import defaultOptionsStore from '../../stores/defaultOptionsStore';
import { maxPageApi } from '../../helper/maxPageApi';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Load } from '../../assets/icons/loading.svg';
import './home.scss';

interface IgameOfThronesHouses {
  maxPages: number;
  houses: IGetGameOfThronesHouses[];
}

export const Home = () => {
  const isSelected = JSON.parse(localStorage.getItem('content') || 'false');
  const { pageSize } = defaultOptionsStore;
  
  const [numberPage, setNumberPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [contentSelected, setContentSelected] = useState(isSelected);
  const [gameOfThronesHouses, setGameOfThronesHouses] = useState<IgameOfThronesHouses | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    searchParams.get('p') && setNumberPage(+(searchParams.get('p') || 0));
    setLoading(true);
    getHome(numberPage, pageSize)
      .then(res => {
        const upData = {
          houses: [...res.data],
          maxPages: maxPageApi(res),
        };
        setGameOfThronesHouses(upData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [numberPage, pageSize, searchParams]);

  const saveNumberPage = (el: number) => {
    setSearchParams({ p: `${el}` });
    setNumberPage(el);
  };

  if (loading || !gameOfThronesHouses) {
    return <Load width="35" height="35" />;
  }


  return (
    <div className="body">
      <div className="contentController">
        <ButtonSelect selected={contentSelected} setSelected={setContentSelected} />
      </div>
      <HeaderContent>Дом</HeaderContent>
      {contentSelected && (
        <div className="cardContainer">
          {gameOfThronesHouses.houses.map((home, index) => {
            return (
              <div key={index}>
                <CardBodyContent
                  data={{
                    name: home.name,
                    coatOfArms: home.coatOfArms,
                    words: home.words,
                    url: home.url
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      {!contentSelected && (
        <div className="listContainer">
          {
            <ListBodyContent
              data={gameOfThronesHouses.houses.map(home => {
                return {
                  name: home.name,
                  coatOfArms: home.coatOfArms,
                  words: home.words,
                  url: home.url
                };
              })}
            />
          }
        </div>
      )}
      {gameOfThronesHouses.houses.length >= pageSize && (
        <div className="pgnContainer">
          <Pagination
            numberPage={numberPage}
            setNumberPage={saveNumberPage}
            count={gameOfThronesHouses?.maxPages ? gameOfThronesHouses?.maxPages : 0}
          />
        </div>
      )}
    </div>
  );
};
