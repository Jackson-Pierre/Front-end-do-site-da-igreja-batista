import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow: hidden;
    padding-bottom: 5rem;

    
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
    padding: 8rem 0 30rem 0;
    width: 100%;
    height: 100%;
`

export const Modal = styled.div`
    background-color: var(--background-color); 
    z-index: 2;
    margin-top: -30rem;
    width: 100%;
    max-width: 1320px;
    border-radius: 2rem;
    padding: 3rem 2rem;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ModalTop = styled.div`
    width: 100%;
    max-width: 1096px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--styled-font-color);
    padding-bottom: 1rem;
`;

export const ContentModal = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    h3{
        font-weight: 600;
        font-size: 2rem;
    }

    p{
        font-weight: 600;
        font-size: 1.5rem;
        color: var(--secondary-color);
    }
`;

export const ImageModal = styled.div`
    width: 100%;
    max-width: 68px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
    }
`;