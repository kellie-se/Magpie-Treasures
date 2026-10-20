import { Link } from 'react-router-dom';
import feathers from '../assets/feathers.png'

function NotFound() {
  return (
    <>
    <title>Page Not Found - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0 center">
        <div><img src={feathers} alt="" /></div>
        <h1 className="mgTp48">Nothing but feathers...</h1>
        <div className="mgTp24 thin subTitle">Guess this page was too shiny, our magpie must have snatched it before you got here.</div>
        <div className="mgTp48"><Link to="/">Go Back Home</Link></div>
      </div>
    </div>
    </>
  )
}

export default NotFound