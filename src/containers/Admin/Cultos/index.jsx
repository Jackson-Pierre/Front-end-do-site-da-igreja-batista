import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, TableContainer, TableHeader, TableRow } from "../table.js";

import Trash from "../../../assets/icon/trash.svg";
import Pencil from "../../../assets/icon/pencil.svg";

import {ModalAdmin} from "../../../components/ModalAdmin/index.jsx";
import { FormCulto } from "./Forms/FormCulto.jsx"; 

function Cultos() {
    const [cultos, setCultos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    async function loadCultos() {
        const { data } = await api.get("/cultos");
        setCultos(data);
    }

    useEffect(() => {
        loadCultos();
    }, []);

    async function deleteCulto(id) {
        if (window.confirm("Deseja excluir este culto?")) {
            await api.delete(`/cultos/${id}`);
            loadCultos();
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
                    <span>Nome do Culto</span>
                    <span>Pregador</span>
                    <span>Foto</span>
                    <span>Ações</span>
                </TableHeader>
                {cultos.map(culto => (
                    <TableRow key={culto.id}>
                        <span>{culto.name}</span>
                        <span>{culto.preacher}</span>
                        <img src={culto.path} alt={culto.name} />
                        <div className="actions">
                            <button onClick={() => deleteCulto(culto.id)}><img src={Trash} alt="Excluir" /></button>
                            <button onClick={() => handleEdit(culto)}><img src={Pencil} alt="Editar" /></button>
                        </div>
                    </TableRow>
                ))}
            </TableContainer>

            <ModalAdmin isOpen={modalOpen} setIsOpen={setModalOpen}>
                <FormCulto 
                    item={selectedItem} 
                    onClose={() => setModalOpen(false)} 
                    onUpdate={loadCultos} 
                />
            </ModalAdmin>
        </Container>
    );
}

export default Cultos;