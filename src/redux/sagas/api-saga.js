import { takeEvery, call, put } from 'redux-saga/effects'
import {
  DATA_REQUESTED,
  DATA_LOADED,
  API_ERROR,
} from '../constants/action-types'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga)
}

function* workerSaga() {
  try {
    const payload = yield call(getData)
    yield put({ type: DATA_LOADED, payload })
  } catch (error) {
    yield put({ type: API_ERROR, payload: error })
  }
}

function getData() {
  return fetch(`${API_BASE_URL}/posts`).then((response) => response.json())
}
