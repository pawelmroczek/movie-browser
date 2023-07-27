import styled from "styled-components";

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0;

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