import { AxiosResponse } from "axios";
import { IGetGameOfThronesHouses } from "../api/requests";

export const maxPageApi = (res:AxiosResponse<IGetGameOfThronesHouses[], any>) => {
  const  result = +(res.headers.link?.split(',')?.at(-1)?.split('=')[1]?.split('&')[0] || 0)
    return result;
  };/* обычно максимальное количество страниц возвращает бэк, в этом API возвращается вот таким способом */