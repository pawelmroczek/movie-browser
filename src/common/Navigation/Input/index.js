import { Container, StyledIcon, StyledInput } from "./styled";
import search from "../../images/Search.svg";
import { useRef } from "react";
import { useSearchInput } from "./useSearchInput";

const Input = () => {
  const inputRef = useRef(null);

  const { newInputValue, onInputChange, isMoviesPage } = useSearchInput();
  const placeholderText = isMoviesPage
    ? "Search for movies..."
    : "Search for people...";

  return (
    <Container
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <StyledIcon alt="search-icon" src={search}></StyledIcon>
      <StyledInput
        ref={inputRef}
        placeholder={placeholderText}
        value={newInputValue}
        onChange={({ target }) => onInputChange(target)}
      />
    </Container>
  );
};

export default Input;
