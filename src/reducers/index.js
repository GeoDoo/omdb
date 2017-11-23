import { combineReducers } from 'redux'
import searchByTitleReducer from './search-by-title-reducer'

const omdbApp = combineReducers({
  movies: searchByTitleReducer
})

export default omdbApp
