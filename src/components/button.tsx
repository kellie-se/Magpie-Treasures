import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    buttonText: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    type?: "button" | "submit";
    icon?: LucideIcon;
    path?: string;
    onClick?: () => void;
};

function Button({ buttonText, variant = "primary", disabled, type = "button", icon, path, onClick }: ButtonProps) {
  const Icon = icon;
  const btnClass = variant === "primary" ? "primBtn" : "secBtn";

    if (path) {
        return (
            <>
                <Link to={path} className={`btn ${btnClass}`}>{Icon && <Icon className="mgRg8" aria-hidden="true" />}{buttonText}</Link>
            </>
        )
    }
            
    return (
        <>
            <button type={type} className={`btn ${btnClass}`} onClick={onClick} disabled={disabled}>{Icon && <Icon className="mgRg8" aria-hidden="true" />}{buttonText}</button>
        </>
    )
}

export default Button
