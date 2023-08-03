import image from "../../../common/images/NoResults.svg";
import { Wrapper } from "../styled";
import { StyledImage } from "./styled";

const NoResults = () => (
  <Wrapper>
    <StyledImage src={image}/>
  </Wrapper>
);

export default NoResults;
