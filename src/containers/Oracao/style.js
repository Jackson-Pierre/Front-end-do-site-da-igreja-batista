import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    background: linear-gradient(180deg, var(--primary-color) 0%, var(--background-color) 100%);
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    padding: 8rem 3rem 5rem 3rem;
    gap: 10.25rem;

    @media (max-width: 768px) {
        padding: 14rem 1rem 5rem 1rem;
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10.25rem;
`
export const Form = styled.form`
    background-color: var(--secondary-background-color);
    border-radius: 1.625rem;
    width: 90%;
    padding: 1.5rem;
    gap: 2rem;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;

    label{
        font-weight: 600;
        font-size: 1.25rem;

        @media (max-width: 768px) {
            font-size: 1.7rem;
        }
    }

    input{
        width: 100%;
        height: 54px;
        border: none;
        border-radius: 1.25rem;
        padding: 0.5rem 1rem;
    }

    textarea{
        width: 100%;
        height: auto;
        min-height: 220px;
        max-height: 440px;
        border: none;
        border-radius: 1.25rem;
        padding: 1rem 1.25rem;
    }

    p{
        height: 10px;
        font-weight: 600;
        margin-top: 1rem;
    }
`

export const Button = styled.button`
    margin-top: 2rem;
    min-width: 220px;
    min-height: 48px;
    color: var(--white);
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: var(--main-button);
    padding: 0.5rem 3.5rem;
    border: none;
    border-radius: 3.125rem;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const SucessModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);

    div{
        background-color: var(--background-color);
        border-radius: 2.5rem;
        padding: 5rem 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p{
            max-width: 500px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
`