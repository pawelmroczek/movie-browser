import React, { useState, useEffect } from 'react'
import {
	TileWrapper,
	Details,
	Image,
	Title,
	Year,
	Name,
	Production,
	ImageContainer,
	Genres,
	Genre,
	ImageStar,
	RatingWrapper,
	RatingValue,
	TotalValue,
	VotesQty,
	Description,
} from './styled'
import star from '../../../common/images/Vector.svg'
import useMovie from './useMovie'
import { useParams } from 'react-router-dom'
import customPoster from '../../../common/images/Video.svg'

const MovieTile = () => {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768)
	const { id } = useParams()
	const movieId = id

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const movieData = useMovie(movieId)

	if (!movieData) {
		return null
	}

	const { title, overview, release_date, vote_average, vote_count, poster_path, genres, production_countries } =
		movieData

	const posterUrl = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : customPoster

	return (
		<TileWrapper>
			<ImageContainer>
				<Image src={posterUrl} alt={title} $isCustom={posterUrl === customPoster} />
			</ImageContainer>
			<Details>
				<Title>{title}</Title>
				<Year>{release_date ? release_date.substring(0, 4) : ''}</Year>
				<Production>
					<Name>Production:</Name>
					{production_countries.length > 0 ? production_countries.map(country => country.name).join(', ') : "-"}
				</Production>
				<Production>
					<Name>Release date:</Name>
					{release_date ? new Date(release_date).toLocaleDateString('pl-PL', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
					}) : "-"}
				</Production>
				<Genres>
					{genres.map(genre => (
						<Genre key={genre.id}>{genre.name}</Genre>
					))}
				</Genres>
				<RatingWrapper>
					{vote_count > 0 ? (
						<>
							<ImageStar src={star} alt='star' />
							<RatingValue>
								{vote_average === 0 ? 0 : vote_average.toFixed(1)}
								<TotalValue>
									/10 <span>{vote_count} votes</span>
								</TotalValue>
							</RatingValue>
						</>
					) : (
						<VotesQty>No votes yet</VotesQty>
					)}
				</RatingWrapper>
				{isWideScreen && <Description>{overview}</Description>}
			</Details>
			{!isWideScreen && <Description>{overview}</Description>}
		</TileWrapper>
	)
}

export default MovieTile
