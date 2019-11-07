import { combineReducers } from "redux";

import homeReducer from 'containers/Home/Reducer';

const reducers = () => combineReducers({
    [homeReducer.key]: homeReducer,
  })

export default reducers;