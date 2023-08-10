import React from 'react'
import { Header, Container, Actors, Wrapper, PersonPoster, PersonTitle, StyledActorTile, Character } from './styled'
import customPoster from '../img/Profile.svg'
import { PersonPicture } from '../../../common/ActorTile/styled'
const People = ({ title, people }) => {
	return (
		<Wrapper>
			<Container>
				<Header>{title}</Header>
				<Actors>
					{people.map(person => {
						const isCustom = person.profile_path === null
						const person_posterUrl = isCustom
							? customPoster
							: `https://image.tmdb.org/t/p/original${person.profile_path}`
						return (
							<StyledActorTile key={person.id}>
								<PersonPicture>
									<PersonPoster $isCustom={isCustom} src={person_posterUrl} alt={person.name} />
								</PersonPicture>
								<PersonTitle>{person.name}</PersonTitle>
								<Character>
									{title === 'Cast' ? person.character : `Department: ${person.known_for_department}`}
								</Character>
							</StyledActorTile>
						)
					})}
				</Actors>
			</Container>
		</Wrapper>
	)
}
export default People
