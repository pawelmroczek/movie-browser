import { styled } from "styled-components";

export const StyledInput = styled.input`
  border: none;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGray};
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.darkerGray};
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 22.5%;
  padding: 12px 24px;
  border-radius: 33px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    width: 100%;
  }
`;
