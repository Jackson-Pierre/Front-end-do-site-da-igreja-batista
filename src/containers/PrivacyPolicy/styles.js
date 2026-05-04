import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 6rem 0;

    @media (max-width: 768px) {
        padding: 14rem 2rem 5rem 2rem;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    max-width: 1320px;
`

export const HeaderPolicy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    h2{
        font-size: 4rem;
        font-weight: 700;
    }

    i{
        margin-top: -1.25rem;
        font-size: 1.5rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h3{
        font-size: 2rem;
        font-weight: 700;
    }

    p{
        font-size: 1.25rem;
        font-weight: 500;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0 0 0 1.25rem ;

        @media (max-width: 768px) {
            padding: 0 0 0 1.7rem ;
        }
    }

    li{
        list-style: disc;
        font-size: 1.25rem;
    }
`