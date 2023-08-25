import { LinkElement, Rate, StarImage, StyledTile, TileTitle, Votes } from '../../../common/Tile/styled'
import customPoster from '../../../common/images/Video.svg'
import star from '../../../common/images/Vector.svg'
import { Container, Header, Movies, Rating, Tag, Tags, TileContent, Poster, ImagePoster, StyledYear, Character } from './styled'
import { Wrapper } from '../../Movie/People/styled';
import { useParams } from 'react-router-dom';
import useCrew from './useCrew';
import { useEffect, useState } from 'react';
import { getGenres } from '../../../common/Genres/getGenres';
import { selectStatus } from '../../browserSlice';
import { useSelector } from 'react-redux';


const MovieCrew = () => {
	const [genres, setGenres] = useState([])
	const { id } = useParams()
	const actorId = id
	const crewData = useCrew(actorId)

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const genres = await getGenres()
				setGenres(genres)
			} catch (error) {
				console.error('Error fetching genres:', error)
			}
		}

		fetchGenres()
	}, [])


	const status = useSelector(selectStatus);

	if (!crewData || crewData.length === 0 || status==="loading") {
		return null;
	}

	return (
		<Wrapper>
			<Container>
				<Header> {crewData.length !== 0 ? `Movies - crew (${crewData.length})` : null}</Header>
				<Movies>
					{crewData &&
						crewData.map(crewMember => {
							const movieGenres = genres.filter(genre => crewMember.genre_ids.includes(genre.id))
							return (
								<StyledTile key={crewMember.id}>
									<Poster>
										<LinkElement to={`/movies/${crewMember.id}`}>
											<ImagePoster
												$isCustom={crewMember.poster_path ? false : true}
												src={
													crewMember.poster_path
														? `https://image.tmdb.org/t/p/original${crewMember.poster_path}`
														: customPoster
												}
												alt={crewMember.title}></ImagePoster>
										</LinkElement>
									</Poster>
									<TileContent>
										<LinkElement to={`/movies/${crewMember.id}`}>
											<TileTitle>{crewMember.title}</TileTitle>
										</LinkElement>
										<StyledYear>
											<Character>{crewMember.job}</Character>(
											{crewMember.release_date ? crewMember.release_date.slice(0, 4) : '-'})
										</StyledYear>
										<Tags>
											{movieGenres.map(genre => (
												<Tag key={genre.id}>{genre.name}</Tag>
											))}
										</Tags>
										<Rating>
											<StarImage src={star} alt=''></StarImage>
											<Rate>{crewMember.vote_average || '-'}</Rate>
											<Votes> {crewMember.vote_count ? `${crewMember.vote_count} votes` : '-'}</Votes>
										</Rating>
									</TileContent>
								</StyledTile>
							)
						})}
				</Movies>
			</Container>
		</Wrapper>
	)
}

export default MovieCrew
