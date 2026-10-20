import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import Accessibility from './components/accessibility'
import Installation from './components/installation'
import Components from './components/components'
import Foundations from './components/foundations'
import ComponentPage from './components/component'
import NotFound from './components/notFound'
import ScrollToTop from './components/scrollToTop'
import {useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    /*COMMENT SAVED FOR OWN REFERENCE, "LONG" WAY TO DO THE BELOW:
    const defTheme = window.matchMedia('(prefers-color-scheme: dark)').matches === true ? "dark" : "light";

    const [theme,setTheme] = useState<"light"|"dark">(defTheme);
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);*/

    const [theme,setTheme] = useState<"light"|"dark">(() =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    );
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () =>
    setTheme(current => (current === "light" ? "dark" : "light"));

    return (
      <>
      <ScrollToTop />
      <a href="#main" className="skipToContentLink">Skip to main content</a>
      <div className="darkOverlay"></div>
      <div className="pageSetup">
        <Nav key={location.pathname} theme={theme} onToggleTheme={toggleTheme} />
        <main className="pageContent" id="main" tabIndex={-1}>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:slug" element={<ComponentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </>
    )
  }

  export default App
