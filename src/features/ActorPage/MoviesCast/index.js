import {
	LinkElement,
	Rate,
	StarImage,
	StyledTile,
	TileTitle,
	Votes,
	Year,
} from '../../../common/Tile/styled';
import customPoster from '../../../common/images/Video.svg';
import star from '../../../common/images/Vector.svg';
import { Container, Header, Movies, Rating, Tag, Tags, TileContent, Poster, ImagePoster, Character, StyledYear } from './styled';
import { Wrapper } from '../../Movie/People/styled';
import { useParams } from 'react-router-dom';
import useCast from './useCast';
import { useEffect, useState } from 'react';
import { getGenres } from '../../../common/Genres/getGenres';

const MovieCast = () => {
	const [genres, setGenres] = useState([]);

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

	const { id } = useParams();
	const actorId = id;
	const castData = useCast(actorId);

	if (!castData || castData.length === 0) {
	    return null;
	 }

	return (
		<Wrapper>
			<Header> Movies - cast ({castData ? castData.length : 0})</Header>
			<Container>
				<Movies>
					{castData &&
						castData.map((castMember) => {
							const movieGenres = genres.filter((genre) => castMember.genre_ids.includes(genre.id));

							return (
								<StyledTile key={castMember.id}>
									<Poster>
										<LinkElement to={`/movies/${castMember.id}`}>
											<ImagePoster
												$isCustom={castMember.poster_path ? false : true}
												src={
													castMember.poster_path
														? `https://image.tmdb.org/t/p/original${castMember.poster_path}`
														: customPoster
												}
												alt={castMember.title}
											></ImagePoster>
										</LinkElement>
									</Poster>
									<TileContent>
										<LinkElement to={`/movies/${castMember.id}`}>
											<TileTitle>{castMember.title}</TileTitle>
										</LinkElement>
										<StyledYear>
											<Character>
												{castMember.character}
											</Character>
											({castMember.release_date ? castMember.release_date.slice(0, 4) : '-'})
										</StyledYear>
										<Tags>
											{movieGenres.map((genre) => (
												<Tag key={genre.id}>{genre.name}</Tag>
											))}
										</Tags>
										<Rating>
											<StarImage src={star} alt=""></StarImage>
											<Rate>{castMember.vote_average || '-'}</Rate>
											<Votes> {castMember.vote_count ? `${castMember.vote_count} votes` : '-'}</Votes>
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

export default MovieCast;

