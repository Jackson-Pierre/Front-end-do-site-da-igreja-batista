import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
    z-index: 100; 
    border-bottom: solid 1px var(--styled-font-color);
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;
    max-width: 1320px;
    max-height: 80px;

    @media (max-width: 1350px) {
        padding: 1rem 2rem;
    }
`;

export const ImageLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    img {
        max-width: 65px;
        width: 100%;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;

    div {
        width: 30px;
        height: 3px;
        background-color: var(--primary-color);
        border-radius: 10px;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const CloseButton = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-self: flex-end;
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;
        margin-bottom: 2rem;

        div {
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 10px;
        }

        div:nth-child(1) { transform: rotate(45deg); top: 13px; }
        div:nth-child(2) { transform: rotate(-45deg); top: 13px; }
    }
`;

export const Overlay = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 150;
        transition: 0.4s ease-in-out;
        opacity: ${props => (props.$isOpen ? "1" : "0")};
        visibility: ${props => (props.$isOpen ? "visible" : "hidden")};
    }
`;

export const Navigation = styled.nav`
    display: flex;

    ul {
        display: flex;
        gap: 1.5rem;
        font-size: 1.25rem;
        font-weight: 600;
        list-style: none;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px; 
        height: 100vh;
        background-color: var(--background-color);
        z-index: 200;
        flex-direction: column;
        padding: 2rem;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
        transform: ${props => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        ul {
            flex-direction: column;
            align-items: end;
            gap: 2rem;
        }
    }
`;

export const LinkHeader = styled(Link)`
    position: relative;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: ${props => props.$isActive ? 'var(--secondary-color)' : 'var(--primary-color)'};

    &:hover {
        color: var(--secondary-color);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -0.2rem;
        left: 0;
        width: 100%;
        min-height: 3px;
        background-color: var(--secondary-color);
        transform: scaleX(0);
        transform-origin: center;   
        transition: all 0.3s ease; 
        transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
    }

    &:hover::after {
        transform: scaleX(1);
        height: 2px;
    }

    @media (max-width: 768px) {
        top: 8rem;
        font-size: 2.5rem;
    }
`;