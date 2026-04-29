import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import { Container, ImageSection, InfoSection, Grid } from "./style.js";
import { Button } from "../Button/index.jsx";

export function CardsEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecentEvents() {
            try {
                const { data } = await api.get("/events");
                const recentEvents = data.reverse().slice(0, 3);
                
                setEvents(recentEvents);
            } catch (error) {
                console.error("Erro ao carregar eventos recentes:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchRecentEvents();
    }, []);

    if (loading) return null;

    return (
        <Grid>
            {events.map((event) => (
                <Container key={event.id}>
                    <ImageSection $bgImage={event.path}>
                    </ImageSection>

                    <InfoSection>
                        <h4>{event.name}</h4>
                        <p className="fixed-text">venha participar desse mover</p>
                            
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                            <Button>Inscrever-se</Button>
                        </a>
                    </InfoSection>
                </Container>
            ))}
        </Grid>
    );
}