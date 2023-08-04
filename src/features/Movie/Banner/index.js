import {
	ImageContainer,
	Pleksa,
	StarImage,
	Title,
	Header,
	Rating,
	RatingValues,
	RatingValue,
	RatingTotal,
	RatingQty,
} from './styled'
import star from '../../../common/images/Vector.svg'
import { useParams } from 'react-router-dom';
import useMovie from '../MovieTile/useMovie';

const MovieBanner = () => {
	const { id } = useParams();
	const movieId = id;
	const movieData = useMovie(movieId);
	

	if (!movieData) {
	  return <div>Loading...</div>;
	}

	const {
		backdrop_path,
		original_title,
	  } = movieData;

	  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`
	
	return (
		<>
			<ImageContainer>
				<Pleksa src={backdropUrl} />
				<Header>
					<Title>{original_title}</Title>
					<Rating>
						<StarImage src={star} alt='Star'></StarImage>
						<RatingValues>
							<RatingValue>7,8 </RatingValue>
							<RatingTotal>/ 10</RatingTotal>
						</RatingValues>
						<RatingQty>335 votes</RatingQty>
					</Rating>
				</Header>
			</ImageContainer>
		</>
	)
}

export default MovieBanner
