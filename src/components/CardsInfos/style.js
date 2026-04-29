import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1320px;
    padding:4rem 0;
    gap: 3rem;
    height: 100%;

    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 6rem;
    }
`;

export const Card = styled.div`
    gap: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
    }

    p{
        font-size: 1rem;
        color: var(--styled-font-color);
        text-align: center;
        font-weight: 600;
        max-width: 390px;
    }

    @media (max-width: 1300px) {
        h3{
            font-size: 2rem;
        }

        p{
            max-width: 80%;
            text-align: center;
            font-size: 1.25rem;
        }
    }
`;