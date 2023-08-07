import React from 'react'
import { Header, Container, Actors, Wrapper, PersonPoster, PersonTitle, StyledActorTile, Character } from './styled'
import customPoster from '../img/Profile.svg';

const People = ({ title, people }) => {
    return (
        <Wrapper>
            <Container>
                <Header>{title}</Header>
                <Actors>
                    {people.map((person) => {
                        const person_posterUrl = person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : customPoster;
                        return (
                            <StyledActorTile key={person.id}>
                                <PersonPoster src={person_posterUrl} alt={person.name} />
                                <PersonTitle>{person.name}</PersonTitle>
                                <Character>
                                    {title === 'Cast' ? person.character : `Department: ${person.known_for_department}`}
                                </Character>
                            </StyledActorTile>
                        );
                    })}
                </Actors>
            </Container>
        </Wrapper>
    )
}

export default People;
