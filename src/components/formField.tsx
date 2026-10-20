type FormFieldProps = {
    label: string;
    value: string;
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    error?: boolean | string;
    required?: boolean;
    id: string;
};

function FormField({ id, label, value, type = "text", onChange, helperText, error = false, required = false }: FormFieldProps) {
     
    const describedBy = [
        helperText && `helper-${id}`,
        error && `error-${id}`,
    ].filter(Boolean).join(" ") || undefined;

    return (
        <>
            <label htmlFor={id} className="bold dispBlock">{label}{required && <span className="error" aria-hidden="true"> *</span>}</label>
            {helperText && <p className="subHeading small-text" id={`helper-${id}`}>{helperText}</p>}
            <input className="mgTpMini" name={id} id={id} type={type} value={value} onChange={onChange} aria-invalid={error ? "true" : undefined} aria-describedby={describedBy} required={required} />
            {error && <span id={`error-${id}`} className="mgTpMini small-text error dispBlock" role="alert">{typeof error === "string" ? error : "This field is required"}</span>}
        </>
    )
}

export default FormField
