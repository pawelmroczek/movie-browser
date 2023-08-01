import React from 'react'
import { PersonPicture, PersonPoster, PersonTitle, StyledActordTile } from './styled'
import customPoster from '../images/Video.svg'

export const ActorTile = ({ people }) => {
	if (!people) {
		return null
	}

	const posterUrl = people.profile_path ? `https://image.tmdb.org/t/p/w500${people.profile_path}` : customPoster

	return (
		<StyledActordTile key={people.id}>
			<PersonPicture>
				<PersonPoster src={posterUrl} alt='' $isCustom={posterUrl === customPoster} />
			</PersonPicture>
			<PersonTitle>{people.name}</PersonTitle>
		</StyledActordTile>
	)
}
