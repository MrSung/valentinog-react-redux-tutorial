import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types'

const initialState = {
  articles: [],
  remoteArticles: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case DATA_LOADED:
      const [items] = [...state.remoteArticles, action.payload]
      return {
        ...state,
        remoteArticles: items,
      }
    default:
      return state
  }
}

export default rootReducer
