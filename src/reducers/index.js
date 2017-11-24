import { combineReducers } from 'redux'
import searchByTitleReducer from './search-by-title-reducer'
import setSearchStringReducer from './set-search-string-reducer'
import setActiveLinkReducer from './set-active-link-reducer'
import setErrorMessageReducer from './set-error-message-reducer'
import resetAllReducer from './reset-all-reducer'

const omdbApp = combineReducers({
  homeState: searchByTitleReducer,
  homeSearchString: setSearchStringReducer,
  homePagerActiveLink: setActiveLinkReducer,
  homeError: setErrorMessageReducer,
  homeReset: resetAllReducer
})

export default omdbApp
