import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 3rem 3rem 25rem;
    background-color: var(--background-color);
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    border-radius: 2rem;
    padding: 2.5rem 2.5rem;
    background: var(--secondary-background-color);
`;

export const Label = styled.label`
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: -0.8rem;
`;

export const Input = styled.input`
    background: var(--background-color);
    border: none;
    border-radius: 1rem;
    padding: 0.8rem 1.2rem;
    color: var(--primary-color);
    outline: none;
    cursor: pointer;
`;

export const FileButton = styled.label`
    background-color: var(--secondary-color);
    padding: 0.8rem;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    color: var(--primary-color);
    
    input { 
        display: none; 
    }

    &:hover {
        filter: brightness(0.9);
    }
`;