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

export const Navigation = () => (
  <StyledNav>
    <Wrapper>
      <Container>
        <Logo>
          <ImageLogo src={video} alt="" />
          Movies Browser
        </Logo>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
          </StyledLi>
        </StyledUl>
      </Container>
      <Input />
    </Wrapper>
  </StyledNav>
);
