import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); 
    backdrop-filter: blur(5px); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
`;

export const ModalContainer = styled.div`
    background-color: var(--secondary-background-color); 
    width: 90%;
    max-width: 600px;
    max-height: 85vh; 
    border-radius: 2.5rem;
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    .modal-content {
        overflow-y: auto; 
        padding-right: 10px;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--primary-color);
            border-radius: 10px;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 25px;
    background: none;
    border: none;
    z-index: 10;

    img {
        width: 40px;
        transition: transform 0.2s;
        cursor: pointer;
    }
`;