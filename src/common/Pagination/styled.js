import styled from "styled-components";
import { Tag, Tags } from "../Tile/styled";

export const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 32px 0px 31px 0px;

  @media (min-width: 768px) {
    padding: 40px 0px 103px 0px;
    }
`;

export const StyledTags = styled(Tags)`
    margin: initial;
    gap: 12px;
`;


export const GrayTag = styled(Tag)`
    margin: initial;
    
`;

export const BlueTag = styled(Tag)`
    margin: initial;
    background: ${({theme}) => theme.color.pattensBlue};
`;

export const Image= styled.div`
    color: black;
`;

export const ImageLessThan = styled.div`
    padding-right: 8px;
    color: black;
`;

export const ImageGreaterThan = styled.img`
    width: 7px;
    height: 11px;
    padding-left: 8px;
    color: black;
`;

export const PageNumber = styled.div`
    font-size: 10px;
    padding: 0px 8px 0px 8px;
    color: ${({theme}) => theme.color.waterloo};
    display: flex;
    flex-wrap: row;
    align-items: center;

    @media (min-width: 768px) {
        font-size: 16px;
        padding: 0px 24px 0px 24px;
    }
`
export const Number = styled.div`
    font-weight: 600;
    color: ${({theme}) => theme.color.woodsmoke};
    padding: 8px;
 `
    