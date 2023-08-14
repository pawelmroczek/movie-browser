import React from 'react'
import { useParams } from 'react-router-dom';
import MovieBanner from './Banner/index'
import MovieTile from './MovieTile'
import { Content } from './styled'
import People from './People'
import useCredits from './People/useCredits';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParameter } from '../../queryParameters';
import searchQueryParamName from '../../searchQueryParamName'
import { fetchSearchResult, selectData, selectGenres, selectStatus } from '../browserSlice';
import { useEffect } from 'react';
import { Container, Title } from '../../common/Container';
import { Tile } from '../../common/Tile'
import { Pagination } from '../../common/Pagination'

const Movie = () => {
	const { id } = useParams();
	const movieId = id;
	const query = useQueryParameter(searchQueryParamName)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchSearchResult(query))
	}, [query, dispatch])

	const data = useSelector(selectData)
	const status = useSelector(selectStatus)
	const genres = useSelector(selectGenres)
	const movies = data.results || []

	const { cast, crew } = useCredits(movieId);

	const displayedCast = cast.slice(0, 12);
	const displayedCrew = crew.slice(0, 6); 

	switch (status) {
		case 'loading':
			return (
				<Container>
					<Title>Search results for "{query}"</Title>
				</Container>
			)
		case 'error':
			return <Container>Ooops! Something went wrong...</Container>
		case 'success':
			if (!movies.length && query) {
				return (
					<Container>
						<Title>Sorry, there are no results for "{query}"</Title>
					</Container>
				)
			} else if (query) {
				return (
					<>
						<Container>
							<Title>
								Search results for "{query}" ({movies.length})
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
						<MovieBanner />
						<Content>
							<MovieTile />
						</Content>
						<People title='Cast' people={displayedCast} />
						<People title='Crew' people={displayedCrew} />
					</>
				)
			}
		default:
			return null
	}
}

export default Movie;
