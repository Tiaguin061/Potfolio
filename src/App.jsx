import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Routes from './Router/router'

import './styles/global.css'

function App() {
	return (
		<BrowserRouter>
			<div className="page">
				<Routes />
			</div>
		</BrowserRouter>
	);
}

export default App;
