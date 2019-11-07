import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import reducers from "Reducer";
import middleware, { sagaMiddleware } from "Middleware";
import saga from "Saga";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: []
}

const rootReducer = persistReducer(persistConfig, reducers())
const store = createStore(rootReducer, middleware());
export const persistor = persistStore(store);

sagaMiddleware.run(saga);

export default store;