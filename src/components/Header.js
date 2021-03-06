import React from 'react'
import logo from '../assets/images/omdb.png'
import './Header.css'

const Header = () => {
	return (
		<header className="header">
			<img className="logo" src={logo} alt="The Open Movie Database" />
			<h1>OMDB search tool</h1>
		</header>
	)
}

export default Header