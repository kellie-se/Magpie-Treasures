import {X, Check, InfoIcon, TriangleAlert, CircleAlert} from 'lucide-react'

const icons = {
    info: InfoIcon,
    success: Check,
    warning: CircleAlert,
    error: TriangleAlert,
};

type ToastProps = {
    type: "info" | "success" | "warning" | "error",
    text: string,
    onClose?: () => void;
};

function Toast({ type, text, onClose }: ToastProps) {
  const Icon = icons[type];

  return (
    <div className={`toast ${type}`} role="status">
        <div className="colGap12 colHolder">
            <span><Icon className="icon" aria-hidden="true" /></span>
            <p className="flexGrow1">{text}</p>
            <button type="button" onClick={onClose} disabled={!onClose} aria-label="Close message">
                <X className="closeIcon" aria-hidden="true" />
            </button>
        </div>
    </div>
  )
}

export default Toast
