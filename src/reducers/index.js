import {combineReducers} from 'redux';

import animeReducer from './anime.reducer';
import selectAnimeReducer from './selectAnime.reducer';

const RootReducer = combineReducers({animeList: animeReducer, activeAnime: selectAnimeReducer});
// reducer - branch of store - state, single info action - modifier of reducer -
// handler of single limb of whole application

export default RootReducer;