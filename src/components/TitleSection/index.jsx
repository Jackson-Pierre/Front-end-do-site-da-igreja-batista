import { Container, Line, Title } from './style.js';

export const TitleSection = ({children}) => {
    return (
        <Container>
            <Title>{children}</Title>
            <Line></Line>
        </Container>
    )
}
