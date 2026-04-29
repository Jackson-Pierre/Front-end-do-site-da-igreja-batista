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
    width: 100%;
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
`;

// Itens específicos que estavam no JSX
export const Row = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1;
`;

export const TextArea = styled.textarea`
    background: var(--background-color);
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    color: var(--primary-color);
    resize: none;
    outline: none;
    font-family: inherit;
    font-size: 0.9rem;
`;