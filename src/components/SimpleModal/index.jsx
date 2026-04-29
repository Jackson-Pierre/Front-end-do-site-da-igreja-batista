import { Modal } from './style.js'

export function SimpleModal({ title, text }){
    return(
        <Modal>
            <h2>{title}</h2>
            <p>{text}</p>
        </Modal>
    )
}