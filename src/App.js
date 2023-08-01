import React from 'react'
import { Navigation } from './common/Navigation'
import Movies from './features/Movies'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import { People } from './features/People'
import { toMovies, toPeople } from './routes'


function App() {
	return (
		<HashRouter>
			<Navigation />
			<Switch>
				<Route path={toMovies()}>
					<Movies />
				</Route>
				<Route path={toPeople()}>
					<People />
				</Route>
				<Route path='/'>
					<Redirect to={toMovies()} />
				</Route>
			</Switch>
		</HashRouter>
	)
}

export default App
