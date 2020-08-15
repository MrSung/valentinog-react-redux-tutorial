import { takeEvery, call, put } from 'redux-saga/effects'
import {
  DATA_REQUESTED,
  DATA_LOADED,
  API_ERROR,
} from '../constants/action-types'

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url)
    yield put({ type: DATA_LOADED, payload })
  } catch (error) {
    yield put({ type: API_ERROR, payload: error })
  }
}

function getData(url) {
  return fetch(url).then((response) => response.json())
}
