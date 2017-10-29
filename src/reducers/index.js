import {combineReducers} from 'redux';

import animeReducer from './anime.reducer';
import selectAnimeReducer from './selectAnime.reducer';

const RootReducer = combineReducers({animeList: animeReducer, selectAnimeReducer});

export default RootReducer;