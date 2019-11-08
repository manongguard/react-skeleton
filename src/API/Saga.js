import { put, takeLatest, all, call, takeLeading } from 'redux-saga/effects'
import { callGetAPI, callPostAPI } from 'API'

import sagaCall, { callPingAPI } from 'containers/Home/Action'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* doCallPingAPI() {
    try {
        yield delay(1000);
        let { data } = yield callGetAPI('/ping');
        yield put(callPingAPI({ data }));

    } catch (e) {
        console.error('batman', e)
    }

}

export default function* saga() {
    yield all([
        // onDoCallPingAPI,
        takeLatest(sagaCall.onCallPingAPI, doCallPingAPI)
    ])
}