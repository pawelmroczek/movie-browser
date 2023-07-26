import axios from 'axios'
import { useState, useEffect } from 'react'

export const useApiMovies = async () => {
	const [moviesData, setMoviesData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const options = {
					method: 'GET',
					url: 'https://api.themoviedb.org/3/movie/popular',
					headers: {
						accept: 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTZlMTRkZWZmMjFjMDE1ZjM1YjIyZDNlYzk0NzU0YSIsInN1YiI6IjY0YjlhOWQ0NmFhOGUwMDBjY2Y3MzIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQguhGhKxFr1jguoxn3_YXtRad0dqy09q3Yv-7o2Lyg',
					},
				}

				const response = await axios.request(options)
				setMoviesData(response.data)
			} catch (error) {
				console.error('Something went wrong')
			}
		}
		fetchData()
	}, [])
	return moviesData
}

// import axios from 'axios'
// import { useState, useEffect } from 'react'

// export const useApiMovies = () => {
// 	const [moviesData, setMoviesData] = useState(null)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const options = {
// 					method: 'GET',
// 					url: 'https://api.themoviedb.org/3/movie/550?api_key=29fc81d2edb6a1c412a3e51466e79f7a',
// 				}

// 				const response = await axios.request(options)
// 				console.log(response)

// 				setMoviesData(response.data)
// 			} catch (error) {
// 				console.error('Something went wrong')
// 			}
// 		}

// 		fetchData()
// 	}, [])

// 	return moviesData
// }
