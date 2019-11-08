import { handleActions } from "redux-actions";

// import {
//     clickButton,
//     clearAll
// } from "containers/Home/Action";
import { callPingAPI } from 'containers/Home/Action'

const homeDefaultState = {
    data: {}
}

const homeReducer = handleActions({
    // [clickButton]: (state, action) => ({
    //     ...state,
    //     firstName: action.payload.firstName,
    //     lastName: action.payload.lastName
    // }),
    // [clearAll]: () => ({
    //     ...homeDefaultState
    // })
    [callPingAPI]: (state, action) => ({
        ...state,
        data: action.payload
    })
}, homeDefaultState)

homeReducer.key = "home";

export default homeReducer;