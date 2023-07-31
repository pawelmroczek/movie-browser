import MovieBanner from './Banner/index'
import MovieTile from './MovieTile'
import { Content } from './styled'
const Movie = () => {
	return (
		<>
			<MovieBanner />
			<Content>
				<MovieTile />
			</Content>
		</>
	)
}

export default Movie
