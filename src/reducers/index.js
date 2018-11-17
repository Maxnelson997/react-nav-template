import { combineReducers } from 'redux';

import cards from './cardsReducer';
import projectCards from './projectCardsReducer';

const rootReducer = combineReducers({
  cards,
  projectCards
});

export default rootReducer;