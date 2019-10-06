import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routing from "routing";

import store, { persistor } from "Store";

const RootProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routing />
            </PersistGate>
        </Provider>
    )
}

export default RootProvider;
