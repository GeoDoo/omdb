import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import ResultInfoPage from '../containers/ResultInfoPage'
import './Main.css'

const Main = () => {
	return (
		<main id="main" className="main">
			<Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/imdb-id/:id' component={ResultInfoPage}/>
	    </Switch>
		</main>
	)
}

export default Main