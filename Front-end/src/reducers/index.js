import {combineReducers} from 'redux';

import DataReducer from "./songs.reducer";

const rootReducer = combineReducers({
  songs: DataReducer
});

export default rootReducer;
