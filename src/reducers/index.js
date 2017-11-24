import { combineReducers } from 'redux'
import searchByTitleReducer from './search-by-title-reducer'

const omdbApp = combineReducers({
  home: searchByTitleReducer
})

export default omdbApp
