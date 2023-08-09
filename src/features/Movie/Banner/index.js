import {
	ImageContainer,
	MovieImage,
	StarImage,
	Title,
	Header,
	Rating,
	RatingValues,
	RatingValue,
	RatingTotal,
	RatingQty,
	Pleksa,
	MovieImageWrapper,
} from './styled'
import star from '../../../common/images/Vector.svg'
import { useParams } from 'react-router-dom'
import useMovie from '../MovieTile/useMovie'

const MovieBanner = () => {
	const { id } = useParams()
	const movieId = id
	const movieData = useMovie(movieId)

	if (!movieData) {
		return <div>Loading...</div>
	}

	const { backdrop_path, original_title, vote_average, vote_count } = movieData

	const backdropUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : null

	return (
		<>
			<ImageContainer>
				<MovieImageWrapper>
					<MovieImage src={backdropUrl} />
					<Pleksa />
				</MovieImageWrapper>
				<Header>
					<Title>{original_title}</Title>
					<Rating>
						<StarImage src={star} alt='Star'></StarImage>
						<RatingValues>
							<RatingValue>{vote_average === 0 ? 0 : vote_average.toFixed(1)}</RatingValue>
							<RatingTotal>/ 10</RatingTotal>
						</RatingValues>
						<RatingQty>{vote_count} votes</RatingQty>
					</Rating>
				</Header>
			</ImageContainer>
		</>
	)
}

export default MovieBanner
