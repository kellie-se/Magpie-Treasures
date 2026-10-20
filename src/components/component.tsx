import ButtonPage from './buttonPage'
import CardPage from './cardPage'
import TogglePage from './togglePage'
import ToastPage from './toastPage'
import FormFieldPage from './formFieldPage'
import AccordionPage from './accordionPage'
import ModalPage from './modalPage'
import {TriangleAlert} from 'lucide-react'
import { useParams, Link } from 'react-router-dom';

function ComponentPage() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "button") {
    return (
      <ButtonPage />
    )
  }
  else if (slug === "card") {
    return (
      <CardPage />
    )
  }
  else if (slug === "toggle") {
    return (
      <TogglePage />
    )
  }
  else if (slug === "toast") {
    return (
      <ToastPage />
    )
  }
  else if (slug === "formfield") {
    return (
      <FormFieldPage />
    )
  }
  else if (slug === "accordion") {
    return (
      <AccordionPage />
    )
  }
  else if (slug === "modal") {
    return (
      <ModalPage />
    )
  }

  else {
    return (
      <>
      <title>Component Not Found - Magpie Treasures Design System</title>
        <div className="contentWidth">
          <div className="pd48-0 mbPd24-0 center">
            <TriangleAlert aria-hidden="true" className="primColor" />
            <p className="bold mgTp8 mgBt48">Component not found</p>
            <Link to="/components">View Component List</Link>
          </div>
        </div>
      </>
    )
  }
}

export default ComponentPage
