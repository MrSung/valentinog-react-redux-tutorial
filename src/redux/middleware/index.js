import { ADD_ARTICLE } from '../constants/action-types'

const forbiddenWords = ['spam', 'money']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case ADD_ARTICLE:
          const foundWords = forbiddenWords.filter((word) =>
            action.payload.title.includes(word),
          )
          return foundWords.length
            ? dispatch({ type: 'FOUND_BAD_WORD' })
            : next(action)
        default:
          return next(action)
      }
    }
  }
}
