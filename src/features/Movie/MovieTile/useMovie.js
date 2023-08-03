// useFetchMovie.js
import { useState, useEffect } from 'react'

const useMovie = (movie) => {
    const [description, setDescription] = useState("")

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmRlOGY0OTg1MWU3ZTdjNWM5M2ZiZTZlMmZkM2ZjZCIsInN1YiI6IjY0YmEyZWU3NGQyM2RkMDBlN2NkZjE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5YlHu8PqnmRsvT1gJxZLLYAejG2VihB0E7pXmRhUkc',
            },
        }

        fetch(`https://api.themoviedb.org/3/movie/346698?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setDescription(response.overview)
            })
            .catch(err => console.error(err))
    }, [movie])

    return description
}

export default useMovie;
