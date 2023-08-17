import { useEffect, useState } from 'react'
import poster from '../../Movie/img/actorsvg.svg'
import {
	DateOfBirth,
	Description,
	Details,
	Image,
	ImageContainer,
	Name,
	PlaceOfBirth,
	TileWrapper,
	Title,
} from './styled'
import { useParams } from 'react-router-dom'
import useActor from './useActor'

const ActorMainTile = () => {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768)
	const { id } = useParams()
	const actorId = id

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const actorData = useActor(actorId)
	if (!actorData) {
		return <div>Loading...</div>
	}

	const { birthday, biography, name, place_of_birth } = actorData
	return (
		<>
			<TileWrapper>
				<ImageContainer>
					<Image src={poster} alt=''></Image>
				</ImageContainer>
				<Details>
					<Title>{name}</Title>
					<DateOfBirth>
						<Name>Birth</Name>
						{birthday}
					</DateOfBirth>
					<PlaceOfBirth>
						<Name>Place of birth:</Name>
						{place_of_birth}
					</PlaceOfBirth>
					{isWideScreen && <Description>{biography}</Description>}
				</Details>
				{!isWideScreen && (
					<Description>
						Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of
						8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu
						lived there for four years.
					</Description>
				)}
			</TileWrapper>
		</>
	)
}

export default ActorMainTile
