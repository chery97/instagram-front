import { createPortal } from 'react-dom';

const portalElement = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {
    return createPortal(<div>{children}</div>, portalElement);
};
export default Modal;
