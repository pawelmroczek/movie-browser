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
import poster from '../../../common/images/poster.png'
import star from '../../../common/images/Vector.svg'
import { Container, Header, Movies, Rating, Tag, Tags, TileContent } from './styled'
import { Wrapper } from '../../Movie/People/styled'
import { useParams } from 'react-router-dom'
import useCast from './useCast'

const MovieCast = () => {
	const { id } = useParams()
	const actorId = id
	const castData = useCast(actorId)

	return (
		<Wrapper>
			<Header> Movies - cast ({castData ? castData.length : 0})</Header>
			<Container>
				<Movies>
					{castData &&
						castData.map((castMember, index) => (
							<StyledTile key={index}>
								<Poster>
									<ImagePoster
										src={
											castMember.poster_path ? `https://image.tmdb.org/t/p/original${castMember.poster_path}` : poster
										}
										alt={castMember.title}></ImagePoster>
								</Poster>
								<TileContent>
									<LinkElement>
										<TileTitle>{castMember.title}</TileTitle>
									</LinkElement>
									<Year>
										{castMember.original_title} ({castMember.release_date ? castMember.release_date.slice(0, 4) : '-'})
									</Year>
									<Tags>
										<Tag>Action</Tag>
										<Tag>Adventure</Tag>
										<Tag>Drama</Tag>
									</Tags>
									<Rating>
										<StarImage src={star} alt=''></StarImage>
										<Rate>{castMember.vote_average || '-'}</Rate>
										<Votes> {castMember.vote_count ? `${castMember.vote_count} votes` : '-'}</Votes>
									</Rating>
								</TileContent>
							</StyledTile>
						))}
				</Movies>
			</Container>
		</Wrapper>
	)
}

export default MovieCast
