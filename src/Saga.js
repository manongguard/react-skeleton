import { all, spawn } from "redux-saga/effects"

import HomeSaga from "containers/Home/Saga"
import APISaga from "API/Saga"
//sagas
// import { saga as apiSaga } from "API";
// import { saga as socketSaga } from "socket";

export default function* saga() {
  yield all([
    // spawn(searchResultSaga),
    spawn(HomeSaga),
    spawn(APISaga)
  ])
}
