import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1320px;
    padding: 4rem 0;
    gap: 3.5rem;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    max-width: 400px;
    border-radius: 1.75rem;
    background-color: var(--white);
`

export const Image = styled.div`
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 175rem;

    img{
        width: 100%;
        border-radius: 1.75rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 2rem 0;

    h3{
        font-size: 1.25rem;
        font-weight: 600;
    }

    p{
        font-size: 1rem;
        font-weight: 600;
        color: var(--secondary-color);
    }
`