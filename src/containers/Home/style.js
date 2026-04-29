import styled from "styled-components";

import BackgroundCell from "../../assets/image-celula.webp"

import { Link } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: var(--background-color);
    overflow-x: hidden;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    padding: 8rem 3rem 5rem 3rem;
    gap: 10.25rem;

    @media (max-width: 768px) {
        padding: 14rem 1rem 5rem 1rem;
    }
`;

export const Alert = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    span{
        color: var(--styled-font-color);
        font-weight: 600;
        font-size: 1.25rem;
        letter-spacing: 20%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;

    h1{
        color: var(--white);
        font-weight: 700;
        font-size: 4rem;
        line-height: 4rem;
    }

    p{
        color: var(--white);
        font-weight: 600;
        font-size: 1.5rem;
        max-width: 780px;
    }

    span{
        color: var(--styled-font-color);
    }

    @media (max-width: 1024px) {
        h1{
            font-size: 3.2rem;
            line-height: 3.2rem;
        }

        p{
            max-width: 90%;
        }
    }
`

export const ContainerButtons = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

export const SectionCell = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100vw;
    background-color: var(--primary-color);

    div{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1440px;
    }

    @media (max-width: 1024px) {
        padding: 0rem 2rem 4rem 2rem;

        div{
            flex-direction: column-reverse;
            gap: 3rem;
        }
    }
`

export const ContentCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 0 0 5rem;
    width: 60%;
    z-index: 1;

    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
    }

    span{
        color: var(--main-button);
        font-weight: 700;
        font-size: 1.25rem;
        letter-spacing: 20%;
    }

    h3{
        color: var(--white);
        font-weight: 700;
        font-size: 2.5rem;
    }

    p{
        color: var(--styled-font-color);
        font-weight: 600;
        font-size: 1.25rem;
        margin-bottom: 3rem;
    }

    @media (max-width: 1024px) {
        padding: 0;
        
        div{
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
`

export const ImageCell = styled.div`
    background: url(${BackgroundCell});
    background-position: center;
    background-repeat: no-repeat;
    width: 40%;
    height: 100%;
    padding: 20rem 0;
    z-index: 1;

    @media (max-width: 1024px) {
        display: none;
        background: url('');
        padding: 0;
    }
`

export const SectionEvents = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const HeaderEvents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`

export const LinkEvents = styled(Link)`
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.25rem;
    border-radius: 3rem;
    padding: 0.6rem 1.5rem;
    background: var(--styled-font-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const ContentEvents = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-size: 2rem;
        font-weight: 600;
    }

    p{
        color: var(--secondary-color);
        font-weight: 600;
        font-size: 1.25rem;
    }
`