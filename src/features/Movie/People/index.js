import React from 'react'
import { Header, Container, Actors, Wrapper, PersonPoster, PersonTitle, StyledActorTile, Character } from './styled'
import customPoster from '../img/actor.png'

const People = ({ title }) => {
	return (
		<Wrapper>
			<Container>
				<Header>{title}</Header>
				<Actors>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
					<StyledActorTile>
						<PersonPoster src={customPoster} alt='' />
						<PersonTitle>Liu Yifei</PersonTitle>
						<Character>Mulan</Character>
					</StyledActorTile>
				</Actors>
			</Container>
		</Wrapper>
	)
}

export default People
