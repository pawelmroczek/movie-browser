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
} from '../../../common/Tile/styled';
import customPoster from '../../../common/images/Video.svg';
import star from '../../../common/images/Vector.svg';
import { Container, Header, Movies, Rating, Tag, Tags, TileContent } from './styled'
import { Wrapper } from '../../Movie/People/styled';
import { useParams } from 'react-router-dom';
import useCrew from './useCrew';
import { useEffect, useState } from 'react';
import { getGenres } from '../../../common/Genres/getGenres';

const MovieCrew = () => {
	const [genres, setGenres] = useState([]);
	const { id } = useParams()
	const actorId = id
	const crewData = useCrew(actorId)

	useEffect(() => {
		const fetchGenres = async () => {
		  try {
			const genres = await getGenres();
			setGenres(genres);
		  } catch (error) {
			console.error('Error fetching genres:', error);
		  }
		};
	
		fetchGenres();
	  }, []);

	return (
		<Wrapper>
		  <Header> Movies - crew ({crewData ? crewData.length : 0})</Header>
		  <Container>
			<Movies>
			  {crewData &&
				crewData.map((crewMember) => {
				  const movieGenres = genres.filter((genre) => crewMember.genre_ids.includes(genre.id));
	
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
							alt={crewMember.title}
						  ></ImagePoster>
						</LinkElement>
					  </Poster>
					  <TileContent>
						<LinkElement to={`/movies/${crewMember.id}`}>
						  <TileTitle>{crewMember.title}</TileTitle>
						</LinkElement>
						<Year>({crewMember.release_date ? crewMember.release_date.slice(0, 4) : '-'})</Year>
						<Tags>
						  {movieGenres.map((genre) => (
							<Tag key={genre.id}>{genre.name}</Tag>
						  ))}
						</Tags>
						<Rating>
						  <StarImage src={star} alt=""></StarImage>
						  <Rate>{crewMember.vote_average || '-'}</Rate>
						  <Votes> {crewMember.vote_count ? `${crewMember.vote_count} votes` : '-'}</Votes>
						</Rating>
					  </TileContent>
					</StyledTile>
				  );
				})}
			</Movies>
		  </Container>
		</Wrapper>
	  );
	};

export default MovieCrew
