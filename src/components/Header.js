import React from 'react'
import logo from '../assets/images/omdb.png'

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="The Open Movie Database" />
		</header>
	)
}

export default Header