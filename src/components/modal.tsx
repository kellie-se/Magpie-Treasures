import { X } from 'lucide-react';
import {createPortal} from 'react-dom'
import { useRef, useEffect, useId, type ReactNode } from 'react';

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    content: ReactNode,
    actions?: ReactNode,
    size?: "small" | "large",
};

function Modal({ isOpen, onClose, title, content, actions, size = "large" }: ModalProps) {
    const id = useId();

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement;
            modalRef.current?.focus();
        } else {
            previousFocusRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const root = document.getElementById("root");
        if (!root) {
            return;
        }

        if (isOpen) {
            root.setAttribute("inert", "");
        } else {
            root.removeAttribute("inert");
        }

        return () => {
            root.removeAttribute("inert");
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className="modalOverlay" onClick={handleOverlayClick}>
            <div className={`modal modal${size}`} role="dialog" aria-modal="true" aria-labelledby={`modalHeader-${id}`} ref={modalRef} tabIndex={-1}>
                <div className="modalHeader">
                    <h1 id={`modalHeader-${id}`}>{title}</h1>
                    <button type="button" className="noStyle" onClick={onClose} aria-label="Close modal"><X aria-hidden="true" /></button>
                </div>
                <div className="modalContent">
                    {content}
                </div>
                {actions && <div className="modalFooter">{actions}</div>}
            </div>
        </div>,
        document.body
    );
}

export default Modal