import axios from "axios";

export const getPerson = async (searchQuery) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/person",
    params: { query: searchQuery },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTZlMTRkZWZmMjFjMDE1ZjM1YjIyZDNlYzk0NzU0YSIsInN1YiI6IjY0YjlhOWQ0NmFhOGUwMDBjY2Y3MzIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQguhGhKxFr1jguoxn3_YXtRad0dqy09q3Yv-7o2Lyg",
    },
  };

  const response = await axios.request(options);

  return response.data;
};
