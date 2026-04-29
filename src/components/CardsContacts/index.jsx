import { Container, Card } from "./style.js"

import { Button } from "../Button/index.jsx";

export function CardsContacts() {
    return (
        <Container>
            <Card>
                <h3>Diamantino</h3>
                <p>Entre em contato com o Pastor Francisco para estar te auxiliando a achar sua célula.</p>
                <a target="_blank"  href="https://wa.me/5565999239760?text=Paz%20do%20Senhor!%20Gostaria%20de%20uma%20ajuda%20para%20encontrar%20uma%20célula%20perto%20de%20mim.">
                    <Button>
                        Entrar em contato
                    </Button>
                </a>
            </Card>
            <Card>
                <h3>Novo Diamantino</h3>
                <p>Entre em contato com o Pastor Pedro para estar te auxiliando a achar sua célula.</p>
                <a target="_blank" href="https://wa.me/5565999678125?text=Paz%20do%20Senhor!%20Gostaria%20de%20uma%20ajuda%20para%20encontrar%20uma%20célula%20perto%20de%20mim.">
                    <Button>
                        Entrar em contato
                    </Button>
                </a>
            </Card>
            <Card>
                <h3>Borjuí</h3>
                <p>Entre em contato com o Pastor Joemilson para estar te auxiliando a achar sua célula.</p>
                <a target="_blank" href="https://wa.me/5565996250134?text=Paz%20do%20Senhor!%20Gostaria%20de%20uma%20ajuda%20para%20encontrar%20uma%20célula%20perto%20de%20mim.">
                    <Button>
                        Entrar em contato
                    </Button>
                </a>
            </Card>
        </Container>
    )
}