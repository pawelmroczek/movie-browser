import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 672px;
        grid-column-gap: 24px;
    }

    @media (min-width: 1440px) {
        max-width: 672px;
        
    }
`
export const Content= styled.div`
    padding: 16px;
    display: grid;
    grid-gap: 8px;
    justify-content: center;
    

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        
    }
`
export const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 24px 0px 12px 16px;
    margin-left: 10%;

    @media (min-width: 768px) {
        font-size: 36px;
        margin-left: 0%;
    }

    @media (min-width: 1440px) {
        font-size: 36px;
        align-self: flex-start;
        margin-left: -50%;
    }
`
