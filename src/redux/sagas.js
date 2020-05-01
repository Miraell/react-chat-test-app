import { takeLatest, call, put } from 'redux-saga/effects';

const DELAY_MS = 1000;
const fakeDelay = (t, m) => new Promise(res => setTimeout(() => res(m), t));

function fakePost(message) {
    return fakeDelay(DELAY_MS, message);
}

function* sendMessage(action) {
    try {
      const message = yield call(fakePost, action.message);
      yield put({
          type: "MESSAGE_SUCCESS",
          message
      });
    } catch (e) {
        console.log(e);
    }
}
export default function* messageSaga() {
  yield takeLatest('MESSAGE_POST', sendMessage);
}
