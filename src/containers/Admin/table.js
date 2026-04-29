import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 3rem 3rem 25rem;
    background-color: var(--background-color);
`;

export const TableContainer = styled.div`
    width: 100%;
    background-color: var(--secondary-background-color);
    border-radius: 2rem; 
    overflow-x: hidden;
    border: solid 1px var(--primary-color);
        overflow-y: auto; 
        padding-right: 0;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--primary-color);
            border-radius: 10px;
        }

    span{
        color: var(--secondary-background-color);
    }
`;

export const TableHeader = styled.div`
    background-color: var(--primary-color);
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr; 
    padding: 1.5rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span:first-child {
        justify-content: flex-start;
    }
`;

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
    align-items: center;
    padding: 1rem 2.5rem;
    border-bottom: 1px solid var(--primary-color);

    &:last-child {
        border-bottom: none;
    }

    span {
        color: var(--primary-color);
        font-weight: 600;
        text-align: center;
    }

    span:first-child {
        text-align: left;
        font-weight: 600;
    }

    img {
        width: 90px;
        height: 50px;
        object-fit: cover;
        border-radius: 0.5rem;
        justify-self: center;
    }

    .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        
        button {
            background: none;
            border: none;
            display: flex;
            align-items: center;

        img {
            cursor: pointer;
            max-width: 24px;
            max-height: 24px;
        }
        }
    }
`;