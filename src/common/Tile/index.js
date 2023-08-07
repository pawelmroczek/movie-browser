import React from 'react'
import {
	LinkElement,
	StyledTile,
	Rating,
	TileContent,
	TileTitle,
	Year,
	Rate,
	Votes,
	StarImage,
	Poster,
	ImagePoster,
	Description,
} from './styled'
import star from '../images/Vector.svg'
import customPoster from '../images/Video.svg'
import { Genres } from '../Genres'

export const Tile = ({ movie, genres }) => {
	if (!movie) {
		return null
	}

	const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : customPoster
	const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : '';
	
	return (
		<StyledTile>
			<Poster>
				<ImagePoster src={posterUrl} alt='' $isCustom={posterUrl === customPoster}></ImagePoster>
			</Poster>
			<TileContent>
				<Description>
				<LinkElement to={`/movies/${movie.id}`}>
					<TileTitle>{movie.title}</TileTitle>
				</LinkElement>
        <Year>{releaseYear}</Year>
				<Genres genre_ids={movie.genre_ids} genres={genres} />
				</Description>
				<Rating>
					<StarImage src={star} alt=''></StarImage>
					<Rate>{movie.vote_average === 0 ? 0 : movie.vote_average.toFixed(1)}</Rate>
					<Votes>{movie.vote_count} votes</Votes>
				</Rating>
			</TileContent>
		</StyledTile>
	)
}
