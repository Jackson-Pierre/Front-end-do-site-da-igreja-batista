import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, TableContainer, TableHeader, TableRow } from "../table.js";

import Trash from "../../../assets/icon/trash.svg";
import Pencil from "../../../assets/icon/pencil.svg";

import { ModalAdmin } from "../../../components/ModalAdmin/index.jsx";
import { FormEvent } from "./Forms/FormEvent.jsx"; 

function Events() {
    const [events, setEvents] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    async function loadEvents() {
        const { data } = await api.get("/events");
        setEvents(data);
    }

    useEffect(() => {
        loadEvents();
    }, []);

    async function deleteEvent(id) {
        if (window.confirm("Deseja excluir este evento?")) {
            await api.delete(`/events/${id}`);
            loadEvents();
        }
    }
    
    function handleEdit(item) {
        setSelectedItem(item);
        setModalOpen(true);
    }

    return (
        <Container>
            <TableContainer>
                <TableHeader>
                    <span>Nome do Evento</span>
                    <span>Local</span>
                    <span>Foto</span>
                    <span>Ações</span>
                </TableHeader>
                {events.map(event => (
                    <TableRow key={event.id}>
                        <span>{event.name}</span>
                        <span>{event.location}</span>
                        <img src={event.path} alt={event.name} />
                        <div className="actions">
                            <button onClick={() => deleteEvent(event.id)}><img src={Trash} alt="Excluir" /></button>
                            <button onClick={() => handleEdit(event)}><img src={Pencil} alt="Editar" /></button>
                        </div>
                    </TableRow>
                ))}
            </TableContainer>

            <ModalAdmin isOpen={modalOpen} setIsOpen={setModalOpen}>
                <FormEvent 
                    item={selectedItem} 
                    onClose={() => setModalOpen(false)} 
                    onUpdate={loadEvents} 
                />
            </ModalAdmin>
        </Container>
    );
}

export default Events;