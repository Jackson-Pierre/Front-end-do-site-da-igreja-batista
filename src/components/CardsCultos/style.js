import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    flex-direction: row-reverse;
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
    border-radius: 1.625rem;
    box-shadow: var(--shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        max-width: 80%;
        max-height: 300px;
    }
`;

export const ImageSection = styled.div`
    height: 220px;
    position: relative;
    border-radius: 1.625rem;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;

    .date-tag {
        position: absolute;
        top: 15px;
        left: 15px;
        background-color: var(--background-color);
        padding: 5px 15px;
        border-radius: 0.8rem;
        font-size: 1rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        max-height: 60%;

        .date-tag {
            font-size: 1.5rem;
        }
    }
`;

export const InfoSection = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-size: 1.25rem;
        font-weight: 600; 
        text-align: center;
    }
    p { 
        color: var(--secondary-color);
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        h4{
            font-size: 1.65rem;
        }
        p{
            font-size: 1.25rem;
        }
    }
`;