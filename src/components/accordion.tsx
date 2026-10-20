import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useEffect, useContext, createContext, useState, useId, type ReactNode } from 'react';

const AccordionGroupContext = createContext<AccordionGroupContextType | null>(null);
type AccordionGroupContextType = {
    openId: string | null;
    openItem: (id: string) => void;
    defaultOpenFirst?: boolean;
    claimFirstOpen:(id: string) => void;
};

type AccordionGroupProps = {
    children: ReactNode;
    defaultOpenFirst?: boolean;
};

function AccordionGroup({ children, defaultOpenFirst = false }: AccordionGroupProps) {
    const [openId, setOpenId] = useState<string | null>(null);
    const hasClaimedFirst = useRef(false);
    
    function claimFirstOpen(id: string) {
        if (!hasClaimedFirst.current) {
            hasClaimedFirst.current = true;
            setOpenId(id);
        }
    }

    function openItem(id: string) {
        setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
    }

    return (
        <AccordionGroupContext.Provider value={{ openId, openItem, defaultOpenFirst, claimFirstOpen }}>
            {children}
        </AccordionGroupContext.Provider>
    );
}

type AccordionProps = {
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
};

function Accordion({ title, content, defaultOpen = false, headingLevel = 3 }: AccordionProps) {
    const id = useId();
    const groupContext = useContext(AccordionGroupContext);
    const [localOpen, setLocalOpen] = useState(defaultOpen);

    const isOpen = groupContext ? groupContext.openId === id : localOpen;

    function handleToggle() {
        if (groupContext) {
            groupContext.openItem(id);
        } else {
            setLocalOpen(!localOpen);
        }
    }

    useEffect(() => {
        if (groupContext?.defaultOpenFirst) {
            groupContext.claimFirstOpen(id);
        }
    }, [groupContext, id]);

    return (
        <div className={isOpen ? "accordionItem open" : "accordionItem closed"} id={id}>
            <div role="heading" aria-level={headingLevel}>
                <button type="button" onClick={handleToggle} aria-expanded={isOpen} aria-controls={`content-${id}`} id={`button-${id}`}>{title}<ChevronDown aria-hidden="true" /><ChevronUp aria-hidden="true" /></button>
            </div>
            <div className="accordionContent" id={`content-${id}`} role="region" aria-labelledby={`button-${id}`} inert={isOpen ? undefined : true}>
                <div className="pd12">
                    {content}  
                </div>
            </div>
        </div>
    )
}

export { Accordion, AccordionGroup }
export default Accordion
