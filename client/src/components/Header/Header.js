import React from 'react'
import Menu from './Menu'
import Searchbar from './Searchbar'
import User from './User'

const Header = () => {
	return (
		<header>
			<Menu/>
			<Searchbar/>
			<User/>
		</header>
	)
}

export default Header
