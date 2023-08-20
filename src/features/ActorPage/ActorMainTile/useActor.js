import { useState, useEffect } from 'react'

const useActor = actorId => {
	const [actorData, setActorData] = useState(null)

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmRlOGY0OTg1MWU3ZTdjNWM5M2ZiZTZlMmZkM2ZjZCIsInN1YiI6IjY0YmEyZWU3NGQyM2RkMDBlN2NkZjE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5YlHu8PqnmRsvT1gJxZLLYAejG2VihB0E7pXmRhUkc',
			},
		}

		fetch(`https://api.themoviedb.org/3/person/${actorId}`, options)
			.then(response => response.json())
			.then(response => {
				setActorData(response)
			})
			.catch(err => console.error(err))
	}, [actorId])

	return actorData
}

export default useActor
