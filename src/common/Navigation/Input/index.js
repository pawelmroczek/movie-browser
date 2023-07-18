import { Container, StyledInput } from "./styled";
import search from "../../images/Search.svg"

const Input = () => {
  return (
    <Container>
      <img src={search}></img>
      <StyledInput placeholder="Search for movies..." />
    </Container>
  );
};

export default Input;
