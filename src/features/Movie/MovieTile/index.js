import React, { useState, useEffect } from 'react';
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
import star from '../../../common/images/Vector.svg';
import useMovie from './useMovie';
import { useParams } from 'react-router-dom';

const MovieTile = () => {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768)
	const { id } = useParams();
	const movieId = id;

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const movieData = useMovie(movieId);

	if (!movieData) {
		return <div>Loading...</div>;
	}
	
	const {
		title,
		overview,
		release_date,
		vote_average,
		vote_count,
		poster_path,
		genres,
		production_countries
	} = movieData;

	const posterUrl = `https://image.tmdb.org/t/p/original${poster_path}`

	return (
		<TileWrapper>
			<ImageContainer>
				<Image src={posterUrl} alt='movie' />
			</ImageContainer>
			<Details>
				<Title>{title}</Title>
				<Year></Year>
				<Production>
					<Name>Production:</Name> 
					{production_countries.map(country => country.name).join(", ")}
				</Production>
				<Production>
					<Name>Release date:</Name>{release_date}
				</Production>
				<Genres>
					{genres.map((genre) => (
						<Genre key={genre.id}>{genre.name}</Genre>
					))}
				</Genres>
				<RatingWrapper>
					<ImageStar src={star} alt='star' />
					<RatingValue>
						{vote_average}<TotalValue>{vote_count}</TotalValue>
					</RatingValue>
					<VotesQty></VotesQty>
				</RatingWrapper>
				{isWideScreen && <Description>{overview}</Description>}
			</Details>
			{!isWideScreen && <Description>{overview}</Description>}
		</TileWrapper>
	)
}

export default MovieTile;
