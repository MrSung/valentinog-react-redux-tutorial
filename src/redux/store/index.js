import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import { forbiddenWordsMiddleware } from '../middleware'
import apiSaga from '../sagas/api-saga'

const initializeSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initializeSagaMiddleware),
  ),
)

initializeSagaMiddleware.run(apiSaga)

export default store
