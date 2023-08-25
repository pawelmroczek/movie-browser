import { Content } from '../Movie/styled'
import ActorMainTile from './ActorMainTile'
import MovieCrew from './MoviesCrew'
import MovieCast from './MoviesCast'

const ActorPage = () => {
	return (
		<>
			<Content>
				<ActorMainTile />
			</Content>
			<MovieCast />
			<MovieCrew />
		</>
	)
}

export default ActorPage