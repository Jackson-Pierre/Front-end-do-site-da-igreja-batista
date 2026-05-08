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

    @media (max-width: 768px) {
        font-size: 2rem;
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

        @media (max-width: 768px) {
            font-size: 1.25rem;
        }
    }
`

export const FooterContent = styled.div`
    padding: 6rem 0rem 5rem 0rem;
    display: flex;
    width: 100%;
    max-width: 1440px;
    justify-content: space-around;
    align-items: start;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 6rem;
        align-items: center;
    }
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

    .privacy-policy{
        text-decoration: underline;
    }

    p{
        font-size: 1.25rem;
        color: var(--white);
        font-weight: 600;
        max-width: 100%;
        margin-top: -1.5rem;
    }

    @media (max-width: 768px) {
        max-width: 80%;

        .privacy-policy{
        font-size: 2rem;
    }

        p{
            font-size: 2rem;
        }

        img{
            width: 40%;
        }
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

    @media (max-width: 768px) {
        max-width: 80%;
        p{
            font-size: 2rem;
            text-align: center;
        }

        div{
            justify-content: center;
            gap: 4rem;
            margin-top: 2rem;

            img{
                width: 80%;
            }
        }
    }
`