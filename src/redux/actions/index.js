import { ADD_ARTICLE, DATA_REQUESTED } from '../constants/action-types'

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function getData(url) {
  return { type: DATA_REQUESTED, payload: { url } }
}
