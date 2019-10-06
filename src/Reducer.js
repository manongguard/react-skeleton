import { combineReducers } from "redux";

// import { reducer as formReducer } from "redux-form";
import { connectRouter } from 'connected-react-router'

import homeReducer from 'Home/Reducer';

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    [homeReducer.key]: homeReducer,
  })

export default reducers;