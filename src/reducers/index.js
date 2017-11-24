import { combineReducers } from 'redux'
import searchStringReducer from './search-string-reducer'
import moviesReducer from './movies-reducer'
import totalPagesReducer from './total-pages-reducer'
import activePageReducer from './active-page-reducer'
import errorMessageReducer from './error-message-reducer'
import resultInfoPageReducer from './result-info-page-reducer'
import redirectReducer from './redirect-reducer'

const omdbApp = combineReducers({
  searchString: searchStringReducer,
  movies: moviesReducer,
  totalPages: totalPagesReducer,
  currentPage: activePageReducer,
  errorMessage: errorMessageReducer,
  resultInfoPage: resultInfoPageReducer,
  redirect: redirectReducer
})

export default omdbApp
