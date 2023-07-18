import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    max-height: 1391px;
    margin: auto;
`
export const Content= styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    padding: 24px;
`
