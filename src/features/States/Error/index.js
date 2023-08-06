import { toMovies } from "../../../routes";
import { Wrapper } from "../styled";
import { Button, Icon, StyledParagraph, Warning } from "./styled";

const Error = () => (
  <Wrapper>
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <path
        d="M23.615 105.837C23.55 105.837 23.49 105.837 23.42 105.832C21.845 105.752 20.3 105.412 18.83 104.817C11.595 101.877 8.10501 93.6115 11.04 86.3815L47.645 22.2515C48.905 19.9715 50.815 18.0615 53.145 16.7715C59.97 12.9915 68.6 15.4765 72.375 22.2965L108.74 85.9365C109.55 87.8415 109.895 89.3915 109.98 90.9715C110.175 94.7515 108.885 98.3765 106.355 101.182C103.825 103.987 100.35 105.642 96.575 105.832L23.975 105.837H23.615Z"
        fill="#D6E4FF"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M55.6253 50.1041C55.6253 47.6941 57.5903 45.7291 60.0003 45.7291C62.4103 45.7291 64.3753 47.6941 64.3753 50.1041V64.2441C64.3753 66.6591 62.4103 68.6191 60.0003 68.6191C57.5903 68.6191 55.6253 66.6591 55.6253 64.2441V50.1041ZM55.625 81.3495C55.625 78.9245 57.59 76.9495 60 76.9495C62.41 76.9495 64.375 78.8995 64.375 81.2945C64.375 83.7595 62.41 85.7245 60 85.7245C57.59 85.7245 55.625 83.7595 55.625 81.3495Z"
        fill="#200E32"
      />
    </Icon>
    <Warning>Ooops! Something went wrong...</Warning>
    <StyledParagraph>
      Please check your network connection and try again
    </StyledParagraph>
    <Button to={toMovies()}>Back to home page</Button>
  </Wrapper>
);

export default Error;
