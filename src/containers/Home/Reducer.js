import { handleActions } from "redux-actions";

// import {
//     clickButton,
//     clearAll
// } from "containers/Home/Action";

const homeDefaultState = {
    firstName: '',
    lastName: ''
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
}, homeDefaultState)

homeReducer.key = "home";

export default homeReducer;