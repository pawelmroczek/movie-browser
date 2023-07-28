import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Title } from "../../common/Container";
import { Pagination } from "../../common/Pagination";
import { Tile } from "../../common/Tile";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamNam from "../../searchQueryParamName";
import {
  fetchSearchResult,
  selectData,
  selectStatus,
  selectGenres,
} from "../browserSlice";
import { useEffect } from "react";
import { Tag } from "../../common/Tile/styled";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamNam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResult(query));
  }, [query, dispatch]);

  const data = useSelector(selectData);
  const status = useSelector(selectStatus);
  const genres = useSelector(selectGenres);
  const movies = data.results;
  console.log(movies);
  switch (status) {
    case "loading":
      return (
        <Container>
          <Title>Search results for "{query}"</Title>
        </Container>
      );
    case "error":
      return <Container>Ooops! Something went wrong...</Container>;
    case "success":
      if (movies && !movies.length && query) {
        return (
          <Container>
            <Title>Sorry, there are no results for "{query}"</Title>
          </Container>
        );
      } else if (query) {
        return (
          <>
            <Container>
              <Title>
                Search results for "{query}" ({movies ? movies.length : ""})
              </Title>
              <Content>
                {movies.map((movie) => (
                  <Tile
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                  />
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
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
              </Content>
            </Container>
            <Pagination />
          </>
        );
      }
    default:
      break;
  }
};
export default Movies;
