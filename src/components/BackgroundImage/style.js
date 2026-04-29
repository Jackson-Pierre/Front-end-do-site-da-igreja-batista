import styled from "styled-components";

import HeroBackground from "../../assets/image-hero-home.webp"
import HeroCellBackground from "../../assets/image-hero-cell.webp"

export const Background = styled.div`
    box-shadow: var(--shadow);
    background: ${(props) => {
        if (props.$variant === 'secondary') return `url(${HeroCellBackground})`; 
        return `url(${HeroBackground})`; 
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1320px;
    width: 100%;
    border-radius: 2rem;
    height: auto;
    padding: 10rem 0;
`