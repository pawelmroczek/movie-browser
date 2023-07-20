import styled from "styled-components";

export const StyledNav = styled.nav`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.woodsmoke};
    height: 94px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const StyledNavLink = styled.nav`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid;
    border-color: ${({ theme }) => theme.color.white};
    padding: 8px 24px;
    border-radius: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
`;

export const Logo= styled.li`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 80px; 
`;

export const ImageLogo = styled.img`
    width: 40px;
    height: 40px;
    padding-right: 12px;
`

export const StyledUl = styled.ul`
    margin: 0 10px;
    display: flex;
    flex-direction: row;
`;

export const StyledLi = styled.li`
    margin: auto 10px;
    list-style: none;
`;
