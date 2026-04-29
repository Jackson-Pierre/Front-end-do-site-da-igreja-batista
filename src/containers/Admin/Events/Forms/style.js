import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .two-columns {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
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
    width: 100%;
`;

export const FileButton = styled.label`
    background-color: var(--secondary-color);
    padding: 0.8rem;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    input { display: none; }
`;

export const TextArea = styled.textarea`
    background: var(--background-color);
    border: none;
    border-radius: 1rem;
    padding: 0.8rem 1.2rem;
    color: var(--primary-color);
    outline: none;
    resize: none;
    font-family: inherit;
`;