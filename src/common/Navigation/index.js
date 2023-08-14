import React from "react";
import {
  Logo,
  ImageLogo,
  StyledLi,
  StyledNav,
  StyledNavLink,
  StyledUl,
  Wrapper,
  Container,
} from "./styled";
import video from "../images/Video.svg";
import Input from "./Input";
import { toMovies, toPeople } from "../../routes";
import { useSearchInput } from "./Input/useSearchInput";

export const Navigation = () => {
  const { newInputValue, onInputChange, isMoviesPage, setNewInputValue } =
    useSearchInput();

  const resetInputValue = () => {
    setNewInputValue("");
  };

  return (
    <StyledNav>
      <Wrapper>
        <Container>
          <Logo>
            <ImageLogo src={video} alt="" />
            Movies Browser
          </Logo>
          <StyledUl>
            <StyledLi onClick={resetInputValue}>
              <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
            </StyledLi>
            <StyledLi onClick={resetInputValue}>
              <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
            </StyledLi>
          </StyledUl>
        </Container>
        <Input
          newInputValue={newInputValue}
          onInputChange={onInputChange}
          isMoviesPage={isMoviesPage}
        />
      </Wrapper>
    </StyledNav>
  );
};
