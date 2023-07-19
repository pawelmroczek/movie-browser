import styled from "styled-components";

export const StyledTile = styled.article`
    background: ${({ theme }) => theme.color.white};
    width: 324px;
    height: 650px;
    box-shadow: 0px 4px 12px 0px #BAC7D580; 
    border-radius: 5px;
    display: grid;
    grid-template-columns: auto;

    @media (max-width: 320px) {
        width: 288px;
        height: 201px;
    }
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;
    padding: 16px;

    @media (max-width: 320px) {
        width: 114px;
        height: 169px;
    }
`;

export const TileContent = styled.div`
    padding: 0px 16px 0px 16px;
    width: 100%;
    height: 105px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px; 

    @media (max-width: 320px) {
        width: 126px;
        height: 149px;
    }
`

export const Title = styled.header`
    height: 29px;
    font-size: 22px;
    font-weight: 500;

    @media (max-width: 320px) {
        height: 42px;
        font-size: 16px;
    }
`

export const Year = styled.div`
    color: ${({theme}) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 320px) {
        height: 17px;
        font-size: 13px;
    }
`
export const Tags = styled.ul`
    list-style: none;
    max-height: 36px;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
`
export const Tag = styled.li`
    background: ${({theme}) => theme.color.mystic};
    height: 20px;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 5px;
    margin: 8px;

    @media (max-width: 320px) {
        height: 19px;
        font-size: 10px;
        padding: 4px 8px;
        margin: 4px;
    }
`

export const Rating = styled.div`
    width: 140px;
    height: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0px 12px;

`
export const StarImage = styled.img`
    width: 24px;
    height: 22.87px;

    @media (max-width: 320px) {
        width: 16px;
        height: 15.25px;
    }
`
export const Rate = styled.div`
    font-size: 16px;
    font-weight: 600;
    padding: 0px 12px;

    @media (max-width: 320px) {
        font-size: 13px;
    }
`
export const Votes = styled.div`
    font-size: 16px;
    color: ${({theme}) => theme.color.waterloo};

    @media (max-width: 320px) {
        font-size: 13px;
    }
`