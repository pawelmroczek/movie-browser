import { Content } from '../Movie/styled'
import ActorMainTile from './ActorMainTile'
import MovieCrew from './MoviesCrew'
import MovieCast from './MoviesCast'
import { Container } from '../../common/Container'
import Loader from '../States/Loader'
import Error from '../States/Error'
import { useSelector } from 'react-redux'
import { selectStatus } from '../browserSlice'

const ActorPage = () => {

	const status = useSelector(selectStatus);

	switch (status) {
		case "loading":
			return (
				<Container>
					<Loader />
				</Container>
			)
		case "error":
			return (
				<Container>
					<Error />
				</Container>
			)
		case "success":
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
}

export default ActorPage

