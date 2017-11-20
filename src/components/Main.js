import React from 'react'
import './Main.css'

const Main = (props) => {
	return (
		<main id="main" className="main">
			{props.children}
		</main>
	)
}

export default Main