import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[] //parent platform is an array of objects where each object has a property called platform of type platform
    metacritic: number;
  }



const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
  params: {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id, 
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  }}, 
  [gameQuery]);

export default useGames;