import styled from "styled-components";
import { Tag, Tags } from "../Tile/styled";

export const StyledPagination = styled.div`
    height: 36px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    padding: 40px 0px 103px 0px;
`
export const StyledUl = styled(Tags)`
    display: flex;
    align-items: center;
    padding: 40px;
`

export const GrayLi = styled(Tag)`
    padding-right: 16px;
`
export const BlueLi = styled(Tag)`
    background: ${({theme}) => theme.color.pattensBlue};
`
export const ImageLessThan = styled.img`
    width: 7px;
    height: 11px;
    padding-right: 8px;
  
`
export const ImageGreaterThan = styled.img`
    width: 7px;
    height: 11px;
    padding-left: 8px;
  
`
export const PageNumber = styled.div`
    height: 24px;
    font-size: 16px;
    padding: 6px 24px ;
    color: ${({theme}) => theme.color.waterloo};
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Number = styled.div`
    font-weight: 600;
    color: ${({theme}) => theme.color.woodsmoke};
    padding: 8px;
`
