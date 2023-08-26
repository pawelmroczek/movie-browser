import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStatus } from '../../browserSlice';

const useCredits = (movieId) => {
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setStatus("loading"));
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmRlOGY0OTg1MWU3ZTdjNWM5M2ZiZTZlMmZkM2ZjZCIsInN1YiI6IjY0YmEyZWU3NGQyM2RkMDBlN2NkZjE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5YlHu8PqnmRsvT1gJxZLLYAejG2VihB0E7pXmRhUkc',
            },
        };

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                if (data.cast && Array.isArray(data.cast)) {
                    setCast(data.cast);
                } else {
                    setCast([]);
                }
                if (data.crew && Array.isArray(data.crew)) {
                    setCrew(data.crew);
                } else {
                    setCrew([]);
                }
                dispatch(setStatus("success"));
            })
           
    }, [movieId]);
    
    return { cast, crew };
};

export default useCredits;
