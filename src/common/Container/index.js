import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 1368px;
    }
`
export const Content= styled.div`
    padding: 16px;
    grid-gap: 8px;
    display: grid;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
    }
`
export const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 24px 0px 12px 16px;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`
