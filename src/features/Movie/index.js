import React from 'react'
import { useParams } from 'react-router-dom';
import MovieBanner from './Banner/index'
import MovieTile from './MovieTile'
import { Content } from './styled'
import People from './People'
import useCredits from './People/useCredits';
import { useSelector } from 'react-redux';
import { selectStatus } from '../browserSlice';
import { Container } from '../../common/Container';
import Loader from '../States/Loader';
import Error from '../States/Error';

const Movie = () => {
	const { id } = useParams();
	const movieId = id;
	


	// useEffect(() => {
  //   const payload = {
  //     query: query,
  //     page: page || 1,
  //     destination: "movie",
  //   };
  //   if (!query) {
  //     dispatch(fetchPopular(payload));
  //   } else {
  //     dispatch(fetchSearchResult(payload));
  //   }
  // }, [page, dispatch, query]);


	
	

	const { cast, crew } = useCredits(movieId);
	const status = useSelector(selectStatus);
	console.log(status);
	const displayedCast = cast.slice(0, 12);
	const displayedCrew = crew.slice(0, 6); 

	switch (status) {
		case 'loading':
			return (
				<Container>
				<Loader />
			</Container>
			)
		case 'error':
			return <Container>
			<Error />
		</Container>
		case 'success':
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
		default:
			return null
	}
}

export default Movie;
