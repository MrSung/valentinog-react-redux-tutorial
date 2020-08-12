import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function getData() {
  return (dispatch) =>
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: DATA_LOADED, payload: json })
      })
}
