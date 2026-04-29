import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 1.625rem;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 4rem 0;
    padding: 2rem 1rem 0rem 1rem;
`

export const Card = styled.div`
    display: flex;
    width: 100%;
    max-width: 320px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: var(--white);
    box-shadow: var(--shadow);
    padding: 4rem 0;
    gap: 2rem;
    border-radius: 1.625rem;

    p{
        max-width: 80%;
    }
`;