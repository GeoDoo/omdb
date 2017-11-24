import { combineReducers } from 'redux'
import searchStringReducer from './search-string-reducer'
import moviesReducer from './movies-reducer'
import totalPagesReducer from './total-pages-reducer'
import activePageReducer from './active-page-reducer'
import errorMessageReducer from './error-message-reducer'

const omdbApp = combineReducers({
  searchString: searchStringReducer,
  movies: moviesReducer,
  totalPages: totalPagesReducer,
  currentPage: activePageReducer,
  errorMessage: errorMessageReducer
})

export default omdbApp
