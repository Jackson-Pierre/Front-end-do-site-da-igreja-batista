import styled from "styled-components";

export const ButtonContainer = styled.button`
    min-width: 60%;
    max-width: 350px;
    min-height: 48px;
    color: var(--white);
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    background: ${(props) => {
        if (props.$variant === 'secondary') return 'var(--secondary-button)'; 
        return 'var(--main-button)'; 
    }};
    border: ${(props) => {
        if (props.$variant === 'secondary') return '2px solid var(--white)';
        return 'none';
    }};
    padding: ${(props) => {
        if (props.$variant === 'primary') return '2rem 1rem';
        if (props.$variant === 'secondary') return '2rem 0.8rem';
        return '0.5rem 3.5rem';
    }};
    border-radius: ${(props) => {
        if (props.$variant === 'primary') return '3.5rem';
        if (props.$variant === 'secondary') return '3.5rem';
        return '1.625rem';
    }};

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;

        padding: ${(props) => {
        if (props.$variant === 'primary') return '2rem 1rem';
        if (props.$variant === 'secondary') return '2rem 0.8rem';
        return '0.5rem 2rem';
        }};
    }
`;