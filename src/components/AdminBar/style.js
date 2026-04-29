import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--primary-color);
    padding: 10rem 0 0 0;
    z-index: 9;
`;

export const Box = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        width: 100%;
        gap: 3rem;
        max-height: 100%;
`

export const ImageLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;

    img{
        width: 100%;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    width: 100%;

    ul{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.25rem;
        font-weight: 600;
    }

    li {
        width: 80%; 
        display: flex;
        justify-content: center;
    }
`;

export const LinkAdmin = styled(Link)`
    display: block;
    text-align: center;
    position: relative;
    width: 100%;
    transition: all 0.3s ease-in-out;
    color: ${props => props.$isActive ? 'var(--secondary-color)' : 'var(--secondary-background-color)'};

    &:hover {
        color: var(--secondary-color);
    }

    &::after {
        content: "";
        display: flex;
        position: absolute;
        bottom: -0.2rem;
        left: 0;
        width: 100%;
        min-height: 3px;
        background-color: ${props => props.$isActive ? 'var(--secondary-color)' : 'var(--secondary-background-color)'};
        transition: all 0.3s ease; 
    }

    &:hover::after {
        background-color: var(--secondary-color);
    }
`;