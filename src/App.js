import React from 'react'
import { Navigation } from './common/Navigation'
import Movie from './features/Movie'
import Movies from './features/Movies'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import People from './features/People'
import { toMovie, toMovies, toPeople } from './routes'

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Switch>
				<Route path={toMovie()}>
					<Movie />
				</Route>
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
