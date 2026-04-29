import styled from "styled-components";

import HeroBackground from "../../assets/image-hero-home.webp"
import HeroContribuitionsBackground from "../../assets/image-hero-contribuitions.webp"
import HeroEventsBackground from "../../assets/image-hero-events.webp"

export const Background = styled.div`
    box-shadow: var(--shadow);
    background: ${(props) => {
        if (props.$variant === 'secondary') return `url(${HeroContribuitionsBackground})`;
        if (props.$variant === 'tertiary') return `url(${HeroEventsBackground})`; 
        return `url(${HeroBackground})`; 
    }};
    background-size: cover;
    overflow-y: hidden;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    width: 100vw;
    height: 100%;
    height: auto;
`