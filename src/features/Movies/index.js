import { Container, Content, Title } from "../../common/Container";
import { Pagination } from "../../common/Pagination";
import { Tile } from "../../common/Tile";

const Movies = () => (
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

export default Movies;
