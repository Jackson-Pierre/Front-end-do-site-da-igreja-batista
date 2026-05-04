import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    max-width: 1440px;
`

export const LinkHeader = styled(Link)`
    font-size: 1.25rem;
    font-weight: 600;
    position: relative;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: var(--white);

    &:hover {
        color: var(--secondary-color);
    }
`;

export const Copyright = styled.div`
    padding: 1.5rem 0;
    border-top: 2px solid var(--secondary-color);
    width: 100%;

    p{
        font-size: 1rem;
        color: var(--white);
        text-align: center;
        font-weight: 500;
    }
`

export const FooterContent = styled.div`
    padding: 6rem 0rem 5rem 0rem;
    display: flex;
    width: 100%;
    max-width: 1440px;
    justify-content: space-around;
    align-items: start;
`

export const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
`

export const Visual = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    max-width: 442px;

    p{
        font-size: 1.25rem;
        color: var(--white);
        font-weight: 600;
        max-width: 100%;
        margin-top: -1.5rem;
    }
`

export const Local = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 442px;
    gap: 2rem;

    p{
        font-size: 1.25rem;
        color: var(--white);
        font-weight: 600;
        text-align: left;
        max-width: 100%;
    }

    div{
        display: flex;
        gap: 2rem;
        align-items: center;
        
        a, img{
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover{
                filter: brightness(0.8);
            }
        }
    }
`