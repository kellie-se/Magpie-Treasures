import ThemeToggle from './themeToggle'
import logo from '../assets/logo.png'
import { Menu, X } from "lucide-react";
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";

type NavProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const mobileQuery = "(max-width: 1200px)";

function Nav({ theme, onToggleTheme }: NavProps) {
    const [mobileMenu,setMobileMenu] = useState<"open"|"close">("close");
    
    const toggleMobileMenu = () => setMobileMenu(mobileMenu === "open" ? "close" : "open");

    const [isMobile, setIsMobile] = useState(() => window.matchMedia(mobileQuery).matches);

    useEffect(() => {
        const query = window.matchMedia(mobileQuery);
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        query.addEventListener("change", handleChange);

        return () => {
            query.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        const menuHidden = document.querySelector("#hambMenu");
        const pageContent = document.querySelector(".pageContent");

        if (!menuHidden || !pageContent) return;

        if (!isMobile) {
            menuHidden.removeAttribute('inert');
            pageContent.removeAttribute('inert');
            document.documentElement.style.overflow = "auto";
        }
        else {
            if (mobileMenu === "open") {
                document.documentElement.style.overflow = "hidden";
                menuHidden.removeAttribute('inert');
                pageContent.setAttribute('inert','');
            }
            else {
                document.documentElement.style.overflow = "auto"; 
                menuHidden.setAttribute('inert','');
                pageContent.removeAttribute('inert');
            }
        }
    }, [mobileMenu,isMobile]);

    return (
        <>
            <nav className="mainNav pd1224 colHolder colJustifyBetween colMidAlign mbPd12">
                <div className="colHolder colGap24 colMidAlign">
                    <img src={logo} alt="Magpie Treasures Design System Logo" className="navLogo" />
                    <span className="mbHide">Magpie Treasures<br />Design System</span>
                </div>
                <div className='colHolder colGap24 colMidAlign mobColGap12'>
                    <button type="button" onClick={toggleMobileMenu} className="mobileMenu" aria-label="Menu" aria-expanded={mobileMenu === "open"} aria-controls="hambMenu">
                        {mobileMenu === "open" ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                    </button>
                    <div className={`colHolder colGap24 colMidAlign navItemHolder ${mobileMenu}`} id="hambMenu">
                        <Link to="/">Home</Link>
                        <Link to="/installation">Installation</Link>
                        <Link to="/foundations">Foundations</Link>
                        <Link to="/accessibility">Accessibility</Link>
                        <Link to="/components">Components</Link>
                    </div>
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
                </div>
            </nav>
        </>
    )
}

export default Nav
