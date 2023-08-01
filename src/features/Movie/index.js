import MovieBanner from './Banner/index'
import MovieTile from './MovieTile'
import { Content } from './styled'
import People from './People'
const Movie = () => {
	return (
		<>
			<MovieBanner />
			<Content>
				<MovieTile />
			</Content>
			<People title='Cast' />
			<People title='Crew' />
		</>
	)
}

export default Movie
