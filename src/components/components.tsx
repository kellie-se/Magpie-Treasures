import {IdCard,BellRing,ToggleRight,MousePointer2,Form,AppWindow,ListChevronsUpDown} from 'lucide-react'
import Button from './button';

function Components() {

  return (
    <>
    <title>Components - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <h1>Components</h1>
        <div className="mgTp12 thin subTitle">Reusable, typed building blocks for the Magpie Treasures Design System, each documented with props, states, and usage.</div>
        <div className="mgTp24">
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <IdCard aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Card Component</p>
              <p className="mgTp8">A flexible content container for showcasing an image, heading, and supporting text with an optional link.</p>
            </div>
            <Button buttonText="View Component" path="/components/card" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <BellRing aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Toast Component</p>
              <p className="mgTp8">A dismissible status message for confirmations, errors, warnings, and general alerts.</p>
            </div>
            <Button buttonText="View Component" path="/components/toast" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <ToggleRight aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Theme Toggle Component</p>
              <p className="mgTp8">A two-state switch for toggling a setting on or off, built for the light/dark theme switcher.</p>
            </div>
            <Button buttonText="View Component" path="/components/toggle" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <MousePointer2 aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Button Component</p>
              <p className="mgTp8">The primary interactive control for triggering an action, in default, hover, active, and disabled states.</p>
            </div>
            <Button buttonText="View Component" path="/components/button" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <Form aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Form Field Component</p>
              <p className="mgTp8">A labeled input with built-in support for helper text, error messages, and required indicators.</p>
            </div>
            <Button buttonText="View Component" path="/components/formfield" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <AppWindow aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Modal Component</p>
              <p className="mgTp8">A focus-trapped dialog for interrupting the page to confirm an action or show critical content.</p>
            </div>
            <Button buttonText="View Component" path="/components/modal" />
          </div>
          <div className="colHolder colGap24 colTopAlign borderBottom pd24-0 mbRowHolder mbGap12">
            <ListChevronsUpDown aria-hidden="true" className="primColor mgTpMini flexShrink0" />
            <div className="flexGrow1">
              <p className="bold">Accordion Component</p>
              <p className="mgTp8">A collapsible content panel for progressively revealing information without leaving the page.</p>
            </div>
            <Button buttonText="View Component" path="/components/accordion" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Components
