import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, Title } from '../../common/Container'
import { Pagination } from '../../common/Pagination'
import { Tile } from '../../common/Tile'
import { useQueryParameter } from '../../queryParameters'
import searchQueryParamName from '../../searchQueryParamName'
import { fetchSearchResult, selectData, selectStatus, selectGenres } from '../browserSlice'
import { getPopularMovies } from './getPopularMovies'
import NoResults from '../States/NoResults'
import Loader from '../States/Loader'
import Error from '../States/Error'

const Movies = () => {
	const [popularMovies, setPopularMovies] = useState([])

	const query = useQueryParameter(searchQueryParamName)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchSearchResult(query))
	}, [query, dispatch])

	const data = useSelector(selectData)
	const status = useSelector(selectStatus)
	const genres = useSelector(selectGenres)
	const movies = data.results || []
	const totalResults = data.total_results; 

	useEffect(() => {
		const fetchPopularMovies = async () => {
			try {
				const response = await getPopularMovies()
				setPopularMovies(response)
			} catch (error) {
				console.error('Error fetching popular movies:', error)
			}
		}

		fetchPopularMovies()
	}, [])

	switch (status) {
		case 'loading':
			return (
				query ? 
				<Container>
					<Title>Search results for "{query}"</Title>
					<Loader/>
				</Container>
				: <Container>
					<Loader/>
				</Container>
			)
		case 'error':
			return <Container><Error/></Container>
		case 'success':
			if (!movies.length && query) {
				return (
					<Container>
						<Title>Sorry, there are no results for "{query}"</Title>
						<NoResults/>
					</Container>
				)
			} else if (query) {
				return (
					<>
						<Container>
							<Title>
								Search results for "{query}" ({totalResults})
							</Title>
							<Content>
								{movies.map(movie => (
									<Tile key={movie.id} movie={movie} genres={genres} />
								))}
							</Content>
						</Container>
						<Pagination />
					</>
				)
			} else {
				return (
					<>
						<Container>
							<Title>Popular movies</Title>
							<Content>
								{popularMovies.map(popMovie => (
									<Tile key={popMovie.id} movie={popMovie} genres={genres} />
								))}
							</Content>
						</Container>
						<Pagination />
					</>
				)
			}
		default:
			return null
	}
}

export default Movies
