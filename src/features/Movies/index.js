import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Title } from "../../common/Container";
import { Pagination } from "../../common/Pagination";
import { Tile } from "../../common/Tile";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import {
  fetchSearchResult,
  selectData,
  selectStatus,
  selectGenres,
  fetchPopular,
} from "../browserSlice";
import NoResults from "../States/NoResults";
import Loader from "../States/Loader";
import Error from "../States/Error";
import paginationParamName from "../../paginationParamName";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(paginationParamName);
  const dispatch = useDispatch();

  const data = useSelector(selectData);
  const status = useSelector(selectStatus);
  const genres = useSelector(selectGenres);

  const movies = data.results || [];
  const totalResults = data.total_results;

  useEffect(() => {
    const payload = {
      query: query,
      page: page || 1,
      destination: "movie",
    };
    if (!query) {
      dispatch(fetchPopular(payload));
    } else {
      dispatch(fetchSearchResult(payload));
    }
  }, [page, dispatch, query]);

  switch (status) {
    case "loading":
      return query ? (
        <Container>
          <Title>Search results for "{query}"</Title>
          <Loader />
        </Container>
      ) : (
        <Container>
          <Loader />
        </Container>
      );
    case "error":
      return (
        <Container>
          <Error />
        </Container>
      );
    case "success":
      if (!movies.length && query) {
        return (
          <Container>
            <Title>Sorry, there are no results for "{query}"</Title>
            <NoResults />
          </Container>
        );
      } else if (query) {
        return (
          <>
            <Container>
              <Title>
                Search results for "{query}" ({totalResults})
              </Title>
              <Content>
                {movies.map((movie) => (
                  <Tile key={movie.id} movie={movie} genres={genres} />
                ))}
              </Content>
            </Container>
            <Pagination />
          </>
        );
      } else {
        return (
          <>
            <Container>
              <Title>Popular movies</Title>
              <Content>
                {movies.map((popMovie) => (
                  <Tile key={popMovie.id} movie={popMovie} genres={genres} />
                ))}
              </Content>
            </Container>
            <Pagination />
          </>
        );
      }
    default:
      return null;
  }
};

export default Movies;
