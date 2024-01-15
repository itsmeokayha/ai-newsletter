
import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === 'Escape' ? onClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

// Placeholder: Logic to trap focus within the modal when open

export default Modal;
