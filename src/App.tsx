import { BrowserRouter} from 'react-router-dom'
import {Routes} from './Router'

import GlobalStyle from './styles/global';

export function App() {
	return (
		<BrowserRouter>
			<Routes />
			<GlobalStyle />
		</BrowserRouter>
	);
}