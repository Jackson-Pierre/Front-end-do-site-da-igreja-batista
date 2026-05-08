import { Container, Card, Image, Content } from "./style.js"

import Pastor1 from "../../assets/Pastor1.webp"
import Pastor2 from "../../assets/Pastor2.webp"
import Pastor3 from "../../assets/Pastor3.webp"

export function CardsPastors() {
    return (
        <Container>
            <Card>
                <Image>
                    <img src={Pastor1} alt="" />
                </Image>
                <Content>
                    <h3>Pr. Francisco</h3>
                    <p>Pastor do Prédio Centro</p>
                </Content>
            </Card>

            <Card>
                <Image>
                    <img src={Pastor2} alt="" />
                </Image>
                <Content>
                    <h3>Pr. Pedro</h3>
                    <p>Pastor do Prédio Novo Diamantino</p>
                </Content>
            </Card>

            <Card>
                <Image>
                    <img src={Pastor3} alt="" />
                </Image>
                <Content>
                    <h3>Pr. Joemilson</h3>
                    <p>Pastor do Prédio Borjuí</p>
                </Content>
            </Card>
        </Container>
    )
}