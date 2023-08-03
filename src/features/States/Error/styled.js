import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { styled } from "styled-components";

export const Icon = styled.svg`
  margin-top: 180px;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    margin-top: 40px;
  }
`;

export const Warning = styled.span`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 43.2px */

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    font-size: 26px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 28.6px */
  width: 70%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    font-size: 16px;
  }
`;

export const Button = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  border-radius: 5px;
  padding: 16px 24px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px; /* 135.714% */
  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    font-size: 12px;
  }
`;
