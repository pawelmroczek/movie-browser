import React from 'react'
import { Header, Container, Actors, Wrapper, PersonPoster, PersonTitle, StyledActorTile, Character } from './styled'
import { useParams } from 'react-router-dom';
import useCredits from './useCredits';

const People = () => {
	const { id } = useParams();
	const movieId = id;

	const { cast, crew } = useCredits(movieId);

	return (
		<Wrapper>
			<Container>
				<Header>Cast</Header>
				<Actors>
					{cast.map((actor) => {
						const actor_posterUrl = `https://image.tmdb.org/t/p/original${actor.profile_path}`;
						return (
							<StyledActorTile key={actor.id}>
								<PersonPoster src={actor_posterUrl} alt={actor.name} />
								<PersonTitle>{actor.name}</PersonTitle>
								<Character>{actor.character}</Character>
							</StyledActorTile>
						);
					})}
				</Actors>
				<Header>Crew</Header>
				<Actors>
					{crew.map((crewMember) => {
						const crew_member_posterUrl = `https://image.tmdb.org/t/p/original${crewMember.profile_path}`;
						return (
							<StyledActorTile key={crewMember.id}>
								<PersonPoster src={crew_member_posterUrl} alt={crewMember.name} />
								<PersonTitle>{crewMember.name}</PersonTitle>
								<Character>Department: {crewMember.known_for_department}</Character>
							</StyledActorTile>
						);
					})}
				</Actors>
			</Container>
		</Wrapper>
	)
}

export default People
