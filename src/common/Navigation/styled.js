import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.woodsmoke};
  font-style: normal;
  line-height: normal;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 23px 16px;
  height: 100%;
  max-width: 1332px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    flex-direction: column;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  padding: 8px 24px;
  border-radius: 24px;

  &.active {
    border: 1px solid;
    border-color: ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 166.667%;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    font-family: Poppins;
    font-size: 13px;
    line-height: 130%; /* 16.9px */
    letter-spacing: -0.5px;
  }
`;

export const ImageLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    width: 17px;
    height: 17px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 16px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    width: 100%;
    gap: 0px;
  }

  @media (max-width: ${({ theme }) => theme.media.mediumDevice}px) {
    gap: 16px;
  }
`;

export const StyledLi = styled.li`
  list-style: none;
`;
