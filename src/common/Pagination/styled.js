import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px 0px 31px 0px;  

  @media (min-width: 768px) {
    padding: 40px 0px 103px 0px;  
    }
`;

export const StyledTags = styled.ul`
    margin: initial;
    gap: 8px;
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
   
    @media (min-width: 768px) {
        font-size: 16px;
    }
`;


export const GrayTag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    font-size: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;

    @media (min-width: 768px) {
        padding: 8px 16px;
        font-size: 14px;
        gap: 8px;
    }
`;

export const BlueTag = styled(GrayTag)`
    background: ${({ theme }) => theme.color.pattensBlue};
`;

export const FirstVector = styled.img`
    max-width: 5px;
    max-height: 8px;

    @media (min-width: 768px) {
        min-width: 7px;
        min-height: 11px;
    }
`;

export const SecondVector = styled(FirstVector)`

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Text = styled.p`
    display: none;

    @media (min-width: 768px) {
        display: inline;
        margin: initial;
    }
`

export const PageNumber = styled.div`
    font-size: 10px;
    padding: 0px 8px 0px 8px;
    color: ${({ theme }) => theme.color.waterloo};
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
    color: ${({ theme }) => theme.color.woodsmoke};
    padding: 2px;

    @media (min-width: 768px) {
        font-size: 16px;
        padding: 8px;
    }
 `
