import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

export const sagaMiddleware = createSagaMiddleware();

const middleware = (history) => {
    if (process.env.NODE_ENV === "production") {
        return applyMiddleware(sagaMiddleware, routerMiddleware(history));
        // for debugging purposes when the testers find a bug
        // middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger(), connectRouter(history)));
    } else {
        return composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(history)));
    }
}

// if (process.env.NODE_ENV === "production") {
//     middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));
//     // for debugging purposes when the testers find a bug
//     // middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger(), connectRouter(history)));
// } else {
//     middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(history)));
// }

export default middleware