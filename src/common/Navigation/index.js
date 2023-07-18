import React from "react";
import { Logo, ImageLogo, StyledLi, StyledNav, StyledNavLink, StyledUl } from "./styled";
import video from "../images/Video.svg"

export const Navigation = () => (
    <StyledNav>
        <StyledUl>
        <StyledLi>
                <Logo
                    to="/home"
                >
                    <ImageLogo src={video} alt="" />
                    Movies Browser
                </Logo>
            </StyledLi>
            <StyledLi>
                <StyledNavLink
                    to="/movies"
                    activeClassName="active"
                    isActive={() => true}
                >
                    MOVIES
                </StyledNavLink>
            </StyledLi>
            <StyledLi>
                <StyledNavLink
                    to="/people"
                >
                    PEOPLE
                </StyledNavLink>
            </StyledLi>
        </StyledUl>
    </StyledNav>

);