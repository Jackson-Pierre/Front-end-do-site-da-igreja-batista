import { Container, LinkBack } from "./style.js";

function NotFound() {
    return (
        <Container>
            <h2>404</h2>
            <h3>Página Não Encontrada</h3>
            <p>A página que você está procurando não existe.</p>
            <LinkBack to="/">Clique aqui para voltar</LinkBack>
        </Container>
    );
}

export default NotFound;