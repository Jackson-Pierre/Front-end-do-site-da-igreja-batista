import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import { Container, ImageSection, InfoSection, Grid } from "./style.js";
import { Button } from "../Button/index.jsx";

export function CardsCultos() {
    const [cultos, setCultos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCultos() {
            try {
                const { data } = await api.get("/cultos");
                setCultos(data.slice(0, 3));
            } catch (error) {
                console.error("Erro ao carregar cultos:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCultos();
    }, []);

    if (loading) return null;
    return (
        <Grid>
            {cultos.map((culto) => (
                <Container key={culto.id}>
                    <ImageSection $bgImage={culto.path}>
                        <div className="date-tag">
                            {culto.date}
                        </div>
                    </ImageSection>

                    <InfoSection>
                        <h4>{culto.name}</h4>
                        <p>{culto.preacher}</p>
                        
                        <a href={culto.url_live} target="_blank" rel="noopener noreferrer">
                            <Button>Assistir Agora</Button>
                        </a>
                    </InfoSection>
                </Container>
            ))}
        </Grid>
    );
}