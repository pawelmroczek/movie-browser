import styled from "styled-components";

export const StyledTile = styled.article`
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px #BAC7D580; 
    border-radius: 5px;
    padding: 16px;
    max-width: 288px;
    display: flex;

    @media (min-width: 768px) {
        min-width: 324px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Image = styled.img`
    width: 114px;
    height: 169px;
    border-radius: 5px;

    @media (min-width: 768px) {
        width: 292px;
        height: 434px;
    }
`;

export const TileContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    padding-bottom: 4px;

    @media (min-width: 768px) {
        margin: 0;
    }
`

export const Title = styled.header`
    font-size: 16px;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 22px;
        padding: 16px 0px 8px;
    }
`

export const Year = styled.div`
    color: ${({theme}) => theme.color.waterloo};
    font-size: 13px;
    font-weight: 400;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`
export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 0px;
    margin: 0 auto;

    @media (min-width: 768px) {
        font-size: 16px;
    }
    
`
export const Tag = styled.li`
    background: ${({theme}) => theme.color.mystic};
    font-size: 10px;
    border-radius: 5px;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    :last-child{
        margin-right: 0;
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }
`

export const Rating = styled.div`
    height: 24px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
`
export const StarImage = styled.img`
    width: 16px;
    height: 15.25px;

    @media (min-width: 768px) {
        width: 24px;
        height: 22.87px;
    }
`
export const Rate = styled.div`
    font-size: 13px;
    font-weight: 600;
    padding: 0px 7px 0px 8px;

    @media (min-width: 768px) {
        font-size: 16px;
        padding: 0px 12px 0px 12px;
    }
`
export const Votes = styled.div`
    color: ${({theme}) => theme.color.waterloo};
    font-size: 13px;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`