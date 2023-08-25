import React, { useEffect } from "react";
import {
  Logo,
  ImageLogo,
  StyledLi,
  StyledNav,
  StyledNavLink,
  StyledUl,
  Wrapper,
  Container,
  StyledLink,
} from "./styled";
import video from "../images/Video.svg";
import Input from "./Input";
import { toMovies, toPeople } from "../../routes";
import { useSearchInput } from "./Input/useSearchInput";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const Navigation = () => {
  const { newInputValue, onInputChange, isMoviesPage, setNewInputValue } =
    useSearchInput();

  const resetInputValue = () => {
    setNewInputValue("");
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/movies" && location.pathname !== "/people") {
      setNewInputValue("");
    }
  }, [location.pathname, setNewInputValue]);

  return (
    <StyledNav>
      <Wrapper>
        <Container>
          <StyledLink to="/">
            <Logo>
              <ImageLogo src={video} alt="logoImg" />
              Movies Browser
            </Logo>
          </StyledLink>
          <StyledUl>
            <StyledLi onClick={resetInputValue}>
              <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
            </StyledLi>
            <StyledLi onClick={resetInputValue}>
              <StyledNavLink
                to={toPeople()}
                isActive={(_, location) => {
                  return location.pathname.startsWith('/people') || location.pathname.startsWith('/person');
                }}
              >
                PEOPLE
              </StyledNavLink>

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
}