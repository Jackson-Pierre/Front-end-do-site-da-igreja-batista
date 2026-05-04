import { Container, Box, HeaderPolicy, Content } from "./styles.js";

function PrivacyPolicy() {
    return(
        <Container>
            <Box>
                <HeaderPolicy>
                    <h2>Política de Privacidade</h2>
                    <i>Atualização em 21 de Maio de 2026</i>
                </HeaderPolicy>
                <Content>
                    <div>
                        <h3>1. Coleta e Uso de Informações</h3>
                        <p>Nós coletamos apenas as informações estritamente necessárias para o atendimento espiritual e intercessão. Ao utilizar nosso formulário de Pedido de Oração, solicitamos:</p>
                        <ul>
                            <li>Dados coletados: Nome, telefone e a descrição do pedido.</li>
                            <li>Finalidade: O conteúdo é encaminhado diretamente ao Pastor Presidente para fins de oração e aconselhamento. Caso o Pastor ou a equipe sintam uma orientação divina para uma resposta específica, o telefone fornecido poderá ser utilizado para um breve contato.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>2. Confidencialidade e Compartilhamento</h3>
                        <p>A privacidade dos seus pedidos é tratada com temor e responsabilidade:</p>
                        <ul>
                            <li>Acesso Restrito: O recebimento inicial é exclusivo do Pastor Presidente.</li>
                            <li>Intercessão em Grupo: Pedidos que não possuam teor íntimo ou sensível podem ser compartilhados com um grupo específico de intercessão da igreja. Pedidos de natureza íntima permanecem em sigilo absoluto entre o fiel e a liderança pastoral.</li>
                            <li>Dados de Terceiros: Não compartilhamos, vendemos ou distribuímos seus dados para empresas ou outras organizações.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>3. Doações e Contribuições (Dízimos e Ofertas)</h3>
                        <p>Para sua segurança, nosso site não processa pagamentos nem armazena dados financeiros. Disponibilizamos apenas a chave PIX para que a transação seja realizada de forma externa e segura dentro do aplicativo do seu banco.</p>
                    </div>

                    <div>
                        <h3>4. Retenção e Exclusão de Dados</h3>
                        <ul>
                            <li>Armazenamento Temporário: As mensagens e pedidos são mantidos apenas pelo tempo necessário para a realização da intercessão. Após o ciclo de oração, os registros são devidamente descartados.</li>
                            <li>Solicitação de Exclusão: A qualquer momento, você pode solicitar a remoção definitiva de qualquer informação enviada entrando em contato diretamente com o Pastor Presidente Francisco Nijini.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>5. Segurança da Informação</h3>
                        <p>A integridade do tráfego de dados neste site é garantida pela Pixel Bridge, que implementou protocolos de segurança para assegurar que as mensagens enviadas pelo formulário cheguem ao destino final sem interceptações ou desvios, garantindo uma comunicação direta entre o usuário e a igreja.</p>
                    </div>

                    <div>
                        <h3>6. Cookies e Tecnologias de Rastreamento</h3>
                        <ul>
                            <li>Visitantes: Este site não utiliza cookies de rastreamento, ferramentas de análise de comportamento ou publicidade para o público em geral.</li>
                            <li>Administradores: Cookies são utilizados exclusivamente na área restrita de administração para manter a sessão de login ativa e garantir a segurança do painel de controle.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>7. Conteúdo em Vídeo e Transmissões</h3>
                        <p>O site exibe links para transmissões de cultos gravados e ao vivo hospedados em plataformas terceiras (como YouTube/Facebook). Ao acessar esses links, o usuário estará sujeito às políticas de privacidade das respectivas plataformas.</p>
                    </div>
                </Content>
            </Box>
        </Container>
    )
}

export default PrivacyPolicy;