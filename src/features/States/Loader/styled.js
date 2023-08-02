import { styled } from "styled-components";

export const Icon = styled.svg`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 91px;
  height: 91px;
  margin-top: 120px;
  animation: spin 2s linear infinite;

  @media (max-width: ${({ theme }) => theme.media.phoneMedia}px) {
    margin-top: 24px;
    width: 35px;
    height: 35px;
  }
`;

