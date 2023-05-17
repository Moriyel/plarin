import axios from 'axios';

const API_URL = 'https://anapioficeandfire.com/api/houses';

export interface IGetGameOfThronesHouses {
  ancestralWeapons: string[];
  cadetBranches: string[];
  coatOfArms: string;
  currentLord: string;
  diedOut: string;
  founded: string;
  founder: string;
  heir: string;
  name: string;
  overlord: string;
  region: string;
  seats: string[];
  swornMembers: string[];
  titles: string[];
  url: string;
  words: string;
}

export const getHome = (page: number, pageSize: number) => axios.get<IGetGameOfThronesHouses[]>(
  `${API_URL}`, 
  { params: { page, pageSize } }
  );
