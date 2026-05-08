import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    h2{
        max-width: 80%;
        font-size: 8rem;
        font-weight: 700;
    }

    h3{
        font-size: 3rem;
        font-weight: 600;
        max-width: 80%;
    }

    p{
        max-width: 80%;
        font-size: 1.25rem;
        font-weight: 500;
    }
`

export const LinkBack = styled(Link)`
    margin-top: 2rem;
    transition: all 0.2s ease;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;

    &:hover{
        opacity: 0.8;
    }
`
