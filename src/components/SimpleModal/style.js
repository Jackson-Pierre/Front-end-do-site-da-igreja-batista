import styled from "styled-components";

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1060px;
    padding: 3.125rem 4.25rem;
    background-color: var(--filter);
    border-radius: 2rem;

    h2{
        color: var(--white);
        text-align: center;
        font-size: 4rem;
        font-weight: 700;

        @media (max-width: 768px) {
            line-height: 100%;
            margin-bottom: 1.5rem;
        }
    }

    p{
        color: var(--white);
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        max-width: 748px;
    }
`