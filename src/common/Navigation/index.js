import React from "react";
import {
  Logo,
  ImageLogo,
  StyledLi,
  StyledNav,
  StyledNavLink,
  StyledUl,
} from "./styled";
import video from "../images/Video.svg";
import Input from "./Input";
import { toMovies, toPeople } from "../../routes";

export const Navigation = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <Logo>
          <ImageLogo src={video} alt="" />
          Movies Browser
        </Logo>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
      </StyledLi>
    </StyledUl>
    <Input />
  </StyledNav>
);
