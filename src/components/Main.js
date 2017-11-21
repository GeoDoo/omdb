import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import './Main.css'

const Main = () => {
	return (
		<main id="main" className="main">
			<Switch>
	      <Route exact path='/' component={Home}/>
	    </Switch>
		</main>
	)
}

export default Main