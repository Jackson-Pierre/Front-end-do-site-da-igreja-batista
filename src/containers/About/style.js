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

export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`