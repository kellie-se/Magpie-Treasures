import Card from './card'
import Button from './button';
import { Link } from 'react-router-dom';
import installImg from '../assets/install.png'
import foundationsImg from '../assets/foundations.png'
import accessibilityImg from '../assets/accessibility.png'
import componentsImg from '../assets/components.png'

function Home() {

  return (
    <>
    <div className="hero">
      <div className="contentWidth">
        <div className="textHolder">
          <h1>Magpie Treasures Design System</h1>
          <h2 className="mgTp12 thin">Calm, friendly, inspiring. The components and foundations behind Magpie Treasures.</h2>
          <div className="mgTp48 colHolder colGap24 colMidAlign mbFlexWrap mbMgTp24 mbGap12">
            <Button buttonText="Get Started" path="/installation" />
            <Link to="/components" className="">Browse Components</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="contentWidth pd24-0 mgBt48">
      <h2>Get Started</h2>
      <div className="mgTp24 colHolder colGap60 tbColWrap tbHalfCard mbFullCard">
        <Card image={installImg} heading="Installation" text="How to get started with the design system." href="/installation" linkText="Installation Guide" headingLevel="h3" />
        <Card image={foundationsImg} heading="Foundations" text="Typography, colors, spacing and more." href="/foundations" linkText="Explore the Foundations" headingLevel="h3" />
        <Card image={accessibilityImg} heading="Accessibility" text="A design system for everyone." href="/accessibility" linkText="Learn about Accessibility" headingLevel="h3" />
        <Card image={componentsImg} heading="Components" text="Browse all available components." href="/components" linkText="Find a Component" headingLevel="h3" />
      </div>
    </div>
    </>
  )
}

export default Home
