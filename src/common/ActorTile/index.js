import React from 'react'
import { PersonPicture, PersonPoster, PersonTitle, StyledActorTile } from './styled'
import customPoster from '../images/Profile.svg'

export const ActorTile = ({ people }) => {
	if (!people) {
		return null
	}

	const posterUrl = people.profile_path ? `https://image.tmdb.org/t/p/w500${people.profile_path}` : customPoster

	return (
		<StyledActorTile key={people.id}>
			<PersonPicture>
				<PersonPoster src={posterUrl} alt='' $isCustom={posterUrl === customPoster} />
			</PersonPicture>
			<PersonTitle>{people.name}</PersonTitle>
		</StyledActorTile>
	)
}
