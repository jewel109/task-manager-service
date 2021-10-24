import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
	return (
		<div >
			<Header />
			<div className="main-and-sidebar">
				<Sidebar/>
				<Main/>
			</div>
		</div>
	)
}

export default Home
