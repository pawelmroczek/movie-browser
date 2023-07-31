import axios from 'axios'

export const getPopularMovies = async () => {
	try {
		const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTZlMTRkZWZmMjFjMDE1ZjM1YjIyZDNlYzk0NzU0YSIsInN1YiI6IjY0YjlhOWQ0NmFhOGUwMDBjY2Y3MzIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQguhGhKxFr1jguoxn3_YXtRad0dqy09q3Yv-7o2Lyg',
			},
		})
		return response.data.results
	} catch (error) {
		console.error('Error fetching popular movies:', error)
		return []
	}
}
