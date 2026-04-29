import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
    width: 100%;
    background-color: var(--primary-color);
    border-radius: 2rem;
    padding: 3rem 0;
    gap: 1.25rem;

    h2{
        color: var(--white);
        font-size: 2.5rem;
        text-align: center;
        max-width: 90%;
        font-weight: 700;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    p, span{
        color: var(--styled-font-color);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        max-width: 724px;
    }

    @media (max-width: 768px) {
        p{
            max-width: 86%;
        }
    }
`;