import styled from "styled-components";

import HeroBackground from "../../assets/image-hero-home.webp"
import HeroContribuitionsBackground from "../../assets/image-hero-contribuitions.webp"
import HeroEventsBackground from "../../assets/image-hero-events.webp"
import HeroAboutBackground from "../../assets/image-hero-about.webp"

export const Background = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: var(--shadow);
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    width: 100vw;
    height: 100%;
    height: auto;
    background: ${(props) => {
        if (props.$variant === 'secondary') return `url(${HeroContribuitionsBackground})`;
        if (props.$variant === 'tertiary') return `url(${HeroEventsBackground})`;
        if (props.$variant === 'quaternary') return `url(${HeroAboutBackground})`;
        return `url(${HeroBackground})`; 
    }};
`