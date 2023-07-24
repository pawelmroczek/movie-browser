import { useSelector } from "react-redux";
import { Container, Content, Title } from "../../common/Container";
import { Pagination } from "../../common/Pagination";
import { Tile } from "../../common/Tile";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamNam from "../../searchQueryParamName";
import { selectData } from "../browserSlice";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamNam);
  const data = useSelector(selectData);
  console.log(data);

  if (!data.length && query) {
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
            Search results for "{query}" ({data.length})
          </Title>
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
};

export default Movies;
