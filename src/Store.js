import { createStore } from "redux";
import { persistStore } from "redux-persist"
import { createBrowserHistory } from 'history'
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

import reducers from "Reducer";
import middleware, { sagaMiddleware } from "Middleware";
import saga from "Saga";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: []
}

export const history = createBrowserHistory()
const rootReducer = persistReducer(persistConfig, reducers(history))
const store = createStore(rootReducer, middleware(history));
export const persistor = persistStore(store);

sagaMiddleware.run(saga);

export default store;