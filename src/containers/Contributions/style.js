import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow-x: hidden;
    padding-bottom: 5rem;

    @media (max-width: 768px) {
        padding-top: 6rem;
    }   
`

export const Box = styled.div`
    max-width: 1440px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
    height: 100%;
    gap: 10.25rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 3rem 30rem;
    min-width: 100%;
    min-height: 100%;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2, span{
            color: var(--white);
            font-size: 4rem;
            font-weight: 700;
            line-height: 4rem;
            text-align: center;
        }

        p{
            font-weight: 600;
            font-size: 1.5rem;
            color: var(--white);
            text-align: center;
            max-width: 900px;
        }

        span{
            color: var(--styled-font-color);
        }
    }
`;

export const ContentModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    gap: 1.5rem;

    div{
        background-color: var(--secondary-background-color);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 400px;
        max-width: 80%;
        min-height: 38px;
        padding: 0.6rem 1rem;
        margin-top: 1.5rem;

        span, strong{
            font-weight: 600;
            font-size: 1.25rem;
        }

        strong{
            animation: fadeIn 0.3s;
            text-align: center;
            margin-left: 50%;
            transform: translateX(-50%);
        }

        button{
            border: none;
            background: none;
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--main-button);
        }
    }

    h3{
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    img{
        border-radius: 1.5rem;
        width: 60%;
        max-width: 390px;
        height: auto;
    }

    p{
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
        max-width: 600px;
        max-width: 86%;
    }
`

export const Modal = styled.div`
    background-color: var(--background-color); 
    z-index: 2;
    margin-top: -30rem;
    width: 90%;
    max-width: 1320px;
    border-radius: 2rem;
    padding: 3rem 2rem;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
`;

export const ContentInfo = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
`;

export const Location = styled.div`
    margin-top: 2.5rem;
    padding: 0 4rem;
    display: flex;
    gap: 1rem;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        gap: 6rem;
    }
`

export const ContentLocal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 1rem;

    h3{
        margin-bottom: 0.4rem;
        font-weight: 700;
        font-size: 2.25rem;
    }

    p{
        font-weight: 600;
        font-size: 1.5rem;
        max-width: 670px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-bottom: 1.25rem;

        @media (max-width: 768px) {
            margin: 2rem 0;
            gap: 1rem;
        }

        span{
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--secondary-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;

            @media (max-width: 768px) {
                gap: 1rem;
                font-size: 1.5rem;
                justify-content: start;
                text-align: start;
            }
        }
    }

    @media (max-width: 768px) {
        align-items: center;

        p{
            text-align: center;
        }
    }
`

export const ModalLocal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    box-shadow: var(--shadow);
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    min-height: 280px;
    max-height: 360px;
    max-width: 520px;

    iframe{
        width: 100%;
        height: 100%;
        min-height: 260px;
        border-radius: 1rem;
        border: none;
    }
`