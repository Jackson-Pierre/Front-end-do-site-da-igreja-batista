import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 6rem 0;
    background-color: var(--background-color);

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 2rem 1.25rem;
    border-radius: 2rem;
    gap: 3.75rem;
    background-color: var(--secondary-background-color);
    width: 38%;

    h2 {
        margin-bottom: 20px;
        font-size: 2.25rem;
        font-weight: 600;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label{
        font-size: 1rem;
        font-weight: 600;
    }

    input{
        height: 3.25rem;
        border-radius: 1rem;
        padding: 0 1rem;
        font-size: 1rem;
        border: none;
        background-color: var(--input-color);
    }

    p{
        height: 10px;
        font-weight: 400;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    width: 100%;
`;

export const StatusMessage = styled.span`
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin-top: -45px; 
    margin-bottom: -20px;
    color: var(--primary-color);
    transition: all 0.3s ease;
`;

export const Loader = styled.span`
    width: 22px;
    height: 22px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    display: inline-block;
    animation: ${rotate} 0.8s linear infinite;
`;