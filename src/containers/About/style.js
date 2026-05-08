import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

`

export const Box = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10.25rem;
`

export const BoxImage = styled.div`
    display: flex;
    align-items: end;
    justify-content: start;
    padding: 0 0 10rem 6rem;
    height: 100vh;
    width: 100%;
    gap: 2rem;
    
    h2{
        color: var(--white);
        font-size: 4rem;
        font-weight: 700;
    }

    p{
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 600;
        width: 90%;
        max-width: 584px;
    }

    @media (max-width: 768px) {
        height: 80vh;
        padding: 20rem 0 10rem 3rem;
    }
`

export const Fundamentals = styled.div`
    padding: 6rem 3rem;
    width: 100vw;
    text-align: center;
    background-color: var(--secondary-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    p {
        font-weight: 600;
        font-size: 1.5rem;
        width: 84%;
        max-width: 670px;
    }
`

export const ContactSection = styled.section`
    background-color: var(--primary-color);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: solid 2px var(--secondary-color);
    padding: 8rem 0;
    gap: 3rem;

    .contact-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    h2{
        color: var(--white);
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        width: 80%;
        max-width: 480px;
    }

    p{
        color: var(--styled-font-color);
        font-size: 1.5rem;
        font-weight: 600;
        width: 80%;
        max-width: 742px;
        text-align: center;
    }
`

export const ContainerButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 50%;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 365px) {
        grid-template-columns: 1fr;
    }
`