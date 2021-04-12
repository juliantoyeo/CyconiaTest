import React from 'react'
import { connect } from 'react-redux'
import './App.css';
import Reservation from './components/Reservation'

function App() {
	return (
		<div className="App">
			<Reservation />
		</div>
	);
}

export default connect(null, null)(App)