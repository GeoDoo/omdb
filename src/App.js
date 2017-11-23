import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = ({store}) => {
  return (
  	<Provider store={store}>
		  <BrowserRouter>
		    <div className="app">
		      <Header />
		      <Main />
		      <Footer />
		    </div>	    
		  </BrowserRouter>
	  </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App