import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

export const sagaMiddleware = createSagaMiddleware();

const middleware = () => {
    if (process.env.NODE_ENV === "production") {
        return compose(applyMiddleware(sagaMiddleware));
    } else {
        return compose(composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger())));
    }
}

export default middleware