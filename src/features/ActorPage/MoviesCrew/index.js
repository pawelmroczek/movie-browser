import {
	ImagePoster,
	LinkElement,
	Poster,
	Rate,
	StarImage,
	StyledTile,
	TileTitle,
	Votes,
	Year,
} from '../../../common/Tile/styled'
import customPoster from '../../../common/images/Video.svg'
import star from '../../../common/images/Vector.svg'
import { Container, Header, Movies, Rating, Tag, Tags, TileContent } from './styled'
import { Wrapper } from '../../Movie/People/styled'
import { useParams } from 'react-router-dom'
import useCrew from './useCrew'

const MovieCrew = () => {
	const { id } = useParams()
	const actorId = id
	const crewData = useCrew(actorId)

	return (
		<Wrapper>
			<Header> Movies - crew ({crewData ? crewData.length : 0})</Header>
			<Container>
				<Movies>
					{crewData &&
						crewData.map((crewMember, index) => (
							<StyledTile key={index}>
								<Poster>
									<ImagePoster
									$isCustom={crewMember.poster_path ? false : true}
										src={
											crewMember.poster_path ? `https://image.tmdb.org/t/p/original${crewMember.poster_path}` : customPoster
										}
										alt={crewMember.title}></ImagePoster>
								</Poster>
								<TileContent>
									<LinkElement>
										<TileTitle>{crewMember.title}</TileTitle>
									</LinkElement>
									<Year>
										{crewMember.original_title} ({crewMember.release_date ? crewMember.release_date.slice(0, 4) : '-'})
									</Year>
									<Tags>
										<Tag>Action</Tag>
										<Tag>Adventure</Tag>
										<Tag>Drama</Tag>
									</Tags>
									<Rating>
										<StarImage src={star} alt=''></StarImage>
										<Rate>{crewMember.vote_average || '-'}</Rate>
										<Votes> {crewMember.vote_count ? `${crewMember.vote_count} votes` : '-'}</Votes>
									</Rating>
								</TileContent>
							</StyledTile>
						))}
				</Movies>
			</Container>
		</Wrapper>
	)
}

export default MovieCrew
