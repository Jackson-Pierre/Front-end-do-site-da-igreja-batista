import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    width: 100%;
    max-width: 1440px;
    margin-top: 3rem;
`;

export const Container = styled.div`
    width: 100%;
    width: 400px;
    max-width: 400px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 1.625rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-top: 1rem;
        max-width: 80%;
    }
`;

export const ImageSection = styled.div`
    min-height: 31.25rem;
    border-radius: 1.625rem;
    background-image: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;
`;

export const InfoSection = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h4 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .fixed-text {
        font-size: 1rem;
        color: var(--secondary-color); 
        font-weight: 600;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        h4{
            font-size: 1.65rem;
        }
        .fixed-text{
            font-size: 1.25rem;
        }
    }
`;

