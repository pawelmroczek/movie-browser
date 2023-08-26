import React from 'react'
import { Header, Container, Actors, Wrapper, PersonPoster, PersonTitle, StyledActorTile, Character } from './styled'
import customPoster from '../img/Profile.svg'
import { LinkElement, PersonPicture } from '../../../common/ActorTile/styled'

const People = ({ title, people }) => {
	const uniquePeople = Array.from(new Set(people.map(person => person.id))).map(id => {
		return people.find(person => person.id === id)
	})

	return (
		<Wrapper>
			<Container>
				<Header>{title}</Header>
				<Actors>
					{uniquePeople.map(person => {
						const isCustom = person.profile_path === null
						const person_posterUrl = isCustom
							? customPoster
							: `https://image.tmdb.org/t/p/original${person.profile_path}`
						return (
							<StyledActorTile key={person.id}>
								<LinkElement to={`/person/${person.id}`}>
									<PersonPicture>
										<PersonPoster $isCustom={isCustom} src={person_posterUrl} alt={person.name} />
									</PersonPicture>
									<PersonTitle>{person.name}</PersonTitle>
								</LinkElement>
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
