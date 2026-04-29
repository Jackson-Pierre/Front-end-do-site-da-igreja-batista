import { useState } from "react";
import { api } from "../../../../services/api.js";
import { FormContainer, Label, FileButton, Input, TextArea } from "./style.js";
import { Button } from "../../../../components/Button/index.jsx";
import * as yup from "yup"; 

export function FormEvent({ item, onClose, onUpdate }) {
    const isEditing = !!item;
    const [formData, setFormData] = useState({
        name: item?.name || "",
        month: item?.month || "",
        day: item?.day || "",
        value: item?.value || "",
        link: item?.link || "",
        time: item?.time || "",
        local: item?.local || "",
        description: item?.description || "",
        file: null
    });

    async function handleSave(e) {
        e.preventDefault();
        const schema = yup.object().shape({
            file: isEditing ? yup.mixed() : yup.mixed(),
            name: yup.string(),
            month: yup.string(),
            day: yup.string(),
            value: yup.string(),
            link: yup.string(),
            time: yup.string(),
            local: yup.string(),
            description: yup.string(),
        });

        try {
            await schema.validate(formData, { abortEarly: false });

            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'file') {
                    if (formData.file) data.append("file", formData.file);
                } else {
                    data.append(key, formData[key]);
                }
            });

            if (isEditing) {
                await api.put(`/events/${item.id}`, data);
            } else {
                await api.post("/events", data);
            }
            onUpdate();
            onClose();
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                alert(err.inner[0].message);
            } else {
                alert("Erro ao salvar evento.");
            }
        }
    }

    return (
        <FormContainer onSubmit={handleSave}>
            <Label>Imagem:</Label>
            <FileButton>
                {formData.file ? formData.file.name : "Carregar img"}
                <input type="file" onChange={e => setFormData({...formData, file: e.target.files[0]})} />
            </FileButton>

            <Label>Nome do evento:</Label>
            <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ex: 21 dias na presença" />

            <div className="two-columns">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <Label>Mes:</Label>
                    <Input value={formData.month} onChange={e => setFormData({...formData, month: e.target.value})} placeholder="Ago" />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <Label>Dia:</Label>
                    <Input value={formData.day} onChange={e => setFormData({...formData, day: e.target.value})} placeholder="21" />
                </div>
            </div>

            <Label>Valor do Evento:</Label>
            <Input value={formData.value} onChange={e => setFormData({...formData, value: e.target.value})} placeholder="Gratis" />

            <Label>Link do evento:</Label>
            <Input value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />

            <div className="two-columns">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <Label>Horário:</Label>
                    <Input value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} placeholder="19:30 - 20:30" />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <Label>Local:</Label>
                    <Input value={formData.local} onChange={e => setFormData({...formData, local: e.target.value})} placeholder="Igreja Batista..." />
                </div>
            </div>

            <Label>Descrição do evento:</Label>
            <TextArea 
                value={formData.description} 
                onChange={e => setFormData({...formData, description: e.target.value})} 
                rows="4"
            />

            <Button type="submit" style={{ alignSelf: 'center', width: '150px' }}>
                {isEditing ? "Atualizar" : "Enviar"}
            </Button>
        </FormContainer>
    );
}