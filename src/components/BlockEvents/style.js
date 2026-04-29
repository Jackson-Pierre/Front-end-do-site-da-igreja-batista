import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    min-width: 90vw;
    max-width: 1096px;
    padding: 4rem 0;
    gap: 3.5rem;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1096px;
    max-height: 500px;
    background-color: var(--white);
    border-radius: 1.625rem;
    box-shadow: var(--shadow);

    @media (max-width: 768px) {
        flex-direction: column;
        max-height: 100%;
    }
`;

export const ImageEvent = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100%;
    height: 500px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 1.625rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    max-width: 696px;
    padding: 3.75rem 2.75rem;
    gap: 2rem;
`;

export const Utils = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p{
        font-weight: 600;
        font-size: 1rem;
        color: var(--main-button);

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3{
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.35rem;
    }

    p{
        font-weight: 600;
        font-size: 1rem;
        max-height: 120px;
        overflow: auto;
        color: var(--secondary-color);

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: var(--secondary-background-color); 
            border-radius: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--secondary-color);
            border-radius: 0.8rem;
            border: 2px solid var(--secondary-background-color);
        }
    }

    @media (max-width: 768px) {
        h3{
            font-size: 2.5rem;
            line-height: 2.8rem;
        }

        p{
            font-size: 1.5rem;
            margin: 2rem 0;
        }
    }
`;

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const Date = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    background-color: var(--primary-color);
    width: 40vw;
    height: 40vh;
    max-width: 100px;
    max-height: 100px;
    
    span{
        font-weight: 700;
        color: #ffffff;
        text-align: center;
    }

    .month{
        font-size: 1.5rem;
        line-height: 18px;
    }

    .day{
        font-size: 3rem;
        line-height: 38px;
    }

    @media (max-width: 768px) {
        gap: 0.2rem;
        max-width: 70px;
        max-height: 70px;

        .month{
            font-size: 2rem;
            line-height: 14px;
        }

        .day{
            font-size: 4rem;
            line-height: 28px;
        }
    }
`;

export const Time = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p{
        display: flex;
        align-items: center;
        color: var(--secondary-color);
        gap: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;

        img{
            width: 2rem;
        }

        @media (max-width: 768px) {
            font-size: 1.45rem;
        }
    }

    @media (max-width: 768px) {
        gap: 0.8rem;
    }
`;

export const Line = styled.div`
    width: 2px;
    height: 3rem;
    background-color: var(--secondary-color);

    @media (max-width: 768px) {
        height: 6rem;
    }
`;