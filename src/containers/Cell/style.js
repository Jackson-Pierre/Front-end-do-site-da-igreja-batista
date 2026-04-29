import styled from "styled-components";

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
    height: 100%;
    max-width: 1440px;
    padding: 8rem 3rem 5rem 3rem;
    gap: 10.25rem;

    @media (max-width: 768px) {
        padding: 14rem 1rem 5rem 1rem;
    }
`;

export const Title = styled.div`
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
    text-align: center;
`;

export const Text = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
    text-align: center;
    max-width: 680px;

    @media (max-width: 768px) {
        max-width: 86%;
    }
`

export const DownloadWord = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    max-width: 1320px;
    padding: 6rem 2rem;
    gap: 3rem;
    box-shadow: var(--shadow);
    border-radius: 2rem;

    h2{
        font-weight: 700;
        font-size: 4rem;
    }
`;