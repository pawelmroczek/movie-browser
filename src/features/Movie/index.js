import { ImageContainer, Pleksa, StarImage, Title, Header, Rating } from './styled'
import pleksa from './img/Pleksa.png'
import star from '../../common/images/Vector.svg'

const Movie = () => {
	return (
		<>
			<ImageContainer>
				<Pleksa src={pleksa} />
				<Header>
					<Title>Mulan Long Title</Title>
					<Rating>
						<StarImage src={star} alt=''></StarImage>
						<span>7/9</span>
						<span>335 votes</span>
					</Rating>
				</Header>
			</ImageContainer>
		</>
	)
}

export default Movie
