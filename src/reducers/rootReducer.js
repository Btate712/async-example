import { combineReducers } from 'redux';
import astronautsReducer from './astronautsReducer';

const rootReducer = combineReducers({
  astronauts: astronautsReducer
});

export default rootReducer;
