import { Container, Card } from "./style.js";

import Icone1 from "../../assets/icon/ico-contribuicao-1.svg";
import Icone2 from "../../assets/icon/ico-contribuicao-2.svg";
import Icone3 from "../../assets/icon/ico-contribuicao-3.svg";

export function CardsInfos() {
    return (
        <Container>
            <Card>
                <img src={Icone1} alt="icone de contribuição" />
                <h3>
                    Manutenção da Casa
                </h3>
                <p>
                    Sua oferta ajuda a manter nosso espaço de adoração acolhedor para todos.
                </p>
            </Card>
            <Card>
                <img src={Icone2} alt="icone de contribuição" />
                <h3>
                    Projetos Sociais
                </h3>
                <p>
                    Levamos alimento, vestes e esperança para famílias em situação de vulnerabilidade.
                </p>
            </Card>
            <Card>
                <img src={Icone3} alt="icone de contribuição" />
                <h3>
                    Missões
                </h3>
                <p>
                    Apoiamos missionários em todo o mundo para que o Evangelho alcance todas as nações.
                </p>
            </Card>
        </Container>
    );
}