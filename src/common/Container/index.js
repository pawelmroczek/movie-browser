import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const Content= styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 288px);
    grid-gap: 16px;
    justify-content: center;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, 324px);
        grid-gap: 24px;
    }

`
export const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 24px 0px 12px 16px;
    

    @media (min-width: 768px) {
        font-size: 36px;
    }

    @media (min-width: 1440px) {
        font-size: 36px;
        align-self: flex-start;
    }
`
